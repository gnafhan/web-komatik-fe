import { Footer } from "@/components/ui/footer";
import { BlurHeader } from "@/components/ui/navbar";
import { QuizProvider } from "./quizContext";

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QuizProvider>
      <div>
        <BlurHeader />
        <div className="w-full">
          {children}
        </div>
        <Footer />
      </div>
    </QuizProvider>
  );
}