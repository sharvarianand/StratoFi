
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";

// Mock data for the chart
const data = [
  { date: "Jan", price: 4000 },
  { date: "Feb", price: 3000 },
  { date: "Mar", price: 5000 },
  { date: "Apr", price: 2780 },
  { date: "May", price: 1890 },
  { date: "Jun", price: 2390 },
  { date: "Jul", price: 3490 },
  { date: "Aug", price: 2000 },
  { date: "Sep", price: 2780 },
  { date: "Oct", price: 3890 },
  { date: "Nov", price: 3490 },
  { date: "Dec", price: 4000 },
];

const timeRanges = ["1D", "1W", "1M", "3M", "6M", "1Y", "All"];

interface StockChartProps {
  symbol?: string;
  title?: string;
}

export function StockChart({ symbol = "AAPL", title = "Stock Performance" }: StockChartProps) {
  const [selectedRange, setSelectedRange] = useState("1Y");
  
  return (
    <div className="glass-card p-4 h-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">${data[data.length - 1].price.toFixed(2)}</span>
            <span className="text-sm text-green-500">+2.4%</span>
          </div>
        </div>
        <div className="flex gap-1">
          {timeRanges.map((range) => (
            <Button
              key={range}
              variant={selectedRange === range ? "default" : "ghost"}
              className={`px-2 py-1 h-8 text-xs ${
                selectedRange === range ? "bg-primary" : ""
              }`}
              onClick={() => setSelectedRange(range)}
            >
              {range}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="date" stroke="rgba(255,255,255,0.5)" />
            <YAxis stroke="rgba(255,255,255,0.5)" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(0,0,0,0.8)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "8px",
              }}
            />
            <Line
              type="monotone"
              dataKey="price"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
