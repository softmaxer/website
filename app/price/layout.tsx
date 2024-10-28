import type { Metadata } from "next";
import "../globals.css";
import TopBar from "@/components/topbar";

export const metadata: Metadata = {
  title: "RAM",
  description: "A portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <TopBar navTo="/" pageTitle="Pricing" />
        {children}
      </body>
    </html>
  );
}
