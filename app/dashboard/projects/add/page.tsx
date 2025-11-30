"use client";
import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import {
  Upload,
  X,
  Plus,
  Github,
  ExternalLink,
  Image as ImageIcon,
  Trash2,
} from "lucide-react";
import Image from "next/image";
import { useAddProjectMutation } from "@/app/redux/services/api's/authApi";

type FormValues = {
  image: FileList;
  heading: string;
  paragraph: string;
  type: string;
  siteLink: string;
  github: string;
};

const schema = yup.object({
  image: yup
    .mixed<FileList>()
    .test(
      "required",
      "Image is required",
      (value: any) => value && value.length > 0,
    )
    .test(
      "fileType",
      "Only JPEG, PNG, and WebP images are supported",
      (value: any) =>
        value &&
        ["image/jpeg", "image/png", "image/webp"].includes(value[0]?.type),
    )
    .test(
      "fileSize",
      "Image must be less than 2MB",
      (value: any) => value && value[0]?.size <= 2 * 1024 * 1024,
    )
    .required("Image is required"),
  heading: yup.string().required("Project title is required"),
  paragraph: yup.string().required("Project description is required"),
  type: yup.string().required("Project type is required"),
  siteLink: yup
    .string()
    .url("Must be a valid URL")
    .required("Live site link is required"),
  github: yup.string().url("Must be a valid URL"),
});

