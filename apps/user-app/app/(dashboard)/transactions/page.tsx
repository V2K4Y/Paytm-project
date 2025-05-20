import { Card } from "@repo/ui/card";

const dummyTransactions = [
  {
    id: "TXN12345",
    date: "2025-05-01",
    type: "Credit",
    amount: 1200,
    status: "Success",
  },
  {
    id: "TXN12346",
    date: "2025-05-02",
    type: "Debit",
    amount: 500,
    status: "Failed",
  },
  {
    id: "TXN12347",
    date: "2025-05-05",
    type: "Credit",
    amount: 3400,
    status: "Pending",
  },
];

export default function TransactionsPage() {
  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      {/* Page Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Transactions</h1>
        <p className="text-gray-600">View and manage all wallet transactions</p>
      </header>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <select className="p-2 border rounded text-sm">
          <option value="">All Types</option>
          <option value="Credit">Credit</option>
          <option value="Debit">Debit</option>
        </select>
        <input
          type="text"
          placeholder="Search by ID..."
          className="p-2 border rounded text-sm"
        />
      </div>

      {/* Transactions Table */}
      <Card title="Transaction History">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3">ID</th>
                <th className="p-3">Date</th>
                <th className="p-3">Type</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {dummyTransactions.map((txn) => (
                <tr
                  key={txn.id}
                  className="border-t hover:bg-gray-50 transition-colors"
                >
                  <td className="p-3 font-medium">{txn.id}</td>
                  <td className="p-3">{txn.date}</td>
                  <td className="p-3">{txn.type}</td>
                  <td className="p-3">₹ {txn.amount}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        txn.status === "Success"
                          ? "bg-green-100 text-green-700"
                          : txn.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {txn.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
