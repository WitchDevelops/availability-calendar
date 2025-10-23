import NavBar from "../components/NavBar";
import { CalendarView } from "../components/CalendarView";
export const HomePage = () => {
  return (
    <div className="min-h-screen">
      <NavBar user={null} />
      <main className="p-4">
        <CalendarView />
      </main>
    </div>
  );
};
