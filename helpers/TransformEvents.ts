import TEvents from "@/types/Events.types";

const TransformEvent = (data: TEvents[]) => {
  const events = Object.entries(data).map(
    ([id, { title, description, image, isFeatured, location, date }]) => ({
      id,
      title,
      description,
      image,
      isFeatured,
      location,
      date,
    })
  );
  return events;
};

export default TransformEvent;
