import { Footer } from "@/components/ui/footer";
import { BlurHeader } from "@/components/ui/navbar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <BlurHeader />
      <div className="w-full">
        {children}
      </div>
      <Footer />
    </div>
  );
}