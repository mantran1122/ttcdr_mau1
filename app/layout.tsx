import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Trung tâm Chuẩn đầu ra | Trường Đại học Nam Cần Thơ",
  description: "Trung tâm Chuẩn đầu ra & Phát triển nguồn nhân lực – Trường Đại học Nam Cần Thơ",
  icons: {
    icon: "/logo_don.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Google+Sans+Flex:opsz,wght@6..144,1..1000&family=Momo+Trust+Sans:wght@200..800&family=Playfair+Display:ital@1&display=swap"
        />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
        <link
          rel="preload"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/fonts/bootstrap-icons.woff2?dd67030699838ea613ee6dbda90effa6"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />

        {/* Floating NCT button */}
        <a
          href="https://www.nctu.edu.vn/"
          target="_blank"
          rel="noreferrer"
          aria-label="Trang chủ NCT"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg transition-transform hover:scale-110 active:scale-95"
          style={{ background: "#fff" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo_don.png" alt="NCT" className="h-10 w-10 object-contain" />
        </a>
      </body>
    </html>
  );
}
