"use client";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Send } from "lucide-react";
import dynamic from "next/dynamic";
import Swal from "sweetalert2";
import { useApp } from "../providers";

const PhoneInput = dynamic(() => import("@/app/components/PhoneInput"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[50px] rounded-[14px] bg-surface-elevated border border-surface-border animate-pulse" />
  ),
});

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const { t } = useApp();
  const errs = t.contact.form.errors;

  const schema = yup.object({
    name: yup.string().required(errs.name),
    email: yup.string().email(errs.email).required(errs.email),
    phone: yup
      .string()
      .matches(/^\+?[0-9\s\-()]{6,20}$/, errs.phone)
      .required(errs.phone),
    message: yup.string().required(errs.message),
  });

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
        "https://script.google.com/macros/s/AKfycbwHPBPo4NIhk7oj3Q1dBulwouKY9j6yqfd3wpWwkjk9PqnGXajKiESah14-ZquqgBrnSA/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      Swal.fire({
        title: t.contact.form.successTitle,
        text: t.contact.form.successText,
        icon: "success",
        confirmButtonColor: "#00b8db",
        background: "#061420",
        color: "#e2e8f0",
      });

      reset();
    } catch (err) {
      console.error("Submission error:", err);

      Swal.fire({
        title: t.contact.form.errorTitle,
        text: t.contact.form.errorText,
        icon: "error",
        confirmButtonColor: "#00b8db",
        background: "#061420",
        color: "#e2e8f0",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-8 rounded-3xl bg-gradient-to-br from-surface-elevated to-transparent border border-brand-cyan/20 space-y-6"
    >
      {/* Name + Email */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-text-primary font-semibold mb-2 text-sm">
            {t.contact.form.name}
          </label>
          <input
            type="text"
            placeholder={t.contact.form.namePlaceholder}
            {...register("name")}
            className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-surface-border text-text-primary placeholder-text-faint-2 focus:border-brand-cyan/50 focus:outline-none transition"
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-text-primary font-semibold mb-2 text-sm">
            {t.contact.form.email}
          </label>
          <input
            type="email"
            placeholder={t.contact.form.emailPlaceholder}
            {...register("email")}
            className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-surface-border text-text-primary placeholder-text-faint-2 focus:border-brand-cyan/50 focus:outline-none transition"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Phone */}
      <div>
        <label className="block text-text-primary font-semibold mb-2 text-sm">
          {t.contact.form.phone}
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
        <label className="block text-text-primary font-semibold mb-2 text-sm">
          {t.contact.form.message}
        </label>
        <textarea
          rows={6}
          placeholder={t.contact.form.messagePlaceholder}
          {...register("message")}
          className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-surface-border text-text-primary placeholder-text-faint-2 focus:border-brand-cyan/50 focus:outline-none transition resize-none"
        />
        {errors.message && (
          <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-blue text-white font-bold hover:scale-105 transition flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {isSubmitting ? (
          <span className="animate-pulse">{t.contact.form.submitting}</span>
        ) : (
          <>
            {t.contact.form.submit} <Send className="w-5 h-5" />
          </>
        )}
      </button>
    </form>
  );
}
