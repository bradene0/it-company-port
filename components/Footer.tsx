import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#0d2b4e] text-white">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="text-xl font-bold">VALO Managed IT Services</div>
          <p className="mt-3 max-w-md text-sm leading-6 text-blue-100/80">IT support, Microsoft 365, cybersecurity, backup, and network management for small and midsize organizations in the St. Louis region.</p>
        </div>
        <div>
          <div className="mb-3 text-sm font-bold uppercase tracking-wide">Company</div>
          <div className="space-y-2 text-sm text-blue-100/80">
            <Link className="block" href="/about">About</Link>
            <Link className="block" href="/services">Services</Link>
            <Link className="block" href="/assessment">IT Assessment</Link>
          </div>
        </div>
        <div>
          <div className="mb-3 text-sm font-bold uppercase tracking-wide">Contact</div>
          <div className="space-y-2 text-sm text-blue-100/80">
            <div>support@valo-it.example</div>
            <div>Mon–Fri, 8:00 AM–5:00 PM</div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-5 text-xs text-blue-100/60 sm:flex-row">
          <span>Portfolio demonstration. Valo Managed IT Services is a fictional company.</span>
          <div className="flex items-center gap-2">
            <span>Designed by</span>
            <span className="inline-flex">
              <Link href="https://kumikosolutions.com" target="_blank" rel="noopener noreferrer" className="inline-flex">
                <Image src="/logo.svg" alt="Kumiko" width={102} height={30} className="h-[22px] w-auto" />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
