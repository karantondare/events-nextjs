import React from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

function FilteredEventsPage() {
  const router = useRouter();
  const filteredData = router.query.slug;

  if (!filteredData) return <p className="center">Loading...</p>;

  const selectedYear = +filteredData[0];
  const selectedMonth = +filteredData[1];

  const filteredDate = new Date(selectedYear, selectedMonth - 1);

  if (
    isNaN(selectedYear) ||
    isNaN(selectedMonth) ||
    selectedYear > 2030 ||
    selectedYear < 2021 ||
    selectedMonth < 1 ||
    selectedMonth > 12
  )
    return (
      <>
        <ErrorAlert>
          <p>Invalid Filter. Please adjust your values.</p>
          <div className="center">
            <Button link="/events">Show All Events</Button>
          </div>
        </ErrorAlert>
      </>
    );

  const filteredEvents = getFilteredEvents({
    year: selectedYear,
    month: selectedMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0)
    return (
      <>
        <ErrorAlert>
          <p>No events found.</p>
          <div className="center">
            <Button link="/events">Show All Events</Button>
          </div>
        </ErrorAlert>
      </>
    );

  return (
    <>
      <ResultsTitle date={filteredDate} />
      <EventList eventList={filteredEvents} />
    </>
  );
}

export default FilteredEventsPage;
