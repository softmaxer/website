import "../globals.css";
import TopBar from "@/components/topbar";

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
        <TopBar navTo="/" pageTitle="My Work" />
        {children}
      </body>
    </html>
  );
}
