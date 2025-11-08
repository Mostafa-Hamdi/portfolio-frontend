"use client";

import { useForm, Controller } from "react-hook-form";
import { Send } from "lucide-react";
import PhoneInput from "@/app/components/PhoneInput";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const { register, handleSubmit, control, reset, formState } =
    useForm<ContactFormData>({
      defaultValues: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
    });

  const { errors, isSubmitting } = formState;

  const onSubmit = async (data: ContactFormData) => {
    console.log("📩 Form Submitted:", data);
    // TODO: Send to backend (API, email, etc.)
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-8 rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-cyan-400/20 space-y-6"
    >
      {/* Name + Email */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-white font-semibold mb-2 text-sm">
            Your Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            {...register("name", { required: "Name is required" })}
            className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:border-cyan-400/50 focus:outline-none transition"
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-white font-semibold mb-2 text-sm">
            Your Email
          </label>
          <input
            type="email"
            placeholder="john@example.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:border-cyan-400/50 focus:outline-none transition"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Phone */}
      <div>
        <label className="block text-white font-semibold mb-2 text-sm">
          Phone Number
        </label>
        <Controller
          name="phone"
          control={control}
          rules={{
            required: "Phone number is required",
            validate: (value) => {
              // Check if it's a valid phone number
              if (!value) return "Phone number is required";

              return true;
            },
          }}
          render={({ field }) => <PhoneInput {...field} />}
        />

        {errors.phone && (
          <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-white font-semibold mb-2 text-sm">
          Message
        </label>
        <textarea
          rows={6}
          placeholder="Tell me about your project..."
          {...register("message", { required: "Message is required" })}
          className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:border-cyan-400/50 focus:outline-none transition resize-none"
        />
        {errors.message && (
          <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold hover:scale-105 transition flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
        {!isSubmitting && <Send className="w-5 h-5" />}
      </button>
    </form>
  );
}
