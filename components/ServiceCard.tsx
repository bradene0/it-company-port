import type { LucideIcon } from "lucide-react";

export default function ServiceCard({ title, description, icon: Icon }: { title: string; description: string; icon: LucideIcon }) {
  return (
    <article className="border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex h-10 w-10 items-center justify-center bg-[#eaf3fb] text-[#1e5d96]"><Icon size={21} /></div>
      <h3 className="text-lg font-bold text-[#12355b]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}
