"use client";

import ProtectedRoute from "@/components/layout/protected-route";

import DashboardLayout from "@/components/layout/dashboard-layout";

import PageContainer from "@/components/layout/page-container";

import { useAuthStore } from "@/store/auth-store";

export default function ProfilePage() {
  const user = useAuthStore(
    (state) => state.user
  );

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <PageContainer>
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold">
                Profile
              </h1>

              <p className="mt-2 text-slate-500">
                Manage your account information
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="flex flex-col items-center gap-6 lg:flex-row">
                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-black text-4xl font-bold text-white">
                  {user?.name?.charAt(0)}
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-slate-400">
                      Full Name
                    </p>

                    <h2 className="text-2xl font-bold">
                      {user?.name}
                    </h2>
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">
                      Email Address
                    </p>

                    <p className="text-lg">
                      {user?.email}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">
                      Role
                    </p>

                    <span className="rounded-full bg-slate-100 px-4 py-1 text-sm">
                      {user?.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-2xl font-bold">
                Account Information
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border p-5">
                  <p className="text-sm text-slate-400">
                    Account Status
                  </p>

                  <p className="mt-2 text-lg font-semibold text-green-600">
                    Active
                  </p>
                </div>

                <div className="rounded-xl border p-5">
                  <p className="text-sm text-slate-400">
                    Tasks Created
                  </p>

                  <p className="mt-2 text-lg font-semibold">
                    Production User
                  </p>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </DashboardLayout>
    </ProtectedRoute>
  );
}