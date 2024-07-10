"use server";

import prisma from "@repo/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";

export const createOnRampTransaction = async (amount: number, provider: string) => {
    const session = await getServerSession(authOptions);
    const userId = session?.user.id;
    
    // Usually the token is acquired from bank api e.g. token = axios.get('api.bank_URL/getToken', {amount: 400})
    const token = Math.random().toString();
    if(!userId) {
        return {
            message: "User not loogedIn!",
        }
    }
    try {
        await prisma.onRampTransaction.create({
            data: {
                userId: Number(userId),
                amount,
                status: "Processing",
                startTime: new Date(),
                provider,
                token
            }
        })

        return {
            message: "On ramp transaction added!"
        }
    } catch (error) {
        console.log(error);
        return {
            message: "Error",
        }
    }
}