
function txns () {

}

export default function P2PTransactions ({txns}: {
    txns: {
        amount: number,
        to: number,
        time: Date
    }[]
}) {
    return (
        <div className="p-5 rounded-xl bg-white/50 h-fit">
            <div>
                <p className="font-semibold text-xl pb-2 border-b border-gray-200 mb-3">Recent Transactions</p>
                <div className="flex flex-col gap-3">
                    {txns.map((txn, index) => (
                        <div key={index} className="flex gap-20 justify-between pb-2 pt-3 border-b border-gray-200 items-center">
                            <div className="flex flex-col">
                                <p>Transferred INR to: {txn.to}</p>
                                <p className="text-xs">{txn.time.toDateString()}</p>
                            </div>
                            <p className="bg-red-400 text-white rounded-md px-2 py-1">- Rs. {txn.amount/100}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}