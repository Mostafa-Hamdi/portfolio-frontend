"use client";

import { useForm } from "react-hook-form";
import {
  Briefcase,
  Building,
  Calendar,
  FileText,
  Loader2,
  ArrowLeft,
} from "lucide-react";
import Swal from "sweetalert2";
import { useAddExperienceMutation } from "@/app/redux/services/api's/authApi";
import Link from "next/link";

interface ExperienceFormData {
  jobTitle: string;
  jobType: string;
  company: string;
  description: string;
  workPeriod: string;
}

const AddExperiencePage = () => {
  const [addExperience, { isLoading }] = useAddExperienceMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ExperienceFormData>({
    defaultValues: {
      jobTitle: "",
      jobType: "Fulltime",
      company: "",
      description: "",
      workPeriod: "",
    },
  });

  const jobTypes = [
    "Fulltime",
    "Part-time",
    "Contract",
    "Freelance",
    "Internship",
  ];

  const onSubmit = async (data: ExperienceFormData) => {
    try {
      await addExperience(data).unwrap();

      await Swal.fire({
        title: "Success!",
        text: "Experience has been added successfully.",
        icon: "success",
        confirmButtonColor: "#0891b2",
        background: "#ffffff",
        color: "#1e293b",
        customClass: {
          popup: "border border-blue-200 rounded-2xl shadow-xl",
          confirmButton: "px-6 py-2 rounded-lg font-semibold",
        },
      });

      // Reset form
      reset();

      // Navigate back to experiences page
      // router.push('/admin/experiences');
    } catch (error) {
      await Swal.fire({
        title: "Error!",
        text: "Failed to add experience. Please try again.",
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
  };

  return (
    <div className="flex-1 p-6 lg:p-8 overflow-auto bg-gradient-to-br from-slate-50 via-blue-50 to-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href={"/dashboard/experiences"}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Experiences
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Add New{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h1>
          <p className="text-gray-600">
            Fill in the details of your work experience
          </p>
          <div className="h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full w-24 mt-4"></div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-xl border border-blue-100 shadow-lg p-6 sm:p-8">
          <div className="space-y-6">
            {/* Job Title */}
            <div>
              <label
                htmlFor="jobTitle"
                className="flex items-center gap-2 text-gray-700 font-semibold mb-2"
              >
                <Briefcase className="w-5 h-5 text-blue-600" />
                Job Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="jobTitle"
                {...register("jobTitle", {
                  required: "Job title is required",
                  minLength: {
                    value: 2,
                    message: "Job title must be at least 2 characters",
                  },
                })}
                placeholder="e.g. Frontend Developer"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.jobTitle ? "border-red-500" : "border-blue-200"
                } focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300`}
              />
              {errors.jobTitle && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.jobTitle.message}
                </p>
              )}
            </div>

            {/* Job Type */}
            <div>
              <label
                htmlFor="jobType"
                className="flex items-center gap-2 text-gray-700 font-semibold mb-2"
              >
                <FileText className="w-5 h-5 text-blue-600" />
                Job Type <span className="text-red-500">*</span>
              </label>
              <select
                id="jobType"
                {...register("jobType", { required: "Job type is required" })}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.jobType ? "border-red-500" : "border-blue-200"
                } focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300`}
              >
                {jobTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.jobType && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.jobType.message}
                </p>
              )}
            </div>

            {/* Company */}
            <div>
              <label
                htmlFor="company"
                className="flex items-center gap-2 text-gray-700 font-semibold mb-2"
              >
                <Building className="w-5 h-5 text-blue-600" />
                Company <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="company"
                {...register("company", {
                  required: "Company name is required",
                  minLength: {
                    value: 2,
                    message: "Company name must be at least 2 characters",
                  },
                })}
                placeholder="e.g. ABG"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.company ? "border-red-500" : "border-blue-200"
                } focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300`}
              />
              {errors.company && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.company.message}
                </p>
              )}
            </div>

            {/* Work Period */}
            <div>
              <label
                htmlFor="workPeriod"
                className="flex items-center gap-2 text-gray-700 font-semibold mb-2"
              >
                <Calendar className="w-5 h-5 text-blue-600" />
                Work Period <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="workPeriod"
                {...register("workPeriod", {
                  required: "Work period is required",
                  minLength: {
                    value: 3,
                    message: "Work period must be at least 3 characters",
                  },
                })}
                placeholder="e.g. Jul 2025 - Present"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.workPeriod ? "border-red-500" : "border-blue-200"
                } focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300`}
              />
              {errors.workPeriod && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.workPeriod.message}
                </p>
              )}
              <p className="text-sm text-gray-500 mt-1">
                Format: Month Year - Month Year or "Present"
              </p>
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="flex items-center gap-2 text-gray-700 font-semibold mb-2"
              >
                <FileText className="w-5 h-5 text-blue-600" />
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                {...register("description", {
                  required: "Description is required",
                  minLength: {
                    value: 10,
                    message: "Description must be at least 10 characters",
                  },
                })}
                placeholder="Describe your responsibilities and achievements..."
                rows={5}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.description ? "border-red-500" : "border-blue-200"
                } focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 resize-none`}
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={handleSubmit(onSubmit)}
                disabled={isSubmitting}
                className="cursor-pointer flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Adding...
                  </>
                ) : (
                  <>
                    <Briefcase className="w-5 h-5" />
                    Add Experience
                  </>
                )}
              </button>
              <button
                onClick={() => reset()}
                type="button"
                disabled={isSubmitting}
                className="cursor-pointer px-6 py-3 rounded-xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-all duration-300 disabled:opacity-50"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="mt-6 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6">
          <h3 className="font-semibold text-gray-900 mb-2">
            Tips for adding experience:
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Be specific about your role and responsibilities</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Highlight key achievements and projects</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Use action verbs to describe your work</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Keep the description concise but informative</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AddExperiencePage;
