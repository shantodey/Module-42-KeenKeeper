import React from 'react';
import { useOutletContext } from 'react-router';
import NoResutls from '../../assets/No_results.png';
import {
  Pie,
  PieChart,
  ResponsiveContainer,
  Legend,
  Cell,
  Tooltip,
} from "recharts";

const Analytics = () => {
  const { selectedActions } = useOutletContext();

  const data = [
    {
      name: "Text",
      value: (selectedActions || []).filter((i) => i.method === "Text").length,
      fill: "#7f37f5",
    },
    {
      name: "Call",
      value: (selectedActions || []).filter((i) => i.method === "Call").length,
      fill: "#244d3f",
    },
    {
      name: "Video",
      value: (selectedActions || []).filter((i) => i.method === "Video").length,
      fill: "#37a163",
    },
  ];

  const isEmpty = data.every((i) => i.value === 0);

  return (
    <section className='my-10 max-w-278 mx-auto px-4'>
      <h1 className='text-4xl md:text-5xl font-bold mb-8'>Friendship Analytics</h1>
      <div className='rounded-2xl shadow p-8 bg-white'>
        <h6 className='font-medium text-xl text-[#244D3F] mb-6'>By Interaction Type</h6>

        {!isEmpty ? (
          <div style={{ width: '100%', height: 350 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  innerRadius="60%"
                  outerRadius="80%"
                  cornerRadius={8}
                  paddingAngle={5}
                  dataKey="value"
                  isAnimationActive={true}
                >
                  {data.map((entry, index) => (
                    <Cell key={index} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value, name) => [`${value} entries`, name]}
                  contentStyle={{
                    borderRadius: "8px",
                    border: "none",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    fontSize: "13px",
                  }}
                />
                <Legend
                  iconType="circle"
                  iconSize={8}
                  formatter={(value) => (
                    <span style={{ color: "#6b7280", fontSize: "13px" }}>{value}</span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className='flex flex-col items-center justify-center py-10'>
            <img src={NoResutls} alt="No Data" className="w-64" />
            <p className="text-gray-400 mt-4 text-lg font-medium">No activity found in Analytics!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Analytics;