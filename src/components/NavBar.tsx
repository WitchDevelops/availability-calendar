import { Link, useNavigate } from "react-router-dom";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Navbar = ({ user }: { user: any | null }) => {
  const nav = useNavigate();
  async function signOut() {
    // TODO: sign out user with supabase
    nav("/login");
  }
  return (
    <nav className="w-full bg-white dark:bg-gray-800 shadow-md mb-4">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="font-bold">
          Is Domi free?
        </Link>

        <div className="space-x-3">
          <ThemeSwitcher />
          {!user ? (
            <>
              <Link to="/login" className="text-sm">
                Log in
              </Link>
            </>
          ) : (
            <>
              <span className="text-sm mr-2">Hello</span>
              <button onClick={signOut} className="text-sm">
                Sign out
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
