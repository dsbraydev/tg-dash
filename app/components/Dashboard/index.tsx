import RevenueByMonth from "./RevenueByMonth";
import RevenueByDay from "./RevenueByDay";
import Stats from "./Stats";

const Dashboard = () => {
  return (
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <Stats />
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <RevenueByMonth />
        <RevenueByDay />
      </div>
    </div>
  );
};

export default Dashboard;
