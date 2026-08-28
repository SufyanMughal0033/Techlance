"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Lead = {
  id: number;
  name: string;
  contact: string;
  project_type: string;
  budget: string | null;
  message: string;
  status: string;
  created_at: string;
  updated_at: string;
};

const statuses = [
  "New",
  "Contacted",
  "Replied",
  "Interested",
  "Catalogue Sent",
  "Requirement Received",
  "Quotation Sent",
  "Sample",
  "Order",
  "Not Interested",
];

export default function LeadDetailsPage() {
  const params = useParams();
  const router = useRouter();

  const [lead, setLead] = useState<Lead | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const leadId = Number(params.id);

  useEffect(() => {
    checkAuthAndLoadLead();
  }, []);

  const checkAuthAndLoadLead = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.replace("/admin/login");
      return;
    }

    loadLead();
  };

  const loadLead = async () => {
    if (!leadId) {
      setError("Invalid lead ID.");
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .eq("id", leadId)
      .single();

    if (error) {
      console.error(error);
      setError("Lead not found.");
      setLoading(false);
      return;
    }

    setLead(data);
    setLoading(false);
  };

  const updateStatus = async (status: string) => {
    if (!lead) return;

    const { error } = await supabase
      .from("leads")
      .update({
        status,
        updated_at: new Date().toISOString(),
      })
      .eq("id", lead.id);

    if (error) {
      console.error(error);
      setError("Unable to update status.");
      return;
    }

    setLead({
      ...lead,
      status,
      updated_at: new Date().toISOString(),
    });
  };

  const deleteLead = async () => {
    if (!lead) return;

    const confirmed = window.confirm(
      "Are you sure you want to delete this lead?"
    );

    if (!confirmed) return;

    const { error } = await supabase
      .from("leads")
      .delete()
      .eq("id", lead.id);

    if (error) {
      console.error(error);
      setError("Unable to delete lead.");
      return;
    }

    router.push("/admin/dashboard");
  };

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-bg">
        <p className="text-sm text-muted">
          Loading lead...
        </p>
      </main>
    );
  }

  if (!lead) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-bg px-4">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-ink">
            Lead not found
          </h1>

          <button
            onClick={() =>
              router.push("/admin/dashboard")
            }
            className="mt-5 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-bg dark:bg-accent dark:text-accent-ink"
          >
            Back to Dashboard
          </button>
        </div>
      </main>
    );
  }

  const whatsappNumber = lead.contact.replace(/\D/g, "");

  const whatsappUrl =
    `https://wa.me/${whatsappNumber}` +
    `?text=${encodeURIComponent(
      `Hi ${lead.name}, thank you for contacting Techlance regarding your ${lead.project_type} project.`
    )}`;

  const isEmail = lead.contact.includes("@");

  const emailUrl = isEmail
    ? `mailto:${lead.contact}?subject=${encodeURIComponent(
        "Techlance Project Inquiry"
      )}`
    : null;

  return (
    <main className="min-h-screen bg-bg px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <button
              onClick={() =>
                router.push("/admin/dashboard")
              }
              className="mb-3 text-sm text-muted hover:text-ink"
            >
              ← Back to Dashboard
            </button>

            <p className="text-sm font-medium text-accent">
              Techlance Admin
            </p>

            <h1 className="mt-1 text-3xl font-semibold text-ink">
              Lead Details
            </h1>
          </div>

          <button
            onClick={deleteLead}
            className="rounded-full border border-red-200 px-5 py-2.5 text-sm font-medium text-red-500 hover:bg-red-50"
          >
            Delete Lead
          </button>
        </header>

        {error && (
          <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* Client information */}
        <section className="rounded-xl border border-border bg-surface p-6 sm:p-8">
          <div className="grid gap-6 sm:grid-cols-2">

            <div>
              <p className="text-xs uppercase tracking-wide text-muted">
                Client Name
              </p>

              <p className="mt-2 text-lg font-medium text-ink">
                {lead.name}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide text-muted">
                Contact
              </p>

              <p className="mt-2 text-lg font-medium text-ink">
                {lead.contact}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide text-muted">
                Project Type
              </p>

              <p className="mt-2 text-lg font-medium text-ink">
                {lead.project_type}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide text-muted">
                Estimated Budget
              </p>

              <p className="mt-2 text-lg font-medium text-ink">
                {lead.budget || "Not specified"}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide text-muted">
                Submitted
              </p>

              <p className="mt-2 text-sm text-ink">
                {new Date(lead.created_at).toLocaleString()}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide text-muted">
                Last Updated
              </p>

              <p className="mt-2 text-sm text-ink">
                {new Date(lead.updated_at).toLocaleString()}
              </p>
            </div>
          </div>

          {/* Project details */}
          <div className="mt-8 border-t border-border pt-8">
            <p className="text-xs uppercase tracking-wide text-muted">
              Project Details
            </p>

            <div className="mt-3 rounded-lg border border-border bg-bg p-5">
              <p className="whitespace-pre-wrap text-sm leading-7 text-ink">
                {lead.message}
              </p>
            </div>
          </div>

          {/* Status */}
          <div className="mt-8 border-t border-border pt-8">
            <p className="text-xs uppercase tracking-wide text-muted">
              Lead Status
            </p>

            <select
              value={lead.status}
              onChange={(e) =>
                updateStatus(e.target.value)
              }
              className="mt-3 rounded-md border border-border bg-bg px-4 py-3 text-sm text-ink outline-none focus:border-accent"
            >
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-3 border-t border-border pt-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-ink px-5 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90 dark:bg-accent dark:text-accent-ink"
            >
              WhatsApp Client
            </a>

            {emailUrl && (
              <a
                href={emailUrl}
                className="rounded-full border border-border px-5 py-3 text-sm font-medium text-ink hover:bg-bg"
              >
                Email Client
              </a>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}