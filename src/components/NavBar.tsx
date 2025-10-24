import { Link } from "react-router-dom";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useAuth } from "../context/auth";

export const Navbar = () => {
  const { user, signOut } = useAuth();

  return (
    <nav className="w-full bg-autumn-100 dark:bg-autumn-700 shadow-md mb-4">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          to="/"
          className="font-bold text-autumn-700 dark:text-autumn-100 hover:text-autumn-500 dark:hover:text-autumn-200 transition-colors"
        >
          Is Domi free?
        </Link>

        <div className="space-x-3">
          <ThemeSwitcher />
          {!user ? (
            <>
              <Link
                to="/login"
                className="text-sm text-autumn-600 dark:text-autumn-200 hover:text-autumn-500 dark:hover:text-autumn-100 transition-colors"
              >
                Log in
              </Link>
            </>
          ) : (
            <>
              <span className="text-sm mr-2 text-autumn-700 dark:text-autumn-100">
                Hello, {user.email}
              </span>
              <button
                onClick={() => signOut()}
                className="text-sm text-autumn-berry hover:text-autumn-500 dark:text-autumn-200 dark:hover:text-autumn-100 transition-colors"
              >
                Sign out
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
