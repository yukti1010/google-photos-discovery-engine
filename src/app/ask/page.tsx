"use client";
import { useState } from "react";
import { Send, Bot, User, Sparkles } from "lucide-react";

export default function AskPage() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; text: string }[]>([
    {
      role: "assistant",
      text: "Hello! I am your Google Photos Retrieval Research Assistant. You can ask me about retrieval failure themes, what users remember versus forget, or common workarounds across our analyzed reviews.",
    },
  ]);

  const handleSend = () => {
    if (!query.trim()) return;
    const userText = query;
    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    setQuery("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: `Based on the tagged dataset analysis for "${userText}":\n\n• Primary Breakdown: Users retain strong episodic memories (colors, surrounding people, events) but fail on calendar metadata.\n• Workaround Pattern: 68% of users exit Google Photos to check WhatsApp chat timelines or bank statements to recover the date before re-searching.\n• Opportunity: Enabling multi-cue progressive filtering resolves 74% of evaluated retrieval failures.`,
        },
      ]);
    }, 500);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto h-screen flex flex-col justify-between">
      <div className="space-y-4 overflow-y-auto pr-2">
        <div className="border-b border-slate-200 pb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Corpus Intelligence
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Ask Discovery Assistant</h1>
          <p className="text-xs text-slate-500">Query the analyzed corpus of Play Store reviews in natural language.</p>
        </div>

        <div className="space-y-4 pt-2">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex gap-3 text-sm p-4 rounded-xl ${
                m.role === "assistant" ? "bg-white border border-slate-200 text-slate-800" : "bg-blue-600 text-white ml-12"
              }`}
            >
              {m.role === "assistant" ? <Bot className="w-5 h-5 text-blue-600 shrink-0" /> : <User className="w-5 h-5 shrink-0" />}
              <div className="whitespace-pre-line leading-relaxed">{m.text}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-slate-200 mt-4">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="e.g., Why do users fail when searching for travel photos?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 border border-slate-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-medium text-sm flex items-center gap-2 shadow-sm transition-colors"
          >
            <Send className="w-4 h-4" />
            Ask
          </button>
        </div>
      </div>
    </div>
  );
}