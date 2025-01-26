import React, { useEffect, useState } from 'react';
import CountUp from "react-countup";

const StatsItem = ({ endCountNum, endCountText, text }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
      <div className="text-4xl font-bold text-blue-600 mb-2 flex items-center">
        {isVisible && (
          <CountUp
            end={endCountNum}
            duration={2.5}
            separator=","
          />
        )}
        <span className="ml-1">{endCountText}</span>
      </div>
      <p className="text-gray-600 text-center font-medium">{text}</p>
    </div>
  );
};

export default StatsItem;

