import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-autumn-50 dark:bg-autumn-800">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}
