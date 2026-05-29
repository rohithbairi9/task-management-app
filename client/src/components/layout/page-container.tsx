import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PageContainer({
  children,
}: Props) {
  return (
    <main className="flex-1 bg-slate-100 p-4 lg:p-8">
      {children}
    </main>
  );
}