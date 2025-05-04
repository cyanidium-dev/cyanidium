import { Raleway, Montserrat } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Providers } from "../../../providers";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-raleway",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], 
  variable: "--font-montserrat", 
});

export async function generateMetadata({ params }) {
  const { locale } = params; 
  const messages = await getMessages({ locale, path: "messages" });
  const meta = messages.meta; 

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    icons: {
      icon: "/icons/favicon.ico",
    },
  };
}

export default async function RootLayout({ children, params }) {
  const { locale } = params; 
  const messages = await getMessages({ locale, path: "messages" });

  return (
    <html lang={locale} className={`${raleway.variable} ${montserrat.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            {/* <Header /> */}
            <main className="bg-[#020418]">{children}</main>
            {/* <Navbar /> */}
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
