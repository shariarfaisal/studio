import type { Metadata } from "next";
import "./styles/globals.css";
import Providers from "./Providers";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Docs Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
