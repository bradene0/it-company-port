import { ClipboardList, Headphones, Settings } from "lucide-react";

export default function AboutPage() {
  return (
    <main>
      <section className="border-b border-slate-200 bg-[#edf4f9]">
        <div className="container-page py-14">
          <div className="eyebrow">About Valo</div>
          <h1 className="mt-2 max-w-3xl text-4xl font-bold text-[#102f55] md:text-5xl">Straightforward IT support for local businesses</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">Valo Managed IT Services is built around routine support, documented systems, practical security, and clear communication with employees and business owners.</p>
        </div>
      </section>
      <section className="container-page grid gap-10 py-14 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <h2 className="section-title">How we handle an IT environment</h2>
          <p className="mt-4 leading-7 text-slate-600">We start by documenting users, computers, Microsoft 365, internet service, networking equipment, vendors, backups, and security tools. From there, support requests and routine maintenance follow a consistent process.</p>
          <p className="mt-4 leading-7 text-slate-600">The goal is simple: fewer recurring problems, faster support, better records, and fewer surprises when an employee starts, leaves, or needs a replacement computer.</p>
          <div className="mt-8 border-l-4 border-[#1e5d96] bg-slate-50 p-5 text-sm leading-6 text-slate-600">Valo is a fictional company created for this portfolio project. Names, phone numbers, email addresses, and service details are sample content.</div>
        </div>
        <div className="space-y-4">
          {[
            [ClipboardList,"Document","Record devices, accounts, vendors, licenses, and network information."],
            [Settings,"Maintain","Handle updates, backups, security tools, account changes, and equipment lifecycle."],
            [Headphones,"Support","Provide one place for employees to request help and follow up on recurring issues."]
          ].map(([Icon,title,copy]: any) => <div key={title} className="flex gap-4 border border-slate-200 bg-white p-5 shadow-sm"><div className="text-[#1e5d96]"><Icon size={22}/></div><div><div className="font-bold text-[#12355b]">{title}</div><p className="mt-1 text-sm leading-6 text-slate-600">{copy}</p></div></div>)}
        </div>
      </section>
    </main>
  );
}
