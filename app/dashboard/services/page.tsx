"use client";
import {
  useGetServicesQuery,
  useDeleteServiceMutation,
} from "@/app/redux/services/api's/authApi";
import React, { useState } from "react";
import {
  Plus,
  Edit,
  Trash2,
  Briefcase,
  Search,
  Loader2,
  X,
  ChevronRight,
  Check,
  Sparkles,
} from "lucide-react";
import Swal from "sweetalert2";
import Link from "next/link";

const Page = () => {
  const { data, isLoading, isError, refetch } = useGetServicesQuery(null);
  const [deleteService] = useDeleteServiceMutation();
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingService, setEditingService] = useState<any>(null);

  const services = data || [];

  // Filter services
  const filteredServices = services.filter(
    (service: any) =>
      service.heading.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleDelete = async (id: string, heading: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: `Delete "${heading}" service?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        await deleteService(id).unwrap();
        await Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: "Service has been deleted successfully.",
          confirmButtonColor: "#3085d6",
        });
        refetch();
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to delete service. Please try again.",
          confirmButtonColor: "#d33",
        });
      }
    }
  };

  if (isLoading) {
    return (
      <main className="flex-1 p-6 lg:p-8 overflow-auto bg-gradient-to-br from-slate-50 via-blue-50 to-white min-h-screen">
        <div className="max-w-7xl mx-auto flex items-center justify-center h-[80vh]">
          <div className="text-center">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl mx-auto mb-6 animate-pulse"></div>
              <Loader2 className="w-8 h-8 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin" />
            </div>
            <p className="text-gray-600 font-medium">
              Loading your services...
            </p>
          </div>
        </div>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="flex-1 p-6 lg:p-8 overflow-auto bg-gradient-to-br from-slate-50 via-blue-50 to-white min-h-screen">
        <div className="max-w-7xl mx-auto flex items-center justify-center h-[80vh]">
          <div className="bg-white rounded-2xl shadow-2xl border border-red-100 p-12 text-center max-w-md">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">⚠️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Unable to Load Services
            </h3>
            <p className="text-gray-600 mb-6">
              Something went wrong. Please refresh the page.
            </p>
            <button
              onClick={() => refetch()}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-lg transition-all font-semibold"
            >
              Retry
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 p-6 lg:p-8 overflow-auto bg-gradient-to-br from-slate-50 via-blue-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Premium Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-2">
                Services Portfolio
                <Sparkles className="w-6 h-6 text-yellow-500" />
              </h1>
              <p className="text-gray-600 mt-1">
                Manage your professional services
              </p>
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between bg-white rounded-2xl p-6 shadow-lg border border-blue-100 mt-6">
            <div className="flex-1 w-full lg:w-auto">
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search services by name or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-0 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition"
                />
              </div>
            </div>

            <div className="flex gap-3 w-full lg:w-auto">
              <Link
                href={"/dashboard/services/add"}
                className="flex-1 lg:flex-initial flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all font-semibold"
              >
                <Plus className="w-5 h-5" />
                New Service
              </Link>
            </div>
          </div>
        </div>

        {/* Premium Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-6 text-white shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <Briefcase className="w-10 h-10 mb-3 opacity-90" />
            <p className="text-blue-100 text-sm font-medium mb-1">
              Total Services
            </p>
            <p className="text-4xl font-bold">{services.length}</p>
          </div>

          <div className="relative overflow-hidden bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16"></div>
            <Search className="w-10 h-10 mb-3 text-blue-600" />
            <p className="text-gray-600 text-sm font-medium mb-1">
              Showing Results
            </p>
            <p className="text-4xl font-bold text-gray-900">
              {filteredServices.length}
            </p>
          </div>

          <div className="relative overflow-hidden bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full -mr-16 -mt-16"></div>
            <Sparkles className="w-10 h-10 mb-3 text-purple-600" />
            <p className="text-gray-600 text-sm font-medium mb-1">
              Active Services
            </p>
            <p className="text-4xl font-bold text-gray-900">
              {services.length}
            </p>
          </div>
        </div>

        {/* Services Showcase */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredServices.map((service: any) => (
              <div
                key={service._id}
                className="group bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Header */}
                <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 p-6 text-white overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  {/* Floating Actions */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <Link
                      href={`/dashboard/services/${service?._id}`}
                      className="p-2.5 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-all shadow-lg"
                    >
                      <Edit className="w-4 h-4 text-gray-600" />
                    </Link>
                    <button
                      onClick={() => handleDelete(service._id, service.heading)}
                      className="p-2.5 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-all shadow-lg"
                    >
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </button>
                  </div>

                  <Briefcase className="w-8 h-8 mb-3 opacity-90" />
                  <h3 className="text-xl font-bold group-hover:text-white transition-colors">
                    {service.heading}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullets */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.bullets
                      ?.slice(0, 3)
                      .map((bullet: string, idx: number) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium border border-blue-100"
                        >
                          <Check className="w-3 h-3" />
                          {bullet.length > 20
                            ? bullet.substring(0, 20) + "..."
                            : bullet}
                        </span>
                      ))}
                    {service.bullets?.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium">
                        +{service.bullets.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Full Features List (Collapsed) */}
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500 mb-2 font-semibold">
                      Key Features:
                    </p>
                    <div className="space-y-1.5">
                      {service.bullets
                        ?.slice(0, 3)
                        .map((bullet: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-2">
                            <ChevronRight className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-xs text-gray-700 line-clamp-1">
                              {bullet}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Empty State
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-16 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              No Services Found
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              {searchTerm
                ? "No services match your search criteria. Try different keywords."
                : "Start adding services to showcase what you offer!"}
            </p>
            <button
              onClick={() => {
                if (searchTerm) {
                  setSearchTerm("");
                } else {
                  setShowAddModal(true);
                }
              }}
              className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all font-semibold"
            >
              {searchTerm ? "Clear Search" : "Add Your First Service"}
            </button>
          </div>
        )}
      </div>

      {/* Add/Edit Modal Placeholder */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative">
            <button
              onClick={() => {
                setShowAddModal(false);
                setEditingService(null);
              }}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {editingService ? "Edit Service" : "Add New Service"}
            </h2>
            <p className="text-gray-600 mb-6">
              Create your service form component here with heading, description,
              and bullets fields.
            </p>
            {/* Add your form component here */}
          </div>
        </div>
      )}
    </main>
  );
};

export default Page;
