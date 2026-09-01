"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your name";
    if (!formData.phone.trim()) {
      errs.phone = "Please enter your phone number";
    } else if (!/^[0-9+() -]{8,18}$/.test(formData.phone.trim())) {
      errs.phone = "Please enter a valid phone number";
    }
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      errs.message = "Please enter your project details or message";
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    // UI state simulation (ready for backend / mailer service)
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-gray-50 border border-gray-200 p-8 rounded-sm text-center space-y-4">
        <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto" />
        <h3 className="text-xl font-bold text-gray-900">Message Received</h3>
        <p className="text-sm text-gray-600 max-w-md mx-auto">
          Thank you, <span className="font-semibold">{formData.name}</span>. We have received your inquiry and our team will get in touch with you shortly.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: "", phone: "", email: "", message: "" });
          }}
          className="inline-block mt-4 text-xs font-bold uppercase tracking-wider text-amber-700 hover:text-amber-800 underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`w-full px-4 py-2.5 text-sm border rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-600 transition-colors ${
            errors.name ? "border-red-500 bg-red-50/20" : "border-gray-300 focus:border-gray-900"
          }`}
          placeholder="Your Full Name"
        />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={`w-full px-4 py-2.5 text-sm border rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-600 transition-colors ${
              errors.phone ? "border-red-500 bg-red-50/20" : "border-gray-300 focus:border-gray-900"
            }`}
            placeholder="+91 75590 85055"
          />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full px-4 py-2.5 text-sm border rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-600 transition-colors ${
              errors.email ? "border-red-500 bg-red-50/20" : "border-gray-300 focus:border-gray-900"
            }`}
            placeholder="name@example.com"
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`w-full px-4 py-2.5 text-sm border rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-600 transition-colors resize-y ${
            errors.message ? "border-red-500 bg-red-50/20" : "border-gray-300 focus:border-gray-900"
          }`}
          placeholder="Tell us about your project requirements (e.g. ACP work, structural glazing, renovation, etc.)..."
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-sm transition-colors"
      >
        <span>SEND MESSAGE</span>
        <Send className="w-3.5 h-3.5" />
      </button>
    </form>
  );
};
