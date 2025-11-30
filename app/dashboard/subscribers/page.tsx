"use client";

import {
  useDeleteSubscriberMutation,
  useGetSubscribersQuery, // ✅ correct spelling
} from "@/app/redux/services/api's/authApi";
import {
  Mail,
  User,
  Calendar,
  Phone,
  MessageSquare,
  Trash2,
  Search,
} from "lucide-react";
import { useState } from "react";
import Swal from "sweetalert2";

interface Subscriber {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  message?: string;
  createdAt: string;
  updatedAt: string;
}

const Page = () => {
  const { data, isLoading, isError } = useGetSubscribersQuery();
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteSubscriber] = useDeleteSubscriberMutation();
  const handleDelete = async (id: any) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "Cancel",
      });

      if (result.isConfirmed) {
        await deleteSubscriber(id);
        Swal.fire("Deleted!", "The subscriber has been deleted.", "success");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error!", "Failed to delete subscriber.", "error");
    }
  };
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Filter subscribers based on search
  const filteredSubscribers =
    data?.data?.filter(
      (subscriber: Subscriber) =>
        subscriber.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        subscriber.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        subscriber.phone?.toLowerCase().includes(searchTerm.toLowerCase()),
    ) || [];

  if (isLoading) {
    return (
      <main className="flex-1 p-6 lg:p-8 overflow-auto bg-gradient-to-br from-slate-50 via-blue-50 to-white min-h-screen">
        <div className="flex items-center justify-center min-h-[600px]">
          <div className="text-center">
            <div className="w-20 h-20 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 font-medium">
              Loading subscribers...
            </p>
          </div>
        </div>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="flex-1 p-6 lg:p-8 overflow-auto bg-gradient-to-br from-slate-50 via-blue-50 to-white min-h-screen">
        <div className="flex items-center justify-center min-h-[600px]">
          <div className="text-center bg-white rounded-2xl shadow-xl p-12 max-w-md">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-10 h-10 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Failed to Load
            </h2>
            <p className="text-gray-600">
              Unable to fetch subscribers data. Please try again later.
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 p-6 lg:p-8 overflow-auto bg-gradient-to-br from-slate-50 via-blue-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Subscribers
              </h1>
              <p className="text-gray-600">
                Manage and view all your subscribers
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl shadow-lg">
              <div className="text-sm font-medium">Total Subscribers</div>
              <div className="text-3xl font-bold">
                {data?.data?.length || 0}
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by name, email, or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border-2 border-blue-100 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-300 transition shadow-sm"
            />
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Name
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Phone
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Message
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Subscribed On
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredSubscribers.length > 0 ? (
                  filteredSubscribers.map(
                    (subscriber: Subscriber, index: number) => (
                      <tr
                        key={subscriber._id}
                        className="hover:bg-blue-50/50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                              {subscriber.name.charAt(0).toUpperCase()}
                            </div>
                            <span className="font-medium text-gray-900">
                              {subscriber.name}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <a
                            href={`mailto:${subscriber.email}`}
                            className="text-blue-600 hover:text-blue-700 hover:underline"
                          >
                            {subscriber.email}
                          </a>
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          {subscriber.phone || (
                            <span className="text-gray-400 italic">N/A</span>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          {subscriber.message ? (
                            <div
                              className="max-w-xs truncate text-gray-600"
                              title={subscriber.message}
                            >
                              {subscriber.message}
                            </div>
                          ) : (
                            <span className="text-gray-400 italic">
                              No message
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-gray-600 text-sm">
                          {formatDate(subscriber.createdAt)}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-center gap-2">
                            <button
                              onClick={() => handleDelete(subscriber?._id)}
                              className="cursor-pointer p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              title="Delete subscriber"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ),
                  )
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center">
                      <div className="flex flex-col items-center justify-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                          <Search className="w-8 h-8 text-gray-400" />
                        </div>
                        <p className="text-gray-500 text-lg font-medium">
                          No subscribers found
                        </p>
                        <p className="text-gray-400 text-sm mt-1">
                          Try adjusting your search criteria
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden p-4 space-y-4">
            {filteredSubscribers.length > 0 ? (
              filteredSubscribers.map((subscriber: Subscriber) => (
                <div
                  key={subscriber._id}
                  className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 border border-blue-100 shadow-md"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {subscriber.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">
                          {subscriber.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {formatDate(subscriber.createdAt)}
                        </p>
                      </div>
                    </div>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-blue-600" />
                      <a
                        href={`mailto:${subscriber.email}`}
                        className="text-blue-600 hover:underline"
                      >
                        {subscriber.email}
                      </a>
                    </div>

                    {subscriber.phone && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone className="w-4 h-4 text-gray-400" />
                        {subscriber.phone}
                      </div>
                    )}

                    {subscriber.message && (
                      <div className="flex items-start gap-2 text-sm text-gray-600">
                        <MessageSquare className="w-4 h-4 text-gray-400 mt-0.5" />
                        <p className="flex-1">{subscriber.message}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="py-12 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-500 text-lg font-medium">
                  No subscribers found
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  Try adjusting your search criteria
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-xl shadow-lg border border-blue-100 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">
                  Total Subscribers
                </p>
                <p className="text-3xl font-bold text-gray-900">
                  {data?.data?.length || 0}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <User className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-blue-100 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">
                  With Messages
                </p>
                <p className="text-3xl font-bold text-gray-900">
                  {data?.data?.filter((s: Subscriber) => s.message).length || 0}
                </p>
              </div>
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-cyan-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-blue-100 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">
                  With Phone
                </p>
                <p className="text-3xl font-bold text-gray-900">
                  {data?.data?.filter((s: Subscriber) => s.phone).length || 0}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
