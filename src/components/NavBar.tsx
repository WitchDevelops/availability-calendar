import { Link, useNavigate } from "react-router-dom";

export default function NavBar({ user }: { user: any | null }) {
  const nav = useNavigate();
  async function signOut() {
    // TODO: sign out user with supabase
    nav("/login");
  }
  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <Link to="/" className="font-bold">
        AvailShare
      </Link>
      <div className="space-x-3">
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
    </nav>
  );
}
