import { Calendar as BigCalendar, dateFnsLocalizer } from "react-big-calendar";
import { format } from "date-fns/format";
import { parse } from "date-fns/parse";
import { startOfWeek } from "date-fns/startOfWeek";
import { getDay } from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../styles/calendar.module.css";
import { useTheme } from "../context/ThemeContext";

const locales = {};
const localizer = dateFnsLocalizer({
  locales,
  format,
  parse,
  startOfWeek,
  getDay,
});

export const CalendarView = () => {
  const { theme } = useTheme();

  return (
    <div className="max-w-6xl mx-auto " data-theme={theme}>
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
