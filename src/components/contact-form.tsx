"use client";

import { useState } from "react";


export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!accessKey) {
      setStatus("error");
      return;
    }

    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mt-12 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-ink/80 block">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full bg-transparent border-b border-line py-2 text-ink placeholder-muted focus:outline-none focus:border-accent transition-colors"
            placeholder="John Doe"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-ink/80 block">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full bg-transparent border-b border-line py-2 text-ink placeholder-muted focus:outline-none focus:border-accent transition-colors"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-ink/80 block">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          required
          className="w-full bg-transparent border-b border-line py-2 text-ink placeholder-muted focus:outline-none focus:border-accent transition-colors"
          placeholder="Project Inquiry"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-ink/80 block">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          required
          rows={4}
          className="w-full bg-transparent border-b border-line py-2 text-ink placeholder-muted focus:outline-none focus:border-accent transition-colors resize-none"
          placeholder="Hello, I'd like to discuss..."
        />
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center text-sm font-medium bg-ink text-surface px-6 py-3 rounded hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors disabled:opacity-70 disabled:cursor-not-allowed group"
        >
          {status === "submitting" ? (
            "Sending..."
          ) : status === "success" ? (
            "Message Sent!"
          ) : (
            <>
              Send Message
              <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </>
          )}
        </button>
        {status === "error" && (
          <p className="mt-4 text-sm text-red-500">
            Something went wrong. Please try again later.
          </p>
        )}
      </div>
    </form>
  );
}
