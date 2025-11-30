import {
  Bell,
  ChevronDown,
  LayoutDashboard,
  Menu,
  Search,
  X,
} from "lucide-react";
const Header = ({ user, sidebarOpen, setSidebarOpen }: any) => {
  return (
    <header className="bg-white/95 backdrop-blur-xl border-b border-blue-100 sticky top-0 z-40 shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 hover:bg-blue-50 rounded-lg transition"
          >
            {sidebarOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
              <LayoutDashboard className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold italic text-gray-900 hidden sm:block">
              Mostafa Hamdi
            </h1>
          </div>
        </div>

        {/* <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 pl-3 ">
            <button className="flex items-center gap-2 p-2 hover:bg-blue-50 rounded-lg transition">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-semibold shadow-lg shadow-blue-500/20">
                {user?.name?.charAt(0)}
              </div>
              <ChevronDown className="w-4 h-4 text-gray-600 hidden sm:block" />
            </button>
          </div>
        </div> */}
      </div>
    </header>
  );
};
export default Header;
