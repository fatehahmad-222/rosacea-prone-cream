import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rosacea-Prone Anti-Redness Cream | Murasaki Beauty",
  description:
    "Daily barrier repair for sensitive, redness-prone skin. A fragrance-free, non-greasy face cream powered by PDRN, Ectoin & Ceramide NP to calm visible redness, replenish the skin barrier, and support long-term comfort.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-dvh flex flex-col overflow-x-clip antialiased">{children}</body>
    </html>
  );
}
