"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
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

export default function AdminDashboard() {
  const router = useRouter();

  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [error, setError] = useState("");

  useEffect(() => {
    checkAuthAndLoadLeads();
  }, []);

  const checkAuthAndLoadLeads = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.replace("/admin/login");
      return;
    }

    await loadLeads();
  };

  const loadLeads = async () => {
    setLoading(true);
    setError("");

    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      setError("Unable to load leads.");
      setLoading(false);
      return;
    }

    setLeads(data || []);
    setLoading(false);
  };

  const updateStatus = async (id: number, status: string) => {
    const { error } = await supabase
      .from("leads")
      .update({
        status,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id);

    if (error) {
      console.error(error);
      setError("Unable to update lead status.");
      return;
    }

    setLeads((current) =>
      current.map((lead) =>
        lead.id === id ? { ...lead, status } : lead
      )
    );
  };

  const deleteLead = async (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this lead?"
    );

    if (!confirmed) return;

    const { error } = await supabase
      .from("leads")
      .delete()
      .eq("id", id);

    if (error) {
      console.error(error);
      setError("Unable to delete lead.");
      return;
    }

    setLeads((current) => current.filter((lead) => lead.id !== id));
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace("/admin/login");
  };

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        lead.name.toLowerCase().includes(searchText) ||
        lead.contact.toLowerCase().includes(searchText) ||
        lead.project_type.toLowerCase().includes(searchText) ||
        lead.message.toLowerCase().includes(searchText);

      const matchesStatus =
        selectedStatus === "All" ||
        lead.status === selectedStatus;

      return matchesSearch && matchesStatus;
    });
  }, [leads, search, selectedStatus]);

  const totalLeads = leads.length;

  const newLeads = leads.filter(
    (lead) => lead.status === "New"
  ).length;

  const contactedLeads = leads.filter(
    (lead) => lead.status === "Contacted"
  ).length;

  const interestedLeads = leads.filter(
    (lead) => lead.status === "Interested"
  ).length;

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-bg">
        <p className="text-sm text-muted">Loading dashboard...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-bg px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-accent">
              Techlance Admin
            </p>

            <h1 className="mt-1 text-3xl font-semibold text-ink">
              Lead Dashboard
            </h1>

            <p className="mt-1 text-sm text-muted">
              Manage your website inquiries and client leads.
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-surface"
          >
            Logout
          </button>
        </header>

        {/* Error */}
        {error && (
          <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* Stats */}
        <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-border bg-surface p-5">
            <p className="text-sm text-muted">Total Leads</p>
            <p className="mt-2 text-3xl font-semibold text-ink">
              {totalLeads}
            </p>
          </div>

          <div className="rounded-xl border border-border bg-surface p-5">
            <p className="text-sm text-muted">New Leads</p>
            <p className="mt-2 text-3xl font-semibold text-ink">
              {newLeads}
            </p>
          </div>

          <div className="rounded-xl border border-border bg-surface p-5">
            <p className="text-sm text-muted">Contacted</p>
            <p className="mt-2 text-3xl font-semibold text-ink">
              {contactedLeads}
            </p>
          </div>

          <div className="rounded-xl border border-border bg-surface p-5">
            <p className="text-sm text-muted">Interested</p>
            <p className="mt-2 text-3xl font-semibold text-ink">
              {interestedLeads}
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="mb-6 rounded-xl border border-border bg-surface p-4">
          <div className="flex flex-col gap-3 md:flex-row">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search leads..."
              className="w-full rounded-md border border-border bg-bg px-4 py-3 text-sm text-ink outline-none focus:border-accent md:flex-1"
            />

            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="rounded-md border border-border bg-bg px-4 py-3 text-sm text-ink outline-none focus:border-accent"
            >
              <option value="All">All Statuses</option>

              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
        </section>

        {/* Leads */}
        <section className="overflow-hidden rounded-xl border border-border bg-surface">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <div>
              <h2 className="font-semibold text-ink">
                Client Leads
              </h2>

              <p className="mt-1 text-xs text-muted">
                {filteredLeads.length} lead
                {filteredLeads.length !== 1 ? "s" : ""}
              </p>
            </div>

            <button
              onClick={loadLeads}
              className="rounded-full border border-border px-4 py-2 text-xs font-medium text-ink hover:bg-bg"
            >
              Refresh
            </button>
          </div>

          {filteredLeads.length === 0 ? (
            <div className="px-5 py-12 text-center">
              <p className="text-sm text-muted">
                No leads found.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] text-left">
                <thead>
                  <tr className="border-b border-border text-xs uppercase tracking-wide text-muted">
                    <th className="px-5 py-4">Client</th>
                    <th className="px-5 py-4">Project</th>
                    <th className="px-5 py-4">Budget</th>
                    <th className="px-5 py-4">Details</th>
                    <th className="px-5 py-4">Status</th>
                    <th className="px-5 py-4">Date</th>
                    <th className="px-5 py-4">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredLeads.map((lead) => (
                    <tr
                      key={lead.id}
                      className="border-b border-border last:border-0"
                    >
                      <td className="px-5 py-5 align-top">
                        <p className="font-medium text-ink">
                          {lead.name}
                        </p>

                        <p className="mt-1 text-xs text-muted">
                          {lead.contact}
                        </p>
                      </td>

                      <td className="px-5 py-5 align-top">
                        <span className="text-sm text-ink">
                          {lead.project_type}
                        </span>
                      </td>

                      <td className="px-5 py-5 align-top">
                        <span className="text-sm text-ink">
                          {lead.budget || "Not specified"}
                        </span>
                      </td>

                      <td className="max-w-xs px-5 py-5 align-top">
                        <p className="line-clamp-3 text-sm text-muted">
                          {lead.message}
                        </p>
                      </td>

                      <td className="px-5 py-5 align-top">
                        <select
                          value={lead.status}
                          onChange={(e) =>
                            updateStatus(
                              lead.id,
                              e.target.value
                            )
                          }
                          className="rounded-md border border-border bg-bg px-3 py-2 text-xs text-ink outline-none focus:border-accent"
                        >
                          {statuses.map((status) => (
                            <option
                              key={status}
                              value={status}
                            >
                              {status}
                            </option>
                          ))}
                        </select>
                      </td>

                      <td className="px-5 py-5 align-top">
                        <span className="text-xs text-muted">
                          {new Date(
                            lead.created_at
                          ).toLocaleDateString()}
                        </span>
                      </td>

                    <td className="px-5 py-5 align-top">
  <div className="flex items-center gap-3">
    <button
      onClick={() =>
        router.push(`/admin/dashboard/leads/${lead.id}`)
      }
      className="text-xs font-medium text-accent hover:underline"
    >
      View
    </button>

    <button
      onClick={() =>
        deleteLead(lead.id)
      }
      className="text-xs font-medium text-red-500 hover:underline"
    >
      Delete
    </button>
  </div>
</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}