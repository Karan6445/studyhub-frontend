import React from "react";

const StatCard = ({ title, value, icon, color }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-gray-500">{title}</h4>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>
        </div>

        <div className={`${color} p-4 rounded-xl text-white`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;