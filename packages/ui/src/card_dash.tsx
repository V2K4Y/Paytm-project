type CardColor = 'red' | 'blue' | 'green' | 'yellow' | 'purple' | 'gray' | 'white';

type Props = {
  label: string;
  amount: number;
  color?: CardColor;
};

const bgColorMap: Record<CardColor, string> = {
  red: 'bg-red-500',
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  yellow: 'bg-yellow-500',
  purple: 'bg-purple-500',
  gray: 'bg-gray-500',
  white: 'bg-white',
};

const textColorMap: Record<CardColor, string> = {
  red: 'text-white',
  blue: 'text-white',
  green: 'text-white',
  yellow: 'text-white',
  purple: 'text-white',
  gray: 'text-white',
  white: 'text-gray-800',
};

export default function CardDash({ label, amount, color = 'white' }: Props) {
  const bgColor = bgColorMap[color];
  const textColor = textColorMap[color];

  return (
    <div
      className={`w-full md:w-64 border rounded-xl flex flex-col justify-between p-4 shadow-md ${bgColor} ${textColor}`}
    >
      <div className="flex justify-between mb-4 text-sm opacity-80">
        <div>+23.1%</div>
        <div>📈 ZigZag</div>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium uppercase tracking-wide">{label}</span>
        <span className="text-2xl font-semibold">₹ {amount.toLocaleString()}</span>
      </div>
    </div>
  );
}
