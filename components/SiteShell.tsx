import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SiteShell({
  children,
}: {
  children: React.ReactNode;
  hideSticky?: boolean;
}) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}
