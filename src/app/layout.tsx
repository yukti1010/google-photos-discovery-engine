import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Google Photos | Retrieval Discovery Engine",
  description: "PM Intelligence & Episodic Search Discovery Engine",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 min-h-screen font-sans antialiased">
        <div className="flex flex-col lg:flex-row min-h-screen w-full">
          <Sidebar />
          <main className="flex-1 w-full min-w-0 overflow-y-auto px-4 py-6 sm:px-8 sm:py-8 lg:px-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
