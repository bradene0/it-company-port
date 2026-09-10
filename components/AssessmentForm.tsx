"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check, RotateCcw } from "lucide-react";
import { assessmentQuestions } from "@/data/assessment";

export default function AssessmentForm() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const finished = step === assessmentQuestions.length;
  const score = useMemo(() => Object.values(answers).reduce((a, b) => a + b, 0), [answers]);

  if (finished) {
    const label = score >= 80 ? "Good overall" : score >= 55 ? "Several items need review" : "Multiple areas need attention";
    return (
      <div className="max-w-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-9">
        <div className="text-sm font-bold uppercase tracking-wide text-[#1e5d96]">Assessment complete</div>
        <div className="mt-4 text-sm text-slate-500">IT health score</div>
        <div className="mt-1 text-5xl font-bold text-[#12355b]">{score}<span className="text-xl font-normal text-slate-400"> / 100</span></div>
        <div className="mt-3 text-lg font-bold text-slate-700">{label}</div>
        <div className="mt-6 h-3 overflow-hidden bg-slate-200"><div className="h-full bg-[#1e5d96]" style={{ width: `${score}%` }} /></div>
        <p className="mt-6 leading-7 text-slate-600">The score covers MFA, backup, device management, patching, and employee offboarding. A full review would also include account permissions, firewall settings, licensing, documentation, recovery procedures, and security policies.</p>
        <button type="button" onClick={() => { setStep(0); setAnswers({}); }} className="mt-6 inline-flex items-center gap-2 border border-slate-300 px-4 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-50"><RotateCcw size={16} /> Start Over</button>
      </div>
    );
  }

  const q = assessmentQuestions[step];
  const selected = answers[q.id];

  return (
    <form className="max-w-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-9" onSubmit={(e) => { e.preventDefault(); if (selected !== undefined) setStep(step + 1); }}>
      <div className="mb-5 flex items-center justify-between text-sm text-slate-500"><span>Question {step + 1} of {assessmentQuestions.length}</span><span>{Math.round((step / assessmentQuestions.length) * 100)}%</span></div>
      <div className="mb-7 h-2 bg-slate-200"><div className="h-full bg-[#1e5d96]" style={{ width: `${(step / assessmentQuestions.length) * 100}%` }} /></div>
      <fieldset>
        <legend className="text-2xl font-bold text-[#12355b]">{q.question}</legend>
        <p className="mt-2 leading-7 text-slate-600">{q.detail}</p>
        <div className="mt-6 space-y-3">
          {q.options.map((option, index) => {
            const active = selected === option.value;
            const id = `${q.id}-${index}`;
            return (
              <label key={id} htmlFor={id} className={`flex w-full cursor-pointer items-center justify-between border p-4 text-left text-sm transition-colors ${active ? "border-[#1e5d96] bg-[#edf4f9] font-semibold text-[#12355b]" : "border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50"}`}>
                <span>{option.label}</span>
                <span className={`grid h-5 w-5 shrink-0 place-items-center border ${active ? "border-[#1e5d96] bg-[#1e5d96] text-white" : "border-slate-400 bg-white"}`}>{active && <Check size={14} strokeWidth={3} />}</span>
                <input id={id} type="radio" name={q.id} value={option.value} checked={active} onChange={() => setAnswers(current => ({ ...current, [q.id]: option.value }))} className="sr-only" />
              </label>
            );
          })}
        </div>
      </fieldset>
      <div className="mt-7 flex justify-between border-t border-slate-200 pt-5">
        <button type="button" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0} className="inline-flex items-center gap-2 px-2 py-2 text-sm font-bold text-slate-500 disabled:opacity-25"><ArrowLeft size={16}/> Back</button>
        <button type="submit" disabled={selected === undefined} className="inline-flex items-center gap-2 bg-[#1e5d96] px-4 py-2.5 text-sm font-bold text-white hover:bg-[#174c7d] disabled:cursor-not-allowed disabled:opacity-35">{step === assessmentQuestions.length - 1 ? "View Results" : "Continue"} <ArrowRight size={16}/></button>
      </div>
    </form>
  );
}
