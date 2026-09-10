import Link from "next/link";
import { Mail, ShieldCheck } from "lucide-react";

const links = [
  ["Services", "/services"],
  ["IT Assessment", "/assessment"],
  ["About", "/about"],
  ["Contact", "/contact"]
];

export default function Navbar() {
  return (
    <>
      <div className="bg-[#0d2b4e] text-white">
        <div className="container-page flex min-h-9 items-center justify-between text-xs">
          <span className="flex items-center gap-2"><ShieldCheck size={14} /> Serving businesses across the St. Louis area</span>
          <span className="hidden items-center gap-2 sm:flex"><Mail size={13} /> support@valo-it.example</span>
        </div>
      </div>
      <header className="border-b border-slate-200 bg-white">
        <div className="container-page flex min-h-20 items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center bg-[#1e5d96] text-xl font-bold text-white">V</span>
            <span className="leading-tight">
              <span className="block text-xl font-bold tracking-tight text-[#12355b]">VALO</span>
              <span className="block text-[11px] font-semibold uppercase tracking-[.16em] text-slate-500">Managed IT Services</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-700 md:flex">
            {links.map(([label, href]) => <Link key={href} href={href} className="hover:text-[#1e5d96]">{label}</Link>)}
          </nav>
          <Link href="/contact" className="bg-[#d9672f] px-4 py-2.5 text-sm font-bold text-white hover:bg-[#bd5526]">Request Support</Link>
        </div>
      </header>
    </>
  );
}
