"use client";

export default function ContactPage() {
  return (
    <main>
      <section className="border-b border-slate-200 bg-[#edf4f9]">
        <div className="container-page py-12">
          <div className="eyebrow">Contact</div>
          <h1 className="mt-2 text-4xl font-bold text-[#102f55] md:text-5xl">Talk with Valo about your IT needs</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">Send a few details about your company and the systems you need help with.</p>
        </div>
      </section>
      <section className="container-page grid gap-10 py-14 lg:grid-cols-[.75fr_1.25fr]">
        <div className="space-y-6 text-sm">
          <div><div className="font-bold text-[#12355b]">Email</div><div className="mt-1 text-slate-600">support@valo-it.example</div></div>
          <div><div className="font-bold text-[#12355b]">Hours</div><div className="mt-1 text-slate-600">Monday–Friday<br/>8:00 AM–5:00 PM</div></div>
          <div><div className="font-bold text-[#12355b]">Service area</div><div className="mt-1 text-slate-600">Greater St. Louis and surrounding counties</div></div>
          <div className="border-l-4 border-[#d9672f] bg-[#fff7f2] p-4 leading-6 text-slate-600">Demo form only. Information entered here is not submitted or stored.</div>
        </div>
        <form className="border border-slate-200 bg-white p-7 shadow-sm" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="text-sm font-semibold text-slate-700">Name<input className="mt-2 w-full border border-slate-300 px-3 py-2.5 font-normal outline-none focus:border-[#1e5d96]" placeholder="Alex Morgan" /></label>
            <label className="text-sm font-semibold text-slate-700">Work email<input type="email" className="mt-2 w-full border border-slate-300 px-3 py-2.5 font-normal outline-none focus:border-[#1e5d96]" placeholder="alex@company.com" /></label>
          </div>
          <label className="mt-5 block text-sm font-semibold text-slate-700">Company<input className="mt-2 w-full border border-slate-300 px-3 py-2.5 font-normal outline-none focus:border-[#1e5d96]" placeholder="Company name" /></label>
          <label className="mt-5 block text-sm font-semibold text-slate-700">Number of employees<select className="mt-2 w-full border border-slate-300 bg-white px-3 py-2.5 font-normal outline-none focus:border-[#1e5d96]"><option>1–10</option><option>11–25</option><option>26–50</option><option>51–100</option><option>100+</option></select></label>
          <label className="mt-5 block text-sm font-semibold text-slate-700">How can we help?<textarea rows={6} className="mt-2 w-full resize-none border border-slate-300 px-3 py-2.5 font-normal outline-none focus:border-[#1e5d96]" placeholder="We need help managing Microsoft 365 and about 30 Windows computers." /></label>
          <button type="submit" className="mt-6 bg-[#d9672f] px-5 py-3 text-sm font-bold text-white hover:bg-[#bd5526]">Send Request</button>
        </form>
      </section>
    </main>
  );
}
