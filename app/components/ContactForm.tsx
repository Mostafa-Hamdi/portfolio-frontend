"use client";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Send } from "lucide-react";
import PhoneInput from "@/app/components/PhoneInput";
import { useAddSubscriberMutation } from "../redux/services/api's/authApi";
import Swal from "sweetalert2";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// ✅ Yup validation schema
const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(
      /^\+?[0-9\s\-()]{6,20}$/,
      "Enter a valid phone number with country code",
    )
    .required("Phone number is required"),
  message: yup.string().required("Message is required"),
});

export default function ContactForm() {
  const [addSubscriber] = useAddSubscriberMutation();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbx5iFwGJf-SEi8O_RY2h90pKYhye8w_izKqJx6LQK-vIio5SDL8mr3nTXdqAPmzqYUn/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      // ✅ Show success alert
      Swal.fire({
        title: "Message Sent!",
        text: "Thanks for reaching out — I’ll get back to you soon.",
        icon: "success",
        confirmButtonColor: "#06b6d4",
        background: "#0f172a",
        color: "#e2e8f0",
      });

      reset();
    } catch (err) {
      console.error("Submission error:", err);

      // ❌ Show error alert
      Swal.fire({
        title: "Oops!",
        text: "Something went wrong. Please try again later.",
        icon: "error",
        confirmButtonColor: "#06b6d4",
        background: "#0f172a",
        color: "#e2e8f0",
      });
    }
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
            {...register("name")}
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
            {...register("email")}
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
          {...register("message")}
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
        {isSubmitting ? (
          <span className="animate-pulse">Sending...</span>
        ) : (
          <>
            Send Message <Send className="w-5 h-5" />
          </>
        )}
      </button>
    </form>
  );
}
