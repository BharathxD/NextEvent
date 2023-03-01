import { getFeaturedEvents } from "@/dummyData";

const HomePage = () => {
  const feturedEvents = getFeaturedEvents();
  console.log(feturedEvents);
  return (
    <div>
      <ul></ul>
    </div>
  );
};

export default HomePage;
