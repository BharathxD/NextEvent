import EventList from "@/components/Events/EventList";
import Head from "next/head";
import Link from "next/link";
import EventSearch from "@/components/Events/EventSearch";
import { getAllFeaturedEvents } from "@/helpers/APIUtils";
import TEvents from "@/types/Events.types";
import { useRouter } from "next/router";
import { Fragment } from "react";

interface Props {
  featuredEvents: TEvents[];
}

const HomePage: React.FC<Props> = ({ featuredEvents }) => {
  const router = useRouter();
  const onSearch = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <Fragment>
      <Head>
        <title>NextJS Events</title>
      </Head>
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
