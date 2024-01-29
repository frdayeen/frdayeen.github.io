import type { Metadata } from "next";
import { montserrat, bodyText, headText } from "./assets/fonts/fonts"
import "./globals.css";
import Navigation from "./components/Navigation";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "Fazle R. Dayeen",
  description: "Life of Fazle R. Dayeen",
};

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
