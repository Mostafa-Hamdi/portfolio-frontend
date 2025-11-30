"use client";
import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Plus, X, Briefcase } from "lucide-react";
import { useAddServiceMutation } from "@/app/redux/services/api's/authApi";
import Swal from "sweetalert2";

type FormValues = {
  heading: string;
  description: string;
};

const schema = yup.object({
  heading: yup.string().required("Service title is required"),
  description: yup.string().required("Service description is required"),
});

const Page = () => {
  const [bullets, setBullets] = useState<string[]>([]);
  const [bulletInput, setBulletInput] = useState("");
  const [addService, { isLoading }] = useAddServiceMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      heading: "",
      description: "",
    },
  });

  const handleAddBullet = () => {
    const trimmedBullet = bulletInput.trim();
    if (trimmedBullet === "") return;

    if (bullets.includes(trimmedBullet)) {
      Swal.fire({
        icon: "warning",
        title: "Duplicate Feature",
        text: "This feature is already added",
        confirmButtonColor: "#0ea5e9",
      });
      return;
    }

    setBullets([...bullets, trimmedBullet]);
    setBulletInput("");
  };

  const handleRemoveBullet = (bulletToRemove: string) => {
    setBullets(bullets.filter((bullet) => bullet !== bulletToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddBullet();
    }
  };

  const onSubmit = async (data: FormValues) => {
    if (bullets.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "Missing Features",
        text: "Please add at least one feature/bullet point",
        confirmButtonColor: "#0ea5e9",
        confirmButtonText: "Got it!",
      });
      return;
    }

    const serviceData = {
      heading: data.heading,
      description: data.description,
      bullets,
    };

    console.log("Sending data:", serviceData);

    try {
      const response = await addService(serviceData).unwrap();

      // ✅ Success: show SweetAlert message
      if (response.status === 201 || response.statusCode === 201) {
        await Swal.fire({
          icon: "success",
          title: "Service Created! 🎉",
          text: "Thanks for adding your service!",
          confirmButtonColor: "#0ea5e9",
          confirmButtonText: "Awesome!",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });

        // Reset form & clear bullets
        reset();
        setBullets([]);
      } else {
        // ⚠️ If response didn’t return 201
        Swal.fire({
          icon: "success",
          title: "Congratulations!",
          text: "Your new project has been created successfully.",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Great!",
        });
        reset();
        setBullets([]);
      }
    } catch (error: any) {
      console.error("Error submitting form:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text:
          error?.data?.message ||
          "Something went wrong while adding your service. Please try again.",
        confirmButtonColor: "#ef4444",
      });
    }
  };

  return (
    <main className="flex-1 p-6 lg:p-8 overflow-auto bg-gradient-to-br from-slate-50 via-blue-50 to-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Add New Service
          </h1>
          <p className="text-gray-600">
            Showcase the services you offer to your clients
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Service Details */}
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8 space-y-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-blue-600" />
              Service Details
            </h2>

            {/* Heading */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Service Title *
              </label>
              <input
                {...register("heading")}
                className="w-full px-4 py-3 bg-gray-50 border border-blue-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition"
                placeholder="e.g., Web Development"
              />
              {errors.heading && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.heading.message}
                </p>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Service Description *
              </label>
              <textarea
                {...register("description")}
                rows={4}
                className="w-full px-4 py-3 bg-gray-50 border border-blue-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition resize-none"
                placeholder="Describe your service in detail..."
              />
              {errors.description && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>
          </div>

          {/* Features/Bullets Section */}
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8">
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Service Features / Bullet Points *
            </label>

            {/* Display Added Bullets */}
            {bullets.length > 0 && (
              <div className="space-y-2 mb-4">
                {bullets.map((bullet, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200 group hover:border-blue-300 transition-colors"
                  >
                    <div className="flex-1 flex items-center gap-2">
                      <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-blue-700 text-sm font-medium">
                        {bullet}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveBullet(bullet)}
                      className="cursor-pointer opacity-0 group-hover:opacity-100 hover:text-red-600 transition-all text-gray-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Add Bullet Input */}
            <div className="flex gap-3">
              <input
                value={bulletInput}
                onChange={(e) => setBulletInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 px-4 py-3 bg-gray-50 border border-blue-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition"
                placeholder="e.g., Custom website development, Responsive design..."
              />
              <button
                type="button"
                onClick={handleAddBullet}
                className="cursor-pointer px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all font-semibold flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Add
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Press Enter or click Add to include a feature
            </p>

            {/* Bullets Preview */}
            {bullets.length > 0 && (
              <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <p className="text-sm font-semibold text-blue-900 mb-2">
                  Preview ({bullets.length} features):
                </p>
                <ul className="list-disc list-inside space-y-1">
                  {bullets.map((bullet, idx) => (
                    <li key={idx} className="text-sm text-blue-700">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => {
                reset();
                setBullets([]);
              }}
              className="cursor-pointer flex-1 px-6 py-4 bg-white border-2 border-blue-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-all font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="cursor-pointer flex-1 px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Adding Service..." : "Add Service"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Page;
