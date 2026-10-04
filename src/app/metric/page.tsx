"use client";

import { BarChart3 } from "lucide-react";

export default function MetricDecompositionPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20 p-8 max-w-5xl mx-auto space-y-10">
      <section className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold">
          <BarChart3 className="w-3.5 h-3.5" /> Part 2 Deliverable · Strategic Framework
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-950">
          Business Metric Decomposition
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          Deconstructing the core business objective: <em>"Increase the percentage of users who successfully retrieve a photo they remember but cannot precisely describe."</em>
        </p>
      </section>

      {/* Core Formula Box */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-sm border border-slate-800 space-y-3">
        <p className="text-xs font-bold uppercase tracking-wider text-blue-400">High-Level Mathematical Objective</p>
        <div className="text-base md:text-lg font-mono bg-slate-950/80 p-4 rounded-xl border border-slate-800 text-blue-200">
          VRSR = Σ(Sessions with Target Photo Confirmed) / Σ(Sessions Initiated with Incomplete Episodic Memory)
        </div>
        <p className="text-xs text-slate-400 leading-relaxed">
          Successful retrieval: Photo opened, shared, or viewed &gt;10s without subsequent query reformulation or fallback to manual timeline scrolling.
        </p>
      </div>

      {/* 4-Stage Funnel */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">4-Stage Retrieval Funnel &amp; Failure Modes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">Gate 1</span>
              <span className="text-xs text-slate-400 font-semibold">Vocabulary Mismatch</span>
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Query Formulation</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Users describe visual vibes and settings ("blue dress at reception"). Search treats phrases as disjointed isolated nouns.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">Gate 2</span>
              <span className="text-xs text-rose-500 font-semibold">Primary Drop-off (41.2%)</span>
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Semantic &amp; Temporal Parsing</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Users provide relative life-event clues ("autumn after college"). The engine demands strict EXIF calendar dates.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">Gate 3</span>
              <span className="text-xs text-slate-400 font-semibold">Semantic Noise (73% abandon)</span>
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Candidate Ranking</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Returns hundreds of false positives (every blue shirt in the library), causing cognitive fatigue before thumbnail 12.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">Gate 4</span>
              <span className="text-xs text-slate-400 font-semibold">Dead-End Refinement</span>
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Evaluative Confirmation</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              No guided disambiguation chips. Users abandon Google Photos to search WhatsApp media tabs or give up entirely.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Takeaway */}
      <section className="bg-blue-50 border border-blue-200 rounded-2xl p-6 space-y-2">
        <h3 className="text-xs font-bold text-blue-900 uppercase tracking-wide">Core PM Conclusion</h3>
        <p className="text-xs text-blue-800 leading-relaxed">
          The highest-leverage opportunity lies in <strong>Gates 2 &amp; 3</strong>: enabling conversational multi-cue disambiguation so users can filter by vibe, lighting, and relative time without requiring exact calendar dates.
        </p>
      </section>
    </div>
  );
}
