import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header
      className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-gradient-to-b from-zinc-900/80 to-zinc-900/60 backdrop-blur-md shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          {/* Logo & Title */}
          <Link
            to="/"
            className="flex items-center gap-3 transition-all hover:scale-[1.02]"
          >
            <div className="size-9 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shadow-inner">
              <MessageSquare className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-xl font-semibold text-zinc-100 tracking-tight">
              Texts
            </h1>
          </Link>

          {/* Nav Buttons */}
          <div className="flex items-center gap-2">
            <Link
              to="/settings"
              className="btn btn-sm px-3 text-sm text-zinc-300 bg-zinc-800 border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600 transition-all shadow-md"
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link>

            {authUser && (
              <>
                <Link
                  to="/profile"
                  className="btn btn-sm px-3 text-sm text-zinc-300 bg-zinc-800 border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600 transition-all shadow-md"
                >
                  <User className="w-4 h-4" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button
                  onClick={logout}
                  className="btn btn-sm px-3 text-sm text-red-400 bg-transparent border border-red-500/40 hover:bg-red-500/10 hover:text-red-300 transition-all shadow-md"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
