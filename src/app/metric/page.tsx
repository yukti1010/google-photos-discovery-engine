"use client";

import Link from "next/link";
import { ArrowLeft, BarChart3, TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function MetricDecomposition() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Top Banner */}
      <div className="bg-slate-900 text-white border-b border-slate-800 -mx-4 sm:-mx-8 lg:-mx-10 px-4 sm:px-8 lg:px-10 py-3">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-medium transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Discovery Engine
            </Link>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300">Metric Decomposition & Opportunity Scoring</span>
          </div>
          <span className="text-slate-400">Framework: <strong className="text-white">Episodic vs Semantic Recall</strong></span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-8 sm:pt-10 space-y-10">
        {/* Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold">
            <BarChart3 className="w-3.5 h-3.5" /> Quantitative Translation Layer
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950">
            Deconstructing the Search Retrieval Bottleneck
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Evaluation of how keyword mismatch, missing OCR, and lack of autobiographical timeline indexing directly degrade search success and retention.
          </p>
        </div>

        {/* Opportunity Score Formula Box */}
        <div className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-base sm:text-lg font-bold text-slate-900">5-Factor Opportunity Scoring Formula</h2>
          <div className="bg-slate-900 text-blue-300 p-4 rounded-xl text-xs sm:text-sm font-mono overflow-x-auto">
            Score = (Prevalence × 0.35) + (Pain Severity × 0.30) + (Cross-Channel Agreement × 0.20) + (Addressability × 0.15)
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            Prioritizes user pain points with high frequency and emotional severity, weighted by feasibility of AI implementation without requiring manual photo tagging.
          </p>
        </div>

        {/* Metric Cards Grid (Responsive: 1 col on mobile, 3 cols on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Metric 01</span>
              <TrendingUp className="w-4 h-4 text-blue-600" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Query Reformulation Rate</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Percentage of search sessions where a user re-enters or modifies query nouns 3+ times before giving up or scrolling manually.
            </p>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">Benchmark Target:</span>
              <strong className="text-emerald-600">&lt; 18% of sessions</strong>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600">Metric 02</span>
              <AlertTriangle className="w-4 h-4 text-rose-600" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Manual Timeline Fallback</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Frequency with which users abandon text search and resort to infinite timeline scrolling to find a known photo.
            </p>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">Benchmark Target:</span>
              <strong className="text-emerald-600">&lt; 12% abandonment</strong>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Metric 03</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Top-3 Precision at k (P@3)</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              The target photo appears in the top 3 visible thumbnail results for ambiguous, sensory, or relational natural language queries.
            </p>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">Target Goal:</span>
              <strong className="text-blue-600">&gt; 78% accuracy</strong>
            </div>
          </div>
        </div>

        {/* Detailed Decomposition Table (Scrollable container for mobile) */}
        <div className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">Breakdown Across User Journeys</h2>
            <p className="text-xs text-slate-500">How retrieval failure affects different photo intent categories.</p>
          </div>

          <div className="w-full overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs min-w-[560px]">
              <thead className="bg-slate-50 text-slate-700 border-b border-slate-200 font-semibold">
                <tr>
                  <th className="p-3">Journey Archetype</th>
                  <th className="p-3">Primary Anchor</th>
                  <th className="p-3">Current Failure Mode</th>
                  <th className="p-3">Proposed AI Mechanism</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr>
                  <td className="p-3 font-bold text-slate-900">Everyday / Social</td>
                  <td className="p-3">Vibe, attire color, social circle</td>
                  <td className="p-3">Isolated noun matching produces false positives</td>
                  <td className="p-3 text-blue-600 font-medium">Multimodal CLIP embedding</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-900">Utility / Physical Docs</td>
                  <td className="p-3">Document shape, room context, urgency</td>
                  <td className="p-3">Unindexed OCR text, drowned in camera roll</td>
                  <td className="p-3 text-blue-600 font-medium">Automatic doc classifier & local OCR</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-900">Milestone / Travel</td>
                  <td className="p-3">Autobiographical era, season, companions</td>
                  <td className="p-3">Rigid calendar filter requirements</td>
                  <td className="p-3 text-blue-600 font-medium">Relational life-event timeline clusters</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
