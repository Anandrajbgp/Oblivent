import type { Metadata } from "next";
import { TestNavbar } from "@/components/layout/test-navbar";
import { TestFooter } from "@/components/layout/test-footer";

export const metadata: Metadata = {
  title: "Test Platform | Oblivent",
  description: "Comprehensive test platform for competitive exams, skill assessments, and practice tests with detailed analytics.",
  keywords: "test, exam, competitive exam, assessment, mock test, practice test, results, analytics",
};

export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <TestNavbar />
      <main className="min-h-screen overflow-y-auto">
        {children}
      </main>
      <TestFooter />
    </div>
  );
}