import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.eurodiem.eu"),
  title: {
    default: "EuroDIEM — Insurance Risk Syndication of the Future",
    template: "%s | EuroDIEM",
  },
  description:
    "EuroDIEM is developing a European platform to industrialize syndication of large and unconventional insurance risks, decreasing the protection gap and doubling the size of the insurance market, combined with a European PPP.",
  openGraph: {
    type: "website",
    siteName: "EuroDIEM",
    title: "EuroDIEM — Insurance Risk Syndication of the Future",
    description:
      "European Digital Insurance Exchange Market — accelerating and industrializing syndication of large and unconventional insurance risks.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
