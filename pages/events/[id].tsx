import { getEventById } from "@/dummyData";
import { useRouter } from "next/router";

const EventDetail = () => {
  const router = useRouter();
  const eventID = router.query.id;
  if (!eventID) {
    return <p>No event found</p>;
  }
  const event = getEventById(eventID.toString());
  
  return (
    <div>
      <h1>Event Detail</h1>
    </div>
  );
};

export default EventDetail;
