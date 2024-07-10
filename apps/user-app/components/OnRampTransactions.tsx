import { Card } from "@repo/ui/card"

export const OnRampTransactions = ({
    transactions
}: {
    transactions: {
        time: Date,
        amount: number,
        // TODO: Can the type of `status` be more specific?
        status: string,
        provider: string
    }[]
}) => {
    if (!transactions.length) {
        return <Card title="Recent Transactions">
            <div className="text-center pb-8 pt-8">
                No Recent transactions
            </div>
        </Card>
    }
    return <Card title="Recent Transactions">
        <div className="pt-2 flex flex-col gap-2">
            {transactions.map((t, index) => <div key={index} className="flex justify-between items-center border-b border-gray-300 pb-2">
                <div>
                    <div className="text-sm">
                        Received INR
                    </div>
                    <div className={`text-xs w-fit rounded-full px-1 flex items-center gap-2`}>
                        <div className={`w-2 h-2 rounded-full ${t.status == "Processing" ? "bg-orange-400": t.status == "Success" ? "bg-green-400" : "bg-red-400"}`}></div>{t.status}
                    </div>
                    
                </div>
                <div className="text-slate-600 text-xs">
                    {t.time.toDateString()}
                </div>
                <div className="flex flex-col justify-center">
                    + Rs {t.amount / 100}
                </div>

            </div>)}
        </div>
    </Card>
}