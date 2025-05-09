// @ts-nocheck
import { Header, StatsCard, TripCard } from '../../../components';
import { dashboardStats,user,allTrips } from '~/constants';

const {totalUsers,userJoined,totalTrips,tripsCreated,userRole} = dashboardStats;



const Dashboard = () => {

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
    <section className="container">
<h1 className="text-xl font-semibold text-dark-100">Created Trips </h1>

      <div className="trip-grid">
        {allTrips.slice(0,4).map(
          (id ,names  ,itinerary,imageUrls,tags,
           estimatedPrice,index) => (
          <TripCard
          key={id}
          id={id.toString()}
          name={names}
          imageUrl={imageUrls[0]}
          location={itinerary?.[0]?.location ?? ''}
          tags={tags}
          price={estimatedPrice}
          />
        ))}
      </div>
    </section>


  </main>
  );
};
export default Dashboard;
