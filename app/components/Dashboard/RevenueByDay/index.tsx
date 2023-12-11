"use client";
import React from "react";
import ChartTwo from "./ChartTwo";

const RevenueByDay = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-bold text-black dark:text-white">
            Profit this week
          </h4>
        </div>
      </div>

      <div className="min-h-335">
        <ChartTwo />
      </div>
    </div>
  );
};

export default RevenueByDay;
