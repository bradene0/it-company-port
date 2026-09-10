import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, MapPin, Mail, ShieldCheck } from "lucide-react";
import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  return (
    <main>
      <section className="bg-[#edf4f9] border-b border-slate-200">
        <div className="container-page grid gap-10 py-14 lg:grid-cols-[1.25fr_.75fr] lg:py-20">
          <div className="self-center">
            <div className="eyebrow">St. Louis Managed IT Services</div>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-[1.08] text-[#102f55] md:text-5xl">Reliable IT support for small and midsize businesses.</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">Valo handles user support, Microsoft 365, security, backups, computers, and office networks for organizations that need dependable day-to-day IT help.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#d9672f] px-5 py-3 text-sm font-bold text-white hover:bg-[#bd5526]">Talk to Valo <ArrowRight size={16} /></Link>
              <Link href="/services" className="border border-[#1e5d96] bg-white px-5 py-3 text-sm font-bold text-[#1e5d96] hover:bg-blue-50">View IT Services</Link>
            </div>
          </div>
          <aside className="border-t-4 border-[#1e5d96] bg-white p-7 shadow-md">
            <div className="text-lg font-bold text-[#12355b]">Need help with your current IT setup?</div>
            <p className="mt-2 text-sm leading-6 text-slate-600">We support Microsoft 365 environments, Windows PCs, business networks, backups, and common line-of-business applications.</p>
            <div className="mt-6 space-y-4 border-t border-slate-200 pt-5 text-sm">
              <div className="flex gap-3"><Mail className="mt-0.5 text-[#1e5d96]" size={18}/><div><strong className="block text-slate-800">Email support</strong><span className="text-slate-500">support@valo-it.example</span></div></div>
              <div className="flex gap-3"><Clock3 className="mt-0.5 text-[#1e5d96]" size={18}/><div><strong className="block text-slate-800">Business hours</strong><span className="text-slate-500">Monday–Friday, 8:00 AM–5:00 PM</span></div></div>
              <div className="flex gap-3"><MapPin className="mt-0.5 text-[#1e5d96]" size={18}/><div><strong className="block text-slate-800">Service area</strong><span className="text-slate-500">Greater St. Louis and surrounding counties</span></div></div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-[#12355b] text-white">
        <div className="container-page grid gap-5 py-5 text-sm md:grid-cols-3">
          <div className="flex items-center gap-2"><CheckCircle2 size={17} /> Remote and on-site support</div>
          <div className="flex items-center gap-2"><CheckCircle2 size={17} /> Microsoft 365 administration</div>
          <div className="flex items-center gap-2"><CheckCircle2 size={17} /> Security and backup management</div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="mb-8 max-w-3xl">
          <div className="eyebrow">IT Services</div>
          <h2 className="section-title mt-2">Support for the systems your staff uses every day</h2>
          <p className="mt-3 leading-7 text-slate-600">We work with businesses that need consistent IT coverage without maintaining a large internal technology staff.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(service => <ServiceCard key={service.title} {...service} />)}
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200">
        <div className="container-page grid gap-10 py-16 lg:grid-cols-2">
          <div>
            <div className="eyebrow">Who We Work With</div>
            <h2 className="section-title mt-2">IT support for local organizations with 10–100 employees</h2>
            <p className="mt-4 leading-7 text-slate-600">Valo is set up for offices that rely on Microsoft 365, laptops and desktops, shared business applications, cloud services, and a dependable internet connection.</p>
          </div>
          <div className="grid grid-cols-2 border border-slate-200 bg-white">
            {["Accounting firms","Construction offices","Medical practices","Manufacturers","Professional services","Nonprofits"].map((item) => (
              <div key={item} className="border-b border-r border-slate-200 p-4 text-sm font-semibold text-slate-700">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page grid gap-8 py-16 lg:grid-cols-[1fr_.8fr]">
        <div>
          <div className="eyebrow">IT Health Check</div>
          <h2 className="section-title mt-2">See where your current setup may need attention</h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">Our five-question demo checks MFA, backups, device management, patching, and employee offboarding. It takes about two minutes.</p>
          <Link href="/assessment" className="mt-6 inline-flex items-center gap-2 font-bold text-[#1e5d96]">Start the assessment <ArrowRight size={16}/></Link>
        </div>
        <div className="border-l-4 border-[#d9672f] bg-[#fff7f2] p-6">
          <ShieldCheck className="text-[#d9672f]" />
          <div className="mt-4 text-lg font-bold text-[#12355b]">Common issues we find</div>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
            <li>Former employees still have active accounts.</li>
            <li>Backups are running, but restores have never been tested.</li>
            <li>Some Microsoft 365 accounts do not require MFA.</li>
            <li>PC updates depend on individual employees.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
