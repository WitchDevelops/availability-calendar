import { Calendar as BigCalendar, dateFnsLocalizer } from "react-big-calendar";
import { format } from "date-fns/format";
import { parse } from "date-fns/parse";
import { startOfWeek } from "date-fns/startOfWeek";
import { getDay } from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {};
const localizer = dateFnsLocalizer({
  locales,
  format,
  parse,
  startOfWeek,
  getDay,
});

export const CalendarView = () => {
  return (
    <div>
      <BigCalendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        defaultView="month"
        views={["month", "week"]}
        style={{ height: 600 }}
        selectable
      />
    </div>
  );
};
