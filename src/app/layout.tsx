import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "Google Photos | Retrieval Discovery Engine",
  description: "AI-Powered Discovery Engine analyzing vague retrieval breakdowns at scale.",
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
    <main className="flex-1 w-full min-w-0 overflow-y-auto px-4 py-6 sm:px-6 lg:px-8">
      {children}
    </main>
  </div>
      </body>
    </html>
  );
}
