"use client";
import { useState } from "react";
import corpusData from "@/data/corpus.json";
import { Sparkles } from "lucide-react";

export default function DatasetPage() {
  const [selectedTheme, setSelectedTheme] = useState<string>("All");
  const [searchFilter, setSearchFilter] = useState<string>("");

  const filteredItems = corpusData.filter((item: any) => {
    const matchesTheme = selectedTheme === "All" || item.theme === selectedTheme;
    const matchesSearch =
      item.quote.toLowerCase().includes(searchFilter.toLowerCase()) ||
      item.barrier.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesTheme && matchesSearch;
  });

  const themes = ["All", ...Array.from(new Set(corpusData.map((i: any) => i.theme)))];

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <section className="space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          AI-Powered Discovery Engine
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Vague Retrieval Intelligence</h1>
            <p className="text-sm text-slate-500 mt-1 max-w-2xl">
              Synthesizing unstructured user feedback across Google Play Store to uncover why search fails when memory is episodic.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="border border-slate-200 bg-white rounded-xl p-3.5 min-w-[130px] shadow-sm">
              <p className="text-xs text-slate-400 font-medium">Scraped Reviews</p>
              <p className="text-2xl font-bold text-slate-900">{corpusData.length}</p>
            </div>
            <div className="border border-slate-200 bg-white rounded-xl p-3.5 min-w-[110px] shadow-sm">
              <p className="text-xs text-slate-400 font-medium">Sources</p>
              <p className="text-2xl font-bold text-slate-900">1</p>
            </div>
            <div className="border border-slate-200 bg-white rounded-xl p-3.5 min-w-[110px] shadow-sm">
              <p className="text-xs text-slate-400 font-medium">Themes</p>
              <p className="text-2xl font-bold text-slate-900">{themes.length - 1}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div>
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Actionable Opportunities</p>
          <h2 className="text-xl font-bold text-slate-900">Where does Google Photos retrieval break down?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-slate-900 text-sm">Bridge Episodic-Semantic Disconnect</h3>
              <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">41.2%</span>
            </div>
            <p className="text-xs text-slate-500">
              Users search with narrative stories, but search matches literal static entity tags.
            </p>
            <div className="pt-2 border-t border-slate-100 text-xs text-slate-600 font-medium">
              <span className="text-slate-400 block font-normal">Primary Focus:</span>
              Multi-cue semantic narrative clustering.
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-slate-900 text-sm">Index High-Urgency Utility Docs</h3>
              <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">28.6%</span>
            </div>
            <p className="text-xs text-slate-500">
              Prescriptions, car paint stickers, and serial numbers lack OCR clarity and disappear under burst photos.
            </p>
            <div className="pt-2 border-t border-slate-100 text-xs text-slate-600 font-medium">
              <span className="text-slate-400 block font-normal">Primary Focus:</span>
              Intent-driven document auto-clustering.
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-slate-900 text-sm">Resolve Temporal Misalignment</h3>
              <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">19.4%</span>
            </div>
            <p className="text-xs text-slate-500">
              Users anchor memory to life events rather than calendar years, resulting in empty date filters.
            </p>
            <div className="pt-2 border-t border-slate-100 text-xs text-slate-600 font-medium">
              <span className="text-slate-400 block font-normal">Primary Focus:</span>
              Milestone & life-event relational timelines.
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-slate-900">All Tagged Reviews</h2>
            <p className="text-xs text-slate-500">Two-pass LLM tagged items with memory clues and forgotten metadata.</p>
          </div>
          <input
            type="text"
            placeholder="Search quotes or barriers..."
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            className="text-xs border border-slate-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {themes.map((theme: any) => (
            <button
              key={theme}
              onClick={() => setSelectedTheme(theme)}
              className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-colors ${
                selectedTheme === theme
                  ? "bg-slate-900 text-white border-slate-900"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100"
              }`}
            >
              {theme}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {filteredItems.map((item: any) => (
            <div key={item.id} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">{item.category}</span>
                <span className="text-slate-400">{item.source} · {item.date}</span>
              </div>
              <p className="text-sm text-slate-800 italic leading-relaxed">“{item.quote}”</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs border-t border-slate-100">
                <div>
                  <span className="font-medium text-emerald-700 block">✓ Remembered:</span>
                  <span className="text-slate-600">{item.remembered.join(", ")}</span>
                </div>
                <div>
                  <span className="font-medium text-rose-700 block">✗ Forgotten:</span>
                  <span className="text-slate-600">{item.forgotten.join(", ")}</span>
                </div>
                <div>
                  <span className="font-medium text-slate-700 block">Workaround:</span>
                  <span className="text-slate-500">{item.workaround}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}