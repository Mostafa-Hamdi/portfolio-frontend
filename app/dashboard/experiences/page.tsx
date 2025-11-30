"use client";

import {
  useDeleteExperienceMutation,
  useGetExperiencesQuery,
} from "@/app/redux/services/api's/authApi";
import {
  Briefcase,
  Edit,
  Trash2,
  Plus,
  Calendar,
  Building,
} from "lucide-react";
import Link from "next/link";
import Swal from "sweetalert2";

const ExperiencesPage = () => {
  const { data, isLoading: experiencesLoading } = useGetExperiencesQuery();
  const [deleteExperience, { isLoading }] = useDeleteExperienceMutation();

  const experiences = data || [];

  const handleDelete = async (id: string, jobTitle: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      html: `Do you want to delete the experience: <strong>${jobTitle}</strong>?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0891b2",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      background: "#ffffff",
      color: "#1e293b",
      customClass: {
        popup: "border border-blue-200 rounded-2xl shadow-xl",
        confirmButton: "px-6 py-2 rounded-lg font-semibold",
        cancelButton: "px-6 py-2 rounded-lg font-semibold",
      },
    });

    if (result.isConfirmed) {
      try {
        await deleteExperience(id).unwrap();

        await Swal.fire({
          title: "Deleted!",
          text: "Experience has been deleted successfully.",
          icon: "success",
          confirmButtonColor: "#0891b2",
          background: "#ffffff",
          color: "#1e293b",
          customClass: {
            popup: "border border-blue-200 rounded-2xl shadow-xl",
            confirmButton: "px-6 py-2 rounded-lg font-semibold",
          },
        });
      } catch (error) {
        await Swal.fire({
          title: "Error!",
          text: "Failed to delete experience. Please try again.",
          icon: "error",
          confirmButtonColor: "#ef4444",
          background: "#ffffff",
          color: "#1e293b",
          customClass: {
            popup: "border border-red-200 rounded-2xl shadow-xl",
            confirmButton: "px-6 py-2 rounded-lg font-semibold",
          },
        });
      }
    }
  };

  const handleEdit = (id: string) => {
    // Navigate to edit page or open edit modal
    console.log("Edit experience:", id);
    // Example: router.push(`/admin/experiences/edit/${id}`);
  };

  return (
    <div className="flex-1 p-6 lg:p-8 overflow-auto bg-gradient-to-br from-slate-50 via-blue-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                Work{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Experience
                </span>
              </h1>
              <p className="text-gray-600">
                Manage your professional experience
              </p>
            </div>
            <Link
              href={"/dashboard/experiences/add"}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Add New
            </Link>
          </div>
          <div className="h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full w-24"></div>
        </div>

        {/* Experiences List */}
        {experiencesLoading ? (
          <div className="text-center py-12">
            <div className="inline-block w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-600 mt-4 font-medium">
              Loading experiences...
            </p>
          </div>
        ) : experiences && experiences.length > 0 ? (
          <div className="grid gap-6">
            {experiences.map((experience: any, index: number) => (
              <div
                key={experience._id}
                className="group relative rounded-xl overflow-hidden bg-white border border-blue-100 hover:border-blue-300 hover:shadow-xl shadow-lg transition-all duration-500 hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                          {experience.jobTitle}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Building className="w-4 h-4" />
                            <span className="font-medium">
                              {experience.company}
                            </span>
                          </div>
                          <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                          <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 text-blue-700 text-xs font-semibold">
                            {experience.jobType}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/dashboard/experiences/${experience?._id}`}
                        onClick={() => handleEdit(experience._id)}
                        className="p-2.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-600 hover:bg-blue-100 hover:border-blue-300 hover:scale-110 transition-all duration-300"
                        title="Edit"
                      >
                        <Edit className="w-5 h-5" />
                      </Link>
                      <button
                        onClick={() =>
                          handleDelete(experience._id, experience.jobTitle)
                        }
                        disabled={isLoading}
                        className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-red-600 hover:bg-red-100 hover:border-red-300 hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        title="Delete"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Work Period */}
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {experience.workPeriod}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Decorative line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Corner Glow Effect */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-10 blur-3xl transition-all duration-700 rounded-full"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-blue-100 shadow-lg">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No Experiences Yet
            </h3>
            <p className="text-gray-600 mb-6">
              Start by adding your first work experience
            </p>
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-2 mx-auto">
              <Plus className="w-5 h-5" />
              Add Experience
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperiencesPage;
