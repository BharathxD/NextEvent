interface Data {
  title: string;
  description: string;
  image: string;
  isFeatured: string;
  location: string;
  date: string;
}

export const getFeaturedEvents = async () => {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
};

export const getAllEvents = async () => {
  const response = await fetch(
    "https://star-wars-f4c01-default-rtdb.firebaseio.com/Events.json"
  );
  const data: Data[] = await response.json();
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
