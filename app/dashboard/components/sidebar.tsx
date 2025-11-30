import { useLogoutMutation } from "@/app/redux/services/api's/authApi";
import { toggleLogin } from "@/app/redux/services/authSlice";
import {
  Briefcase,
  FolderKanban,
  Home,
  LogOut,
  UserCircle2Icon,
  Wrench,
} from "lucide-react";
import swal from "sweetalert";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = ({ sidebarOpen }: any) => {
  const path = usePathname();
  const navItems = [
    { icon: Home, label: "Dashboard", active: true, link: "/dashboard" },
    { icon: FolderKanban, label: "Projects", link: "/dashboard/projects" },
    { icon: Wrench, label: "Services", link: "/dashboard/services" },
    { icon: Briefcase, label: "Experiences", link: "/dashboard/experiences" },
    {
      icon: UserCircle2Icon,
      label: "Subscribers",
      link: "/dashboard/subscribers",
    },
  ];
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const handleLogout = () => {
    swal({
      title: "😢 Are you sure to logout?",
      icon: "warning",
      buttons: {
        cancel: {
          text: "No",
          value: false,
          visible: true,
          className:
            "bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 mx-2",
        },
        confirm: {
          text: "Yes",
          value: true,
          visible: true,
          className:
            "bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform mx-2",
        },
      },
      dangerMode: true,
    }).then(async (willLogout) => {
      if (willLogout) {
        try {
          await logout(null);
          dispatch(
            toggleLogin({ isLogin: false, token: undefined, user: undefined }),
          );
          localStorage.removeItem("token");
          swal("Logged out successfully!", { icon: "success" });
        } catch (err) {
          console.log(err);
          swal("Failed to logout!", { icon: "error" });
        }
      } else {
        swal("You are still logged in!");
      }
    });
  };

  return (
    <aside
      className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"} pt-5 lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-30 w-64 bg-white/95 backdrop-blur-xl border-r border-blue-100 transition-transform duration-300 mt-[73px] lg:mt-0 shadow-lg`}
    >
      <nav className="p-4 space-y-2">
        {navItems.map((item, idx) => (
          <Link
            href={item.link}
            key={idx}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              path === item.link
                ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/30"
                : path.startsWith(item.link + "/") && item.link !== "/dashboard"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/30"
                  : "text-gray-700 hover:bg-blue-50"
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all mt-8"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </nav>
    </aside>
  );
};
export default Sidebar;
