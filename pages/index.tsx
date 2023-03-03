import EventList from "@/components/Events/EventList";
import EventSearch from "@/components/Events/EventSearch";
import { IEvents, getAllFeaturedEvents } from "@/helpers/APIUtils";
import { useRouter } from "next/router";
import { Fragment } from "react";

interface Props {
  featuredEvents: IEvents[];
}

const HomePage: React.FC<Props> = ({ featuredEvents }) => {
  const router = useRouter();
  const onSearch = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <Fragment>
      <EventSearch onSearch={onSearch} />
      <EventList featured={featuredEvents} />
      );
    </Fragment>
  );
};

export const getStaticProps = async () => {
  // Pre-Rendering the Data
  const featuredEvents = await getAllFeaturedEvents();
  return {
    props: {
      featuredEvents: featuredEvents,
    },
  };
};

export default HomePage;
