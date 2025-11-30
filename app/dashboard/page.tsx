"use client";
import { useSelector } from "react-redux";
import { Briefcase, Settings, Award, Calendar, Users } from "lucide-react";

const Page = () => {
  const userData = useSelector((state: any) => state.auth.user);

  const stats = [
    {
      title: "Projects",
      count: userData?.projectsCount || 0,
      icon: Briefcase,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      title: "Services",
      count: userData?.servicesCount || 0,
      icon: Settings,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      title: "Experiences",
      count: userData?.experiencesCount || 0,
      icon: Award,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
    {
      title: "Subscribers",
      count: userData?.subscribersCount || 0,
      icon: Users,
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
    },
  ];

  return (
    <main className="flex-1 p-6 lg:p-8 overflow-auto bg-gradient-to-br from-slate-50 via-blue-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back,{" "}
            <span className="capitalize bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {userData?.user?.username || "Guest"}
            </span>
            ! 👋
          </h2>
          <p className="text-gray-600">
            Here's what's happening with your business today.
          </p>
        </div>

        {/* Statistics Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-blue-100 hover:border-blue-300 transition-all hover:scale-[1.02] shadow-lg hover:shadow-xl group"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${stat.bgColor} ${stat.textColor}`}
                >
                  Active
                </span>
              </div>

              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">
                  Total {stat.title}
                </p>
                <p className="text-3xl font-bold text-gray-900">{stat.count}</p>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500 flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    Updated today
                  </span>
                  <span className="font-semibold">Live</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Card */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-8 shadow-2xl shadow-blue-500/30 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">Total Portfolio Items</h3>
              <p className="text-blue-100 mb-6">
                Your complete collection of work and achievements
              </p>

              {/* Dynamic Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase className="w-4 h-4" />
                    <span className="text-sm text-blue-100">Projects</span>
                  </div>
                  <p className="text-2xl font-bold">
                    {userData?.projectsCount || 0}
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center gap-2 mb-1">
                    <Settings className="w-4 h-4" />
                    <span className="text-sm text-blue-100">Services</span>
                  </div>
                  <p className="text-2xl font-bold">
                    {userData?.servicesCount || 0}
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center gap-2 mb-1">
                    <Award className="w-4 h-4" />
                    <span className="text-sm text-blue-100">Experiences</span>
                  </div>
                  <p className="text-2xl font-bold">
                    {userData?.experiencesCount || 0}
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center gap-2 mb-1">
                    <Users className="w-4 h-4" />
                    <span className="text-sm text-blue-100">Subscribers</span>
                  </div>
                  <p className="text-2xl font-bold">
                    {userData?.subscribersCount || 0}
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border-4 border-white/20">
                <div className="text-center">
                  <p className="text-4xl font-bold">
                    {(userData?.projectsCount || 0) +
                      (userData?.servicesCount || 0) +
                      (userData?.experiencesCount || 0) +
                      (userData?.subscribersCount || 0)}
                  </p>
                  <p className="text-xs text-blue-100 mt-1">Total</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
