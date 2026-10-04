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
      <body className="bg-slate-50 text-slate-900 flex min-h-screen font-sans antialiased">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </body>
    </html>
  );
}