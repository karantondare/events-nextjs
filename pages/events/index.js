import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import { getAllEvents } from "../../dummy-data";
import EventsSearch from "./events-search";

function EventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const filteredEventsPath = `/events/${year}/${month}`;
    router.push(filteredEventsPath);
  };

  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList eventList={events} />
    </div>
  );
}

export default EventsPage;
