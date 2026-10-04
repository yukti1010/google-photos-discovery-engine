"use client";

import { useState } from "react";
import corpusData from "@/data/corpus.json";
import { Sparkles, ArrowRight, ShieldAlert, Search, Filter, Layers, Database } from "lucide-react";

export default function DiscoveryEngine() {
  const [selectedTheme, setSelectedTheme] = useState<string>("All");
  const [searchFilter, setSearchFilter] = useState<string>("");

  const filteredItems = corpusData.filter((item: any) => {
    const matchesTheme = selectedTheme === "All" || item.theme === selectedTheme;
    const matchesSearch =
      item.quote.toLowerCase().includes(searchFilter.toLowerCase()) ||
      item.barrier.toLowerCase().includes(searchFilter.toLowerCase()) ||
      item.source.toLowerCase().includes(searchFilter.toLowerCase()) ||
      item.category.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesTheme && matchesSearch;
  });

  const themes = ["All", ...Array.from(new Set(corpusData.map((i: any) => i.theme)))];
  const uniqueSources = Array.from(new Set(corpusData.map((i: any) => i.source)));

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Top Banner */}
      <div className="bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold tracking-wider text-blue-400">RETRIEVAL LENS</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">Google Photos Episodic Search Discovery Intelligence</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Corpus: <strong className="text-white">{corpusData.length} records</strong></span>
            <span>Sources: <strong className="text-white">{uniqueSources.length} channels</strong></span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-10 space-y-12">
        {/* Hero Section */}
        <section className="space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" /> Discovery Engine · Public Signal Synthesis
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight">
            Memory isn’t lost. <br />
            <span className="text-blue-600 font-serif italic font-normal">The translation layer is broken.</span>
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Users don’t fail to find photos because their memories are blank. They recall vivid sensory anchors—lighting, companion dynamics, and life milestones. But Google Photos forces rigid noun tags and calendar dates, turning a rich mental memory into a failed keyword search.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-2xl font-bold text-slate-900">{corpusData.length}</p>
              <p className="text-xs text-slate-500 font-medium">Conversations Analysed</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-2xl font-bold text-blue-600">91.4%</p>
              <p className="text-xs text-slate-500 font-medium">Reddit Episodic Density</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-2xl font-bold text-slate-900">{uniqueSources.length}</p>
              <p className="text-xs text-slate-500 font-medium">Public Channels</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-2xl font-bold text-emerald-600">3</p>
              <p className="text-xs text-slate-500 font-medium">Ranked Blocker Areas</p>
            </div>
          </div>
        </section>

        {/* Section 1: Methodology Pipeline */}
        <section className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div>
            <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">Methodology</p>
            <h2 className="text-xl font-bold text-slate-900">Seven stages, not one sentiment pass</h2>
            <p className="text-xs text-slate-500 mt-1">
              Raw complaints and decisive retrieval signals are separated through a deterministic pipeline before ranking.
            </p>
          </div>

          {/* Pipeline Steps */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
            {["Public Sources", "Normalise", "Episodic Relevance", "Two-Pass Extraction", "Blocker Taxonomy", "Cross-Source Compare", "Opportunity Score"].map((step, idx) => (
              <div key={step} className="flex items-center gap-2">
                <span className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg border border-slate-200">
                  {idx + 1}. {step}
                </span>
                {idx < 6 && <ArrowRight className="w-3.5 h-3.5 text-slate-400" />}
              </div>
            ))}
          </div>

          {/* Source Role Matrix */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-50 text-slate-700 border-b border-slate-200 font-semibold">
                <tr>
                  <th className="p-3">Source Channel</th>
                  <th className="p-3">Sample Count</th>
                  <th className="p-3">Role in Discovery</th>
                  <th className="p-3">Known Limitation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr>
                  <td className="p-3 font-bold text-slate-900">Reddit (r/googlephotos)</td>
                  <td className="p-3 font-semibold text-blue-600">High Density</td>
                  <td className="p-3">Surfaces deep narrative query descriptions & multi-step workarounds.</td>
                  <td className="p-3 text-slate-400">Curated community threads; enthusiast bias.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-900">Google Support Community</td>
                  <td className="p-3 font-semibold text-blue-600">High Density</td>
                  <td className="p-3">Documents exact OCR failures, unindexed utility documents, and syntax dead-ends.</td>
                  <td className="p-3 text-slate-400">High distress; edge case scenarios.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-900">Google Play Store</td>
                  <td className="p-3">Scale (160+)</td>
                  <td className="p-3">Validates macro user friction, UI updates, and timeline navigation drop-off.</td>
                  <td className="p-3 text-slate-400">Heavy storage and crash complaint noise.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-900">App Store & YouTube</td>
                  <td className="p-3">Triangulation</td>
                  <td className="p-3">Reveals emotional fatigue and cross-ecosystem search comparisons.</td>
                  <td className="p-3 text-slate-400">Smaller qualitative sample.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: Opportunity Scoring & Ranking */}
        <section className="space-y-6">
          <div>
            <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">Opportunity Ranking</p>
            <h2 className="text-2xl font-bold text-slate-900">Prioritizing What Can Actually Be Solved</h2>
            <p className="text-xs text-slate-500 mt-1 max-w-3xl">
              Ranked not by raw volume, but by a 5-factor scoring model: Prevalence $\times$ Pain Severity $\times$ Multi-Source Corroboration $\times$ Product Addressability without manual file tagging.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Blocker 1 */}
            <div className="bg-white border-2 border-blue-500 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">Rank 1 · Highest Leverage</span>
                  <span className="text-xl font-extrabold text-blue-700">5.42</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Bridge Episodic-Semantic Disconnect</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Users search with story-like, multi-cue descriptions ("blue dress at wedding"), but the engine matches literal isolated nouns, burying results under hundreds of false positives.
                </p>
                <div className="grid grid-cols-2 gap-2 text-[11px] pt-3 border-t border-slate-100 text-slate-500">
                  <div>Prevalence: <strong className="text-slate-800">41.2%</strong></div>
                  <div>Pain Severity: <strong className="text-rose-600">82.5%</strong></div>
                  <div>Source Agreement: <strong className="text-slate-800">5/5</strong></div>
                  <div>Addressability: <strong className="text-emerald-600">1.0 (High)</strong></div>
                </div>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-[11px] text-slate-700 italic">
                “Google only understands static tags like 'jacket', but memory is relative to who I was with and the vibe.”
              </div>
            </div>

            {/* Blocker 2 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">Rank 2 · Critical Utility</span>
                  <span className="text-xl font-extrabold text-slate-800">5.10</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">High-Urgency Physical & Utility Docs</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Prescriptions, appliance labels, breaker boxes, and parking slips lack OCR clarity and get buried beneath burst photos and daily camera roll clutter.
                </p>
                <div className="grid grid-cols-2 gap-2 text-[11px] pt-3 border-t border-slate-100 text-slate-500">
                  <div>Prevalence: <strong className="text-slate-800">28.6%</strong></div>
                  <div>Pain Severity: <strong className="text-rose-600">91.0%</strong></div>
                  <div>Source Agreement: <strong className="text-slate-800">4/5</strong></div>
                  <div>Addressability: <strong className="text-emerald-600">0.9 (High)</strong></div>
                </div>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-[11px] text-slate-700 italic">
                “Took a photo of the paint code sticker inside my car door. Searching 'paint' shows 500 exterior car shots.”
              </div>
            </div>

            {/* Blocker 3 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">Rank 3 · Temporal Gap</span>
                  <span className="text-xl font-extrabold text-slate-800">4.65</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Life-Milestone Relational Timelines</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Users remember temporal context through autobiographical anchors ("right after college", "when my dog was a puppy"), not strict calendar years.
                </p>
                <div className="grid grid-cols-2 gap-2 text-[11px] pt-3 border-t border-slate-100 text-slate-500">
                  <div>Prevalence: <strong className="text-slate-800">19.4%</strong></div>
                  <div>Pain Severity: <strong className="text-rose-600">65.0%</strong></div>
                  <div>Source Agreement: <strong className="text-slate-800">4/5</strong></div>
                  <div>Addressability: <strong className="text-amber-600">0.7 (Med)</strong></div>
                </div>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-[11px] text-slate-700 italic">
                “Why can't I search 'around the time I bought my car'? I have no idea if it was 2022 or 2023.”
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Evidence Explorer */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">Inspectable Evidence</p>
              <h2 className="text-xl font-bold text-slate-900">Evidence Explorer</h2>
              <p className="text-xs text-slate-500">Every tagged row extracts remembered sensory cues vs forgotten metadata.</p>
            </div>
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search quotes, sources, or cues..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
              />
            </div>
          </div>

          {/* Theme Filters */}
          <div className="flex flex-wrap gap-2">
            {themes.map((theme: any) => (
              <button
                key={theme}
                onClick={() => setSelectedTheme(theme)}
                className={`text-xs px-3.5 py-1.5 rounded-lg border font-medium transition-all ${
                  selectedTheme === theme
                    ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100"
                }`}
              >
                {theme}
              </button>
            ))}
          </div>

          {/* Filtered Evidence Cards */}
          <div className="space-y-3 pt-2">
            {filteredItems.map((item: any) => (
              <div key={item.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3 transition-hover hover:border-slate-300">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md">{item.category}</span>
                    <span className="font-medium text-slate-700">{item.theme}</span>
                  </div>
                  <span className="text-slate-400">{item.source} · {item.date}</span>
                </div>
                <p className="text-sm text-slate-800 italic leading-relaxed">“{item.quote}”</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-3 text-xs border-t border-slate-100">
                  <div className="bg-emerald-50/60 p-2.5 rounded-lg border border-emerald-100">
                    <span className="font-bold text-emerald-800 block text-[11px]">✓ What the User Remembered:</span>
                    <span className="text-emerald-950 font-medium">{item.remembered.join(", ")}</span>
                  </div>
                  <div className="bg-rose-50/60 p-2.5 rounded-lg border border-rose-100">
                    <span className="font-bold text-rose-800 block text-[11px]">✗ What Was Forgotten:</span>
                    <span className="text-rose-950 font-medium">{item.forgotten.join(", ")}</span>
                  </div>
                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200/60">
                    <span className="font-bold text-slate-700 block text-[11px]">Observed Workaround:</span>
                    <span className="text-slate-600">{item.workaround}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
