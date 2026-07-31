import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { StatsProvider } from "@/lib/StatsContext";

export const metadata: Metadata = {
  title: "VocaPro - 중고등 필수 영단어 암기",
  description: "중고등학생을 위한 필수 영단어 암기 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <StatsProvider>
          <Navbar />
          <main style={{ padding: '0 2rem 2rem' }}>
            {children}
          </main>
        </StatsProvider>
      </body>
    </html>
  );
}
