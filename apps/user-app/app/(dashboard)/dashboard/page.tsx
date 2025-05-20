import { Card } from "@repo/ui/card";
import CardDash from "@repo/ui/cardDash";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Wallet Dashboard</h1>
        <p className="text-gray-600 mt-1">Overview of your wallet activity</p>
      </header>

      {/* Summary Cards */}
      <section className="w-full flex flex-wrap gap-6">
        <CardDash label="Total Expense" color="red" amount={420} />
        <CardDash label="Total Revenue" color="blue" amount={67423} />
        <CardDash label="Total Profit" color="green" amount={37862} />
      </section>

      {/* Future Actions / Cards */}
      <section className="mt-10 grid md:grid-cols-2 gap-6">
        <Card title="Recent Transactions">
          {/* You can map your transactions here */}
          <p className="text-gray-500 text-sm">No recent transactions available.</p>
        </Card>

        <Card title="Upcoming Payments">
          <p className="text-gray-500 text-sm">Nothing scheduled yet.</p>
        </Card>
      </section>
    </div>
  );
}
