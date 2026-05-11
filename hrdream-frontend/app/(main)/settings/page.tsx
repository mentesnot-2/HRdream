"use client";
import React, { useEffect, useState} from "react";
import {apiGet, apiPatch} from "@/lib/api";
import type { UserSettingsApi } from "@/types/profile";




export default function SettingsPage() {
    const [form, setForm] = useState<UserSettingsApi>({
        theme: "light",
        language: "en",
        notification_enabled: true,

    });

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);



    useEffect(() => {
        const run = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await apiGet<UserSettingsApi>("/api/v1/settings/");
                setForm(data);

            } catch (error) {
                setError(error instanceof Error ? error.message: "Failed to load settings");
            } finally {
                setLoading(false);
            }
        }

        void run();
    },[])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value, type} = e.currentTarget;

        if (type === "checkbox") {
            const checked = (e.currentTarget as HTMLInputElement).checked;
            setForm(prev => ({
                ...prev,
                [name]: checked,
            }));
        
        } else {
            setForm(prev => ({...prev, [name]: value}))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setSaving(true);
            setError(null);
            setSuccess(null);

            const updated = await apiPatch<UserSettingsApi,UserSettingsApi>("/api/v1/settings/", form);
            setForm(updated);
            setSuccess("Settings updated successfully");
        } catch (error) {
            setError(error instanceof Error ? error.message: "Failed to update settings");
        } finally {
            setSaving(false);
        }
    };

    if (error) {
        return (
          <div className="bg-white flex w-full p-6">
            <p className="text-sm text-red-500">{error}</p>
          </div>
        );
      }

    if (loading) {
        return (
          <div className="bg-white flex w-full p-6">
            <p className="text-sm text-gray-500">Loading settings...</p>
          </div>
        );
      }

      return (
        <div className="bg-white flex w-full max-sm:flex-col p-6">
          <div className="max-w-lg w-full space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Settings</h2>
            {error && <p className="text-sm text-red-600">{error}</p>}
            {success && <p className="text-sm text-green-600">{success}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Theme</label>
                <select
                  name="theme"
                  value={form.theme}
                  onChange={handleChange}
                  className="mt-1 w-full border rounded-md p-2"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Language</label>
                <input
                  name="language"
                  value={form.language}
                  onChange={handleChange}
                  className="mt-1 w-full border rounded-md p-2"
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="notification_enabled"
                  name="notification_enabled"
                  type="checkbox"
                  checked={form.notification_enabled}
                  onChange={handleChange}
                />
                <label htmlFor="notification_enabled" className="text-sm text-gray-700">
                  Notifications enabled
                </label>
              </div>
              <button
                type="submit"
                disabled={saving}
                className="rounded-md bg-blue-600 px-4 py-2 text-white text-sm hover:bg-blue-700 disabled:opacity-50"
              >
                {saving ? "Saving..." : "Save"}
              </button>
            </form>
          </div>
        </div>
      );
}