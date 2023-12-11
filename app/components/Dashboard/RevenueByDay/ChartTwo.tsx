"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { CHART_TWO_OPTIONS, CHART_TWO_SERIES } from "../data";
import useRetry from "@/app/hooks/useRetry";

const ChartTwo = () => {
  const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
  const { data, isLoading, isError, errorMessage } = useRetry(
    "/revenue-sales-by-day"
  );
  const [sales, setSales] = useState(CHART_TWO_SERIES);

  useEffect(() => {
    if (data && !isLoading) {
      setSales([
        {
          name: "Sales",
          data: data.revenue_by_day,
        },
        {
          name: "Revenue",
          data: data.sales_by_day,
        },
      ]);
    }
  }, [data, isLoading]);

  return (
    <>
      {isError && !data && (
        <p className="text-red-500 text-xs">
          Error while loading, please be patient
        </p>
      )}
      <Chart
        type="bar"
        // @ts-ignore
        options={CHART_TWO_OPTIONS}
        series={sales}
        height={335}
        width="100%"
      />
    </>
  );
};

export default ChartTwo;
