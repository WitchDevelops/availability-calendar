import { Calendar as BigCalendar, dateFnsLocalizer } from "react-big-calendar";
import type { View } from "react-big-calendar";
import { format } from "date-fns/format";
import { parse } from "date-fns/parse";
import { startOfWeek } from "date-fns/startOfWeek";
import { getDay } from "date-fns/getDay";
import { useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import styles from "../styles/calendar.module.css";

// Define the Event type
// interface CalendarEvent {
//   id: number;
//   title: string;
//   start: Date;
//   end: Date;
// }

const locales = {};
const localizer = dateFnsLocalizer({
  locales,
  format,
  parse,
  startOfWeek,
  getDay,
});

export const CalendarView = () => {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState<View>("month");

  return (
    <div className={`max-w-6xl mx-auto ${styles.calendar}`}>
      <BigCalendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        defaultView="month"
        view={view}
        onView={setView}
        date={date}
        onNavigate={setDate}
        views={["month", "week"]}
        style={{ height: 600 }}
        selectable
      />
    </div>
  );
};
