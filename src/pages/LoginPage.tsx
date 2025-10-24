import { useState } from "react";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate("/");
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md p-8">
        <h1 className="text-2xl font-semibold mb-6 text-autumn-700 dark:text-autumn-100 text-center">
          Login
        </h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            {error}
          </div>
        )}

        <div>
          <label
            htmlFor="email"
            className="block text-autumn-600 dark:text-autumn-200"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-md border border-autumn-300 dark:border-autumn-600 
                     bg-autumn-50 dark:bg-autumn-700 text-autumn-900 dark:text-autumn-100"
            required
            autoComplete="email"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-autumn-600 dark:text-autumn-200"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full rounded-md border border-autumn-300 dark:border-autumn-600 
                     bg-autumn-50 dark:bg-autumn-700 text-autumn-900 dark:text-autumn-100"
            required
            autoComplete="current-password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-autumn-leaf hover:bg-autumn-moss text-autumn-50 
                   font-medium py-2 px-4 rounded-md transition-colors"
        >
          Sign In
        </button>
      </form>
      <div className="text-sm text-autumn-600 dark:text-autumn-200">
        <p>Don't have an account?</p>
        <p>I'm sorry, accounts are only for the management.</p>
      </div>
    </div>
  );
};
