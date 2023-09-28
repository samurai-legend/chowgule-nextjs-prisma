import { Providers } from "@app/providers";
import "./globals.scss";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({ style: "normal", weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.Js/Prisma Workshop",
  description: "Chowgule Workshop - Suyog S. Mishal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
