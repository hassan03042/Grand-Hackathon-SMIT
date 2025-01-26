import React from 'react';
import StatsItem from "./StatsItem";

const statsData = [
  {
    endCountNum: 25,
    endCountText: "+",
    text: "Yrs. of Experience",
  },
  {
    endCountNum: 200,
    endCountText: "+",
    text: "Clients",
  },
  {
    endCountNum: 100,
    endCountText: "%",
    text: "Clients Satisfied",
  },
];

const Stats = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Impact in Numbers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statsData.map((item, index) => (
            <StatsItem
              key={index}
              endCountNum={item.endCountNum}
              endCountText={item.endCountText}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
