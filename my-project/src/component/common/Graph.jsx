import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Graph() {
  const [activeTime, setActiveTime] = useState("12H");
  const data12H = [
    {
      time: "16:00",
      acledaBank: 5.0,
      abaBank: 6.0,
      cambodiaBank: 3.0,
      chipMong: 5.2,
      sathapana: 5.5,
    },
    {
      time: "16:30",
      acledaBank: 5.3,
      abaBank: 5.8,
      cambodiaBank: 3.2,
      chipMong: 4.8,
      sathapana: 5.3,
    },
    {
      time: "17:00",
      acledaBank: 5.5,
      abaBank: 5.5,
      cambodiaBank: 3.5,
      chipMong: 4.5,
      sathapana: 5.0,
    },
    {
      time: "17:30",
      acledaBank: 5.2,
      abaBank: 5.7,
      cambodiaBank: 3.8,
      chipMong: 4.0,
      sathapana: 5.2,
    },
    {
      time: "18:00",
      acledaBank: 5.0,
      abaBank: 6.5,
      cambodiaBank: 4.0,
      chipMong: 3.8,
      sathapana: 5.5,
    },
    {
      time: "18:30",
      acledaBank: 4.8,
      abaBank: 6.8,
      cambodiaBank: 4.2,
      chipMong: 3.5,
      sathapana: 5.8,
    },
    {
      time: "19:00",
      acledaBank: 5.2,
      abaBank: 6.5,
      cambodiaBank: 4.5,
      chipMong: 4.2,
      sathapana: 6.0,
    },
    {
      time: "19:30",
      acledaBank: 5.8,
      abaBank: 6.2,
      cambodiaBank: 4.0,
      chipMong: 4.8,
      sathapana: 5.5,
    },
    {
      time: "20:00",
      acledaBank: 6.0,
      abaBank: 6.0,
      cambodiaBank: 3.8,
      chipMong: 5.2,
      sathapana: 5.2,
    },
    {
      time: "20:30",
      acledaBank: 5.5,
      abaBank: 5.8,
      cambodiaBank: 3.5,
      chipMong: 5.5,
      sathapana: 5.0,
    },
    {
      time: "21:00",
      acledaBank: 5.2,
      abaBank: 6.5,
      cambodiaBank: 4.2,
      chipMong: 5.0,
      sathapana: 5.5,
    },
    {
      time: "21:30",
      acledaBank: 5.5,
      abaBank: 6.8,
      cambodiaBank: 4.8,
      chipMong: 4.5,
      sathapana: 6.0,
    },
    {
      time: "22:00",
      acledaBank: 6.5,
      abaBank: 6.5,
      cambodiaBank: 5.0,
      chipMong: 4.2,
      sathapana: 5.8,
    },
    {
      time: "22:30",
      acledaBank: 7.0,
      abaBank: 6.2,
      cambodiaBank: 5.2,
      chipMong: 4.8,
      sathapana: 5.5,
    },
    {
      time: "23:00",
      acledaBank: 6.5,
      abaBank: 6.0,
      cambodiaBank: 5.5,
      chipMong: 5.5,
      sathapana: 5.2,
    },
    {
      time: "23:30",
      acledaBank: 6.0,
      abaBank: 6.2,
      cambodiaBank: 6.0,
      chipMong: 6.0,
      sathapana: 5.5,
    },
    {
      time: "00:00",
      acledaBank: 5.8,
      abaBank: 6.5,
      cambodiaBank: 6.2,
      chipMong: 6.2,
      sathapana: 5.8,
    },
  ];
  const timePeriods = ["12H", "1D", "1W", "1M", "1Y", "2Y", "5Y", "10Y"];
  const bankColors = {
    acledaBank: "#2563eb",
    abaBank: "#ef4444",
    cambodiaBank: "#f97316",
    chipMong: "#10b981",
    sathapana: "#6366f1",
  };
  return (
    <>
      <div className="w-full bg-white p-4 md:px-[120px] md:py-[60px] rounded-lg shadow-sm">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
          <div>
            <h2 className="md:text-2xl text-xl font-bold">
              Interest Rate (AER)
              <span className="text-red-500">-0.01%</span>{" "}
              <span className="text-xs md:text-sm text-gray-500">(12H)</span>
            </h2>
            <p className="text-xs md:text-sm text-gray-500 mt-1">
              Monday, 12th March, 2024
            </p>
          </div>
          <div className="grid grid-cols-4 md:flex gap-2">
            {timePeriods.map((period) => (
              <button
                key={period}
                onClick={() => setActiveTime(period)}
                className={`px-2 md:px-3 py-1 text-xs md:text-sm font-medium rounded-full transition-colors ${
                  activeTime === period
                    ? "bg-red-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300} className="md:!h-96">
          <LineChart
            data={data12H}
            margin={{
              top: 5,
              right: 10,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="time"
              tick={{ fontSize: 10 }}
              interval="preserveStartEnd"
              stroke="#94a3b8"
            />
            <YAxis
              domain={[0, 9]}
              ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
              tickFormatter={(value) => `${value}.0%`}
              tick={{ fontSize: 10 }}
              stroke="#94a3b8"
              width={40}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                fontSize: "12px",
              }}
              formatter={(value) => `${value}%`}
            />
            <Legend
              verticalAlign="bottom"
              height={36}
              iconType="line"
              wrapperStyle={{ fontSize: "11px" }}
            />

            {/* Lines for each bank */}
            <Line
              type="monotone"
              dataKey="acledaBank"
              stroke={bankColors.acledaBank}
              strokeWidth={2}
              dot={false}
              name="Acleda Bank"
            />
            <Line
              type="monotone"
              dataKey="abaBank"
              stroke={bankColors.abaBank}
              strokeWidth={2}
              dot={false}
              name="ABA Bank"
            />
            <Line
              type="monotone"
              dataKey="cambodiaBank"
              stroke={bankColors.cambodiaBank}
              strokeWidth={2}
              dot={false}
              name="Cambodia Public Bank"
            />
            <Line
              type="monotone"
              dataKey="chipMong"
              stroke={bankColors.chipMong}
              strokeWidth={2}
              dot={false}
              name="Chip Mong Bank"
            />
            <Line
              type="monotone"
              dataKey="sathapana"
              stroke={bankColors.sathapana}
              strokeWidth={2}
              dot={false}
              name="Sathapana Bank"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default Graph;
