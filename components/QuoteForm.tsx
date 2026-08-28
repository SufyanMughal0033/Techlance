"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

const projectTypes = [
  "Website (single page)",
  "Website (multi-page)",
  "E-commerce / Shopify",
  "Digital Marketing / Ads",
  "Other",
];

export function QuoteForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [projectType, setProjectType] = useState(projectTypes[0]);
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    if (!name.trim() || !contact.trim() || !message.trim()) {
      setError(
        "Please fill in your name, contact info, and project details."
      );
      return;
    }

    setSubmitting(true);

    try {
      const { error } = await supabase.from("leads").insert({
        name: name.trim(),
        contact: contact.trim(),
        project_type: projectType,
        budget: budget.trim() || null,
        message: message.trim(),
      });

      if (error) {
        console.error("SUPABASE ERROR:", JSON.stringify(error, null, 2));
        setError("Something went wrong. Please try again.");
        return;
      }

      setSuccess(true);

      // Clear form
      setName("");
      setContact("");
      setProjectType(projectTypes[0]);
      setBudget("");
      setMessage("");
    } catch (err) {
      console.error("Submission error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-lg border border-border bg-surface p-7 text-center sm:p-9">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
          <span className="text-3xl text-accent">✓</span>
        </div>

        <h2 className="text-2xl font-semibold text-ink">
          Inquiry Submitted!
        </h2>

        <p className="mt-3 max-w-md text-sm leading-6 text-muted">
          Thank you for contacting Techlance. We have received your project
          details and will get back to you shortly.
        </p>

        <button
          type="button"
          onClick={() => setSuccess(false)}
          className="mt-7 rounded-full bg-ink px-6 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90 dark:bg-accent dark:text-accent-ink"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-lg border border-border bg-surface p-7 sm:p-9"
    >
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-ink"
        >
          Name
        </label>

        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-md border border-border bg-bg px-4 py-3 text-[15px] text-ink outline-none transition-colors focus:border-accent"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="contact"
          className="mb-2 block text-sm font-medium text-ink"
        >
          Email or Phone
        </label>

        <input
          id="contact"
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="w-full rounded-md border border-border bg-bg px-4 py-3 text-[15px] text-ink outline-none transition-colors focus:border-accent"
          placeholder="you@example.com or +92..."
        />
      </div>

      <div>
        <label
          htmlFor="projectType"
          className="mb-2 block text-sm font-medium text-ink"
        >
          Project Type
        </label>

        <select
          id="projectType"
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
          className="w-full rounded-md border border-border bg-bg px-4 py-3 text-[15px] text-ink outline-none transition-colors focus:border-accent"
        >
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="budget"
          className="mb-2 block text-sm font-medium text-ink"
        >
          Estimated Budget{" "}
          <span className="text-muted">(optional)</span>
        </label>

        <input
          id="budget"
          type="text"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="w-full rounded-md border border-border bg-bg px-4 py-3 text-[15px] text-ink outline-none transition-colors focus:border-accent"
          placeholder="e.g. 20k - 200k PKR"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-ink"
        >
          Project Details & your Whatsapp Number
        </label>

        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="w-full resize-none rounded-md border border-border bg-bg px-4 py-3 text-[15px] text-ink outline-none transition-colors focus:border-accent"
          placeholder="Tell us a bit about what you need..."
        />
      </div>

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-bg transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-accent dark:text-accent-ink sm:w-auto"
      >
        {submitting ? "Submitting..." : "Send Inquiry"}
      </button>
    </form>
  );
}