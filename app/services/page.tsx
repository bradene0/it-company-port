import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";

export default function ServicesPage() {
  return (
    <main>
      <section className="border-b border-slate-200 bg-[#edf4f9]">
        <div className="container-page py-14">
          <div className="eyebrow">Services</div>
          <h1 className="mt-2 max-w-3xl text-4xl font-bold text-[#102f55] md:text-5xl">Managed IT services for everyday business technology</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">Valo supports the computers, accounts, cloud services, networks, and security controls used by small and midsize organizations.</p>
        </div>
      </section>
      <section className="container-page py-14">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map(service => <ServiceCard key={service.title} {...service} />)}</div>
        <div className="mt-12 border border-slate-200 bg-slate-50 p-7">
          <h2 className="text-xl font-bold text-[#12355b]">Typical support includes</h2>
          <div className="mt-5 grid gap-3 text-sm text-slate-700 md:grid-cols-2 lg:grid-cols-3">
            {[
              "New employee computer setup","Password and account issues","Microsoft 365 administration","Printer and application troubleshooting","Firewall and Wi-Fi changes","PC replacement planning","Security software management","Backup monitoring","Vendor coordination"
            ].map(item => <div key={item} className="border-b border-slate-200 pb-2">{item}</div>)}
          </div>
        </div>
      </section>
    </main>
  );
}
