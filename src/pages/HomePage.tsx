import { CalendarView } from "../components/CalendarView";
import { Navbar } from "../components/NavBar";
export const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="p-4">
        <CalendarView />
      </main>
    </div>
  );
};
