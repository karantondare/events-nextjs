import EventItem from "./event-item";
import classes from "./event-list.module.css";

function EventList({ eventList }) {
  return (
    <ul className={classes.list}>
      {eventList.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
}

export default EventList;
