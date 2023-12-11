"use client";
import { useState, useEffect } from "react";
import { SERIES, OPTIONS } from "../data";
import dynamic from "next/dynamic";
import useData from "@/app/hooks/useData";

const ChartOne = () => {
  const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
  const { data, isLoading } = useData("/revenue-sales-by-month");
  const [sales, setSales] = useState(SERIES);

  useEffect(() => {
    if (data && !isLoading) {
      setSales([
        {
          name: "Product One",
          data: data.revenue_by_month,
        },
        {
          name: "Product Two",
          data: data.sales_by_month,
        },
      ]);
    }
  }, [data, isLoading]);

  return (
    <div className="min-h-335">
      <Chart
        type="area"
        // @ts-ignore
        options={OPTIONS}
        series={sales}
        height={335}
        width="100%"
      />
    </div>
  );
};

export default ChartOne;
