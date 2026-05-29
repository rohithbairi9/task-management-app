"use client";

import ProtectedRoute from "@/components/layout/protected-route";

import DashboardLayout from "@/components/layout/dashboard-layout";

import PageContainer from "@/components/layout/page-container";

export default function SettingsPage() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <PageContainer>
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold">
                Settings
              </h1>

              <p className="mt-2 text-slate-500">
                Manage your application preferences
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-2xl font-bold">
                General Settings
              </h2>

              <div className="space-y-6">
                <div className="flex items-center justify-between rounded-xl border p-5">
                  <div>
                    <h3 className="font-semibold">
                      Email Notifications
                    </h3>

                    <p className="text-sm text-slate-500">
                      Receive updates about your tasks
                    </p>
                  </div>

                  <button className="rounded-full bg-black px-5 py-2 text-white">
                    Enabled
                  </button>
                </div>

                <div className="flex items-center justify-between rounded-xl border p-5">
                  <div>
                    <h3 className="font-semibold">
                      Dark Mode
                    </h3>

                    <p className="text-sm text-slate-500">
                      Toggle dark/light theme
                    </p>
                  </div>

                  <button className="rounded-full bg-slate-200 px-5 py-2">
                    Coming Soon
                  </button>
                </div>

                <div className="flex items-center justify-between rounded-xl border p-5">
                  <div>
                    <h3 className="font-semibold">
                      Two-Factor Authentication
                    </h3>

                    <p className="text-sm text-slate-500">
                      Extra security for your account
                    </p>
                  </div>

                  <button className="rounded-full bg-slate-200 px-5 py-2">
                    Coming Soon
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
              <h2 className="text-2xl font-bold text-red-600">
                Danger Zone
              </h2>

              <p className="mt-2 text-red-500">
                These actions are irreversible.
              </p>

              <button className="mt-6 rounded-xl bg-red-500 px-6 py-3 text-white">
                Delete Account
              </button>
            </div>
          </div>
        </PageContainer>
      </DashboardLayout>
    </ProtectedRoute>
  );
}