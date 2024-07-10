"use server"

import prisma from "@repo/db/client"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth";

export default async function sendMoneyP2P(to: string, amount: number) {
    const session = await getServerSession(authOptions);
    const from = session?.user?.id;
    if(!from) {
        return {
            message: "Something went wrong!",
        }
    }
    const toUser = await prisma.user.findFirst({
        where: {
            number: to,
        }
    })
    if(!toUser) {
        return {
            message: "User doesn't exist!",
        }
    }

    try {
        await prisma.$transaction(async (tx) => {

            await tx.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${Number(from)} FOR UPDATE`
            const fromBalance = await tx.balance.findFirst({
                where: {
                    userId: Number(from),
                }
            })
        
            if(!fromBalance || (fromBalance.amount < Number(amount))) {
                return {
                    message: "Insufficient fund!"
                }
            }

            await tx.balance.update({
                where: {
                    userId: Number(from),
                },
                data: {
                    amount: {
                        decrement: Number(amount),
                    }
                }
            })

            await tx.balance.update({
                where: {
                    userId: toUser.id,
                },
                data: {
                    amount: {
                        increment: Number(amount),
                    }
                }
            })

            await tx.p2pTransfer.create({
                data: {
                    amount,
                    timestamp: new Date(),
                    fromUserId: Number(from),
                    toUserId: toUser.id
                }
            })
        })
        return {
            message: "Successfully Transferred!"
        }
    } catch (error) {
        console.log(error);
        return {
            message: "Transaction Failed!"
        }
    }
}