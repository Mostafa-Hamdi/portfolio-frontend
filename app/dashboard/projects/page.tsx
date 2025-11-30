"use client";

import {
  useDeleteProjectMutation,
  useGetProjectsQuery,
} from "@/app/redux/services/api's/authApi";
import {
  Trash2,
  Edit,
  Eye,
  ExternalLink,
  Github,
  Search,
  Plus,
  Loader2,
  Sparkles,
  Folder,
  Code2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Swal from "sweetalert2";

const Page = () => {
  const { data, isLoading, isError } = useGetProjectsQuery(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [deleteProject] = useDeleteProjectMutation();
  const handleDelete = async (id: any) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This action will permanently delete the project.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        const response = await deleteProject(id).unwrap();

        Swal.fire({
          title: "Deleted!",
          text: "Your project has been successfully deleted.",
          icon: "success",
          confirmButtonColor: "#3085d6",
        });
      } catch (error: any) {
        Swal.fire({
          title: "Error!",
          text: error?.data?.message || "Failed to delete the project.",
          icon: "error",
          confirmButtonColor: "#d33",
        });
        console.error(error);
      }
    }
  };

  // Get unique project types
  const projectTypes = [
    "all",
    ...new Set(data?.data?.map((p: any) => p.type) || []),
  ];

  // Filter projects
  const filteredProjects =
    data?.data?.filter((project: any) => {
      const matchesSearch =
        project.heading.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.paragraph.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType =
        selectedType === "all" || project.type === selectedType;
      return matchesSearch && matchesType;
    }) || [];

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
              Loading your amazing projects...
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
              Unable to Load Projects
            </h3>
            <p className="text-gray-600 mb-6">
              Something went wrong. Please refresh the page.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-lg transition-all font-semibold">
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
              <Folder className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-2">
                Projects Portfolio
                <Sparkles className="w-6 h-6 text-yellow-500" />
              </h1>
              <p className="text-gray-600 mt-1">
                Showcase of innovation and creativity
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
                  placeholder="Search projects by name or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-0 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition"
                />
              </div>
            </div>

            <div className="flex gap-3 w-full lg:w-auto">
              <Link
                href={"/dashboard/projects/add"}
                className="cursor-pointer flex-1 lg:flex-initial flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all font-semibold"
              >
                <Plus className="w-5 h-5" />
                New Project
              </Link>
            </div>
          </div>
        </div>

        {/* Premium Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-6 text-white shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <Code2 className="w-10 h-10 mb-3 opacity-90" />
            <p className="text-blue-100 text-sm font-medium mb-1">
              Total Projects
            </p>
            <p className="text-4xl font-bold">{data?.data?.length || 0}</p>
          </div>

          <div className="relative overflow-hidden bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16"></div>
            <Folder className="w-10 h-10 mb-3 text-blue-600" />
            <p className="text-gray-600 text-sm font-medium mb-1">
              Showing Results
            </p>
            <p className="text-4xl font-bold text-gray-900">
              {filteredProjects.length}
            </p>
          </div>

          <div className="relative overflow-hidden bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full -mr-16 -mt-16"></div>
            <Sparkles className="w-10 h-10 mb-3 text-purple-600" />
            <p className="text-gray-600 text-sm font-medium mb-1">Categories</p>
            <p className="text-4xl font-bold text-gray-900">
              {projectTypes.length - 1}
            </p>
          </div>
        </div>

        {/* Projects Showcase */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProjects.map((project: any) => (
              <div
                key={project._id}
                className="group bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-56 bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden">
                  <Image
                    src={project?.image}
                    alt={project?.heading}
                    width={1080}
                    height={720}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  {/* Floating Actions */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link
                      href={`/dashboard/projects/${project?._id}`}
                      className="p-2.5 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-all shadow-lg"
                    >
                      <Edit className="w-4 h-4 text-gray-600" />
                    </Link>
                    <button
                      onClick={() => handleDelete(project?._id)}
                      className="cursor-pointer p-2.5 cursor-pointer bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-all shadow-lg"
                    >
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </button>
                  </div>

                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm text-blue-600 rounded-full text-xs font-bold shadow-lg">
                      {project?.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
                    {project?.heading}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {project?.paragraph}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project?.skills
                      ?.slice(0, 3)
                      .map((skill: string, idx: number) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium border border-blue-100"
                        >
                          {skill}
                        </span>
                      ))}
                    {project?.skills?.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium">
                        +{project.skills.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2 pt-4 border-t border-gray-100">
                    {project?.siteLink && (
                      <Link
                        href={project.siteLink}
                        target="_blank"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all text-sm font-semibold"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </Link>
                    )}
                    {project?.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all text-sm font-semibold"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Empty State
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-16 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              No Projects Found
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              We couldn't find any projects matching your criteria. Try
              adjusting your search or filters.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedType("all");
              }}
              className="cursor-pointer px-8 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all font-semibold"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Page;
