export interface IEvents {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
}

export const getAllFeaturedEvents = async () => {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
};

export const getAllEvents = async () => {
  const response = await fetch(
    "https://star-wars-f4c01-default-rtdb.firebaseio.com/Events.json"
  );
  const data: IEvents[] = await response.json();
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
  return events;
};
