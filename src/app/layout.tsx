import type { Metadata, Viewport } from "next";
import "/src/styles/_globals.scss";
import Nav from "@/components/navigation/Nav";
import ControllsButton from "@/components/navigation/ControlsButtons";


export const metadata: Metadata = {
  title: "Portfolio by Vazgen",
  description: "Portfolio by Vazgen",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="/font-icons/all.min.css"
        />
      </head>
      <body>
        <div className="wrapper">
          <ControllsButton />
          <Nav />
          <div className="wrapper__content">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
