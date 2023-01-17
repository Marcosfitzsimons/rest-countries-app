import { Nunito_Sans } from "@next/font/google";
import Header from "./components/Header";
import "./globals.css";

const nunito_sans = Nunito_Sans({
  weight: ["300", "600", "800"],
  subsets: ["latin"],
  variable: "--font-nunito-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${nunito_sans.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="font-nunito bg-orange-500 text-black dark:bg-very-dark-gray-500 dark:text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}
