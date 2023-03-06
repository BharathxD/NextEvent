import TEvents from "@/types/Events.types";

const TransformEvent = (data: TEvents[]) => {
  let events = Object.entries(data).map(
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
};
