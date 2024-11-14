import type { Metadata, Viewport } from "next";
import "/src/styles/_globals.scss";
import Nav from "@/components/navigation/Nav";
import ControllsButton from "@/components/navigation/ControlsButtons";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";


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


interface RootLayoutProps {

  children: React.ReactNode;
  params: { locale: string };

}

async function RootLayout({
  children,
  params,
}: Readonly<RootLayoutProps>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="stylesheet" href="/font-icons/all.min.css" />
      </head>

      <body>
        <div className="wrapper">
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ControllsButton />
            <Nav />
            <div className="wrapper__content">
              {children}
            </div>
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}


export default RootLayout;



export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}