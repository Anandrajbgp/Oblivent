import type { Metadata } from "next";
import { ELearningNavbar } from "@/components/layout/elearning-navbar";
import { ELearningFooter } from "@/components/layout/elearning-footer";

export const metadata: Metadata = {
  title: "E-Learning Platform | Oblivent Academy",
  description: "Learn. Earn. Grow. Together. - World-class skill + earning ecosystem with real-world skills, affiliate earning opportunities, and life mastery tracks.",
  keywords: "e-learning, online courses, affiliate marketing, skill development, certification, mentorship",
};

export default function ELearningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <ELearningNavbar />
      <main className="min-h-screen overflow-y-auto">
        {children}
      </main>
      <ELearningFooter />
    </div>
  );
}