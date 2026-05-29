"use client";

import { ReactNode } from "react";

interface Props {
  open: boolean;

  onClose: () => void;

  title: string;

  children: ReactNode;
}

export default function Modal({
  open,
  onClose,
  title,
  children,
}: Props) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="text-2xl"
          >
            ×
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}