import AssessmentForm from "@/components/AssessmentForm";

export default function AssessmentPage() {
  return (
    <main>
      <section className="border-b border-slate-200 bg-[#edf4f9]">
        <div className="container-page py-12">
          <div className="eyebrow">IT Assessment</div>
          <h1 className="mt-2 max-w-3xl text-4xl font-bold text-[#102f55] md:text-5xl">Quick IT health check</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">Answer five questions about common security and support practices. The result is a simple demo score for this portfolio site.</p>
        </div>
      </section>
      <section className="container-page py-12"><AssessmentForm /></section>
    </main>
  );
}
