"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Database, MessageSquareCode, ShieldCheck } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { label: "Research Engine", href: "/dataset", icon: Database },
    { label: "Ask Assistant", href: "/ask", icon: MessageSquareCode },
  ];

  return (
    <aside className="w-64 border-r border-slate-200 bg-white flex flex-col justify-between h-screen sticky top-0 shrink-0">
      <div>
        <div className="p-6 border-b border-slate-100 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
            G
          </div>
          <div>
            <h1 className="font-semibold text-sm text-slate-900 leading-tight">Google Photos</h1>
            <p className="text-xs text-slate-500 font-medium">Retrieval Intelligence</p>
          </div>
        </div>

        <div className="p-4">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2">Navigate</p>
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href || (pathname === "/" && item.href === "/dataset");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-700 font-semibold"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-blue-600" : "text-slate-400"}`} />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      <div className="p-4 border-t border-slate-100">
        <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-slate-50 border border-slate-200 text-xs text-slate-600 font-medium">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Core Experience Lab · 2026</span>
        </div>
      </div>
    </aside>
  );
}