"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, BarChart3, Search, Layers, CheckCircle2, Compass } from "lucide-react";
import corpusData from "@/data/corpus.json";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Overview & Synthesis", href: "/dataset#overview", icon: Sparkles },
    { name: "Evidence Explorer", href: "/dataset#evidence", icon: Search },
    { name: "Opportunity Ranking", href: "/dataset#ranking", icon: Layers },
    { name: "Methodology & Pipeline", href: "/dataset#pipeline", icon: Compass },
    { name: "Metric Decomposition", href: "/metric", icon: BarChart3 },
  ];

  const uniqueSources = Array.from(new Set(corpusData.map((i: any) => i.source)));

  return (
    <aside className="w-64 bg-slate-900 text-white border-r border-slate-800 flex flex-col justify-between h-screen sticky top-0 shrink-0">
      <div>
        {/* Brand Header */}
        <div className="p-6 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-black text-white text-base">
              R
            </div>
            <div>
              <span className="font-extrabold tracking-tight text-white text-base">
                Retrieval<span className="text-blue-400 italic">Lens</span>
              </span>
              <p className="text-[10px] text-slate-400 font-medium tracking-wide uppercase">
                Google Photos PM Intelligence
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="p-4 space-y-1">
          <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Research Navigation
          </p>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-400"}`} />
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Dataset Footnote Card */}
      <div className="p-4 m-4 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs space-y-2">
        <div className="flex items-center justify-between text-slate-400 text-[11px] font-medium">
          <span>Corpus Volume</span>
          <span className="text-white font-bold">{corpusData.length} records</span>
        </div>
        <div className="flex items-center justify-between text-slate-400 text-[11px] font-medium">
          <span>Validated Sources</span>
          <span className="text-white font-bold">{uniqueSources.length} channels</span>
        </div>
        <div className="pt-2 border-t border-slate-700/60 flex items-center gap-1.5 text-[10px] text-blue-400 font-medium">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>Part 1 Deliverable Live</span>
        </div>
      </div>
    </aside>
  );
}