const Page = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const [skillInput, setSkillInput] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [addProject, { isLoading }] = useAddProjectMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
    setValue,
  } = useForm<FormValues>({
    resolver: yupResolver(schema) as any,
  });

  const imageFile = watch("image");

  // Handle image preview
  React.useEffect(() => {
    if (imageFile && imageFile.length > 0) {
      const file = imageFile[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  }, [imageFile]);

  const handleAddSkill = () => {
    const trimmedSkill = skillInput.trim();
    if (trimmedSkill === "") return;
    if (skills.includes(trimmedSkill)) {
      Swal.fire({
        icon: "info",
        title: "Duplicate Skill",
        text: "This skill is already added",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
      });
      return;
    }
    setSkills([...skills, trimmedSkill]);
    setSkillInput("");
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddSkill();
    }
  };

  const onSubmit = async (data: FormValues) => {
    if (skills.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "Missing Skills",
        text: "Please add at least one skill",
        confirmButtonColor: "#3085d6",
      });
      return;
    }

    const formData = new FormData();

    if (data.image && data.image.length > 0) {
      formData.append("image", data.image[0]);
    }
    formData.append("heading", data.heading);
    formData.append("paragraph", data.paragraph);
    formData.append("type", data.type);
    formData.append("siteLink", data.siteLink);
    if (data.github) {
      formData.append("github", data.github);
    }

    // Append each skill separately as skills[0], skills[1], etc.
    skills.forEach((skill, index) => {
      formData.append(`skills[${index}]`, skill);
    });

    try {
      const response: any = await addProject(formData).unwrap();

      Swal.fire({
        icon: "success",
        title: "Congratulations!",
        text: "Your new project has been created successfully.",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Great!",
      });

      reset();
      setSkills([]);
      setImagePreview(null);
    } catch (error: any) {
      console.error("Error submitting form:", error);
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text:
          error?.data?.message ||
          "Something went wrong while adding your project.",
        confirmButtonColor: "#d33",
      });
    }
  };

  const handleClearImage = () => {
    setImagePreview(null);
    setValue("image", undefined as any);
  };

  return (
    <main className="flex-1 p-6 lg:p-8 overflow-auto bg-gradient-to-br from-slate-50 via-blue-50 to-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Add New Project
          </h1>
          <p className="text-gray-600">
            Share your amazing work with the world
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Image Upload Section */}
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8">
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Project Image *
            </label>

            {!imagePreview ? (
              <div className="border-2 border-dashed border-blue-200 rounded-xl p-8 text-center hover:border-blue-400 transition-colors">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                    <Upload className="w-8 h-8 text-blue-600" />
                  </div>
                  <label className="cursor-pointer">
                    <span className="text-blue-600 font-semibold hover:text-blue-700">
                      Click to upload
                    </span>
                    <span className="text-gray-600"> or drag and drop</span>
                    <input
                      type="file"
                      {...register("image")}
                      accept="image/jpeg,image/png,image/webp"
                      className="hidden"
                    />
                  </label>
                  <p className="text-xs text-gray-500 mt-2">
                    PNG, JPG, WebP up to 2MB
                  </p>
                </div>
              </div>
            ) : (
              <div className="relative rounded-xl overflow-hidden border-2 border-blue-200">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-64 object-cover"
                />
                <button
                  type="button"
                  onClick={handleClearImage}
                  className="cursor-pointer absolute top-4 right-4 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            )}

            {errors.image && (
              <p className="text-red-600 text-sm mt-2 flex items-center gap-1">
                <X className="w-4 h-4" />
                {errors.image.message}
              </p>
            )}
          </div>

          {/* Project Details */}
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8 space-y-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Project Details
            </h2>

            {/* Heading */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Project Title *
              </label>
              <input
                {...register("heading")}
                className="w-full px-4 py-3 bg-gray-50 border border-blue-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition"
                placeholder="e.g., E-commerce Platform"
              />
              {errors.heading && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.heading.message}
                </p>
              )}
            </div>

            {/* Paragraph */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Project Description *
              </label>
              <textarea
                {...register("paragraph")}
                rows={4}
                className="w-full px-4 py-3 bg-gray-50 border border-blue-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition resize-none"
                placeholder="Describe your project in detail..."
              />
              {errors.paragraph && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.paragraph.message}
                </p>
              )}
            </div>

            {/* Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Project Type *
              </label>
              <select
                {...register("type")}
                className="w-full px-4 py-3 bg-gray-50 border border-blue-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition"
              >
                <option value="">Select a type</option>
                <option value="Wordpress">Wordpress</option>

                <option value="Shopify">Shopify</option>
                <option value="Frontend React.js">Frontend React.js</option>
                <option value="Frontend Next.js">Frontend Next.js</option>
                <option value="Zoho Sites">Zoho Sites</option>
                <option value="Fullstack Strapi">Fullstack Strapi</option>
                <option value="Fullstack Node.js">Fullstack Node.js</option>
              </select>
              {errors.type && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.type.message}
                </p>
              )}
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8">
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Technologies & Skills *
            </label>

            {/* Display Added Skills */}
            {skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 rounded-lg border border-blue-200 font-medium"
                  >
                    {skill}
                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(skill)}
                      className="cursor-pointer hover:text-red-600 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </span>
                ))}
              </div>
            )}

            {/* Add Skill Input */}
            <div className="flex gap-3">
              <input
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 px-4 py-3 bg-gray-50 border border-blue-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition"
                placeholder="e.g., React, TypeScript, Node.js"
              />
              <button
                type="button"
                onClick={handleAddSkill}
                className="cursor-pointer px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all font-semibold flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Add
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Press Enter or click Add to include a skill
            </p>
          </div>

          {/* Links Section */}
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8 space-y-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Project Links
            </h2>

            {/* Site Link */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-blue-600" />
                Live Site URL *
              </label>
              <input
                {...register("siteLink")}
                className="w-full px-4 py-3 bg-gray-50 border border-blue-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition"
                placeholder="https://example.com"
              />
              {errors.siteLink && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.siteLink.message}
                </p>
              )}
            </div>

            {/* GitHub Link */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Github className="w-4 h-4 text-gray-900" />
                GitHub Repositoryd
              </label>
              <input
                {...register("github")}
                className="w-full px-4 py-3 bg-gray-50 border border-blue-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition"
                placeholder="https://github.com/username/repo"
              />
              {errors.github && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.github.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => {
                reset();
                setSkills([]);
                setImagePreview(null);
              }}
              className="cursor-pointer flex-1 px-6 py-4 bg-white border-2 border-blue-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-all font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting || isLoading}
              className="cursor-pointer flex-1 px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting || isLoading ? "Adding Project..." : "Add Project"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Page;
