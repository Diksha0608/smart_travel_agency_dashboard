import { Header, StatsCard, TripCard } from '../../../components';

const Dashboard = () => {
  const dashboardStats = {
    totalUsers: 1245,
    userJoined:{currentMonth:1200,lastMonth:1000},
    totalTrips:3200,
    tripsCreated:{currentMonth:100,lastMonth:50},
    userRole:{total:63,currentMonth:100,lastMonth:50}

  }

  const {totalUsers,userJoined,totalTrips,tripsCreated,userRole} = dashboardStats;
  const user = {name:'Roy'}

  return (
  <main className="dashboard wrapper">
   <Header
   title={`Welcome ${user?.name ?? 'Guest'}`}
   description="Track activity, trends and popular destinations in real time"
   />
    <section className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          headerTitle="Total User"
          total={totalUsers}
          lastMonthCount={userJoined.lastMonth}
          currentMonthCount={userJoined.currentMonth}
        />

        <StatsCard
          headerTitle="Total Trips"
          total={totalTrips}
          currentMonthCount={tripsCreated.currentMonth}
          lastMonthCount={tripsCreated.lastMonth}
        />

        <StatsCard
          headerTitle="Active Users"
          total={userRole.total}
          lastMonthCount={userRole.lastMonth}
          currentMonthCount={userRole.currentMonth}
        />
      </div>
    </section>

    <TripCard/>
  </main>
  );
};
export default Dashboard;
