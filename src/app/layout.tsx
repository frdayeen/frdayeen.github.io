import type { Metadata } from "next";
import { montserrat, bodyText, headText } from "./assets/fonts/fonts"
import "./globals.css";
import Navigation from "./components/Navigation";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";



export const metadata: Metadata = {
  title: 
  {
    default: "Fazle R. Dayeen",
    template: "%s | Fazle R. Dayeen"
  },
  description: "Portfolio of Fazle Rabbi Dayeen",
  twitter: {
    card: "summary_large_image"
  },
  metadataBase: new URL('https://frdayeen.github.io'),// change it when move to a new domain
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodyText.className} ${montserrat.variable}`}>
        {/* <Navigation/> */}
        <TopNav/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
