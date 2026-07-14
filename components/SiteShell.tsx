import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCtas from "@/components/StickyCtas";

export default function SiteShell({
  children,
  hideSticky = false,
}: {
  children: React.ReactNode;
  hideSticky?: boolean;
}) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      {!hideSticky && <StickyCtas />}
    </div>
  );
}
