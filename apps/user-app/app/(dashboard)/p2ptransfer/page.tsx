import prisma from "@repo/db/client";
import P2PTransactions from "../../../components/P2PTransactions";
import SendMoneyCard from "../../../components/SendMoney";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { redirect } from "next/navigation";

const getP2PTransactions = async () => {
    const getSession = await getServerSession(authOptions);
    if(!getSession) {
        redirect("/api/auth/signin")
    }
    const txns = await prisma.p2pTransfer.findMany({
        where: {
            fromUserId: Number(getSession?.user?.id),
        }
    })
    return txns.map(t => ({
        amount: t.amount,
        to: t.toUserId,
        time: t.timestamp,
    }));
}

export default async function () {
    const txns = await getP2PTransactions();
    return (
        <div className="w-full flex gap-10">
            <div className="w-2/5 flex flex-col">
                <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
                    Wallet Transfer
                </div>
                <div className="pl-5">
                    <SendMoneyCard />
                </div>
                </div>
            <div className="pt-28 pl-10 flex-grow pr-28">
                <P2PTransactions txns={txns} />
            </div>
        </div>
    )
}