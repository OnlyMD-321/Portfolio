import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Logo from "../public/logo-_1_.ico";
import Navbar from "./components/navbar";
import { LocaleProvider } from "./context/locale-context";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio d'OMLIL Mouad / OMLIL Mouad Portfolio - Ingénieur Full Stack / Full-Stack Engineer",
  description:
    "Portfolio bilingue d'OMLIL Mouad, Ingénieur Full Stack spécialisé en automatisation, développement web et optimisation des systèmes. / Bilingual portfolio of OMLIL Mouad, Full-Stack Engineer specialized in automation, web development, and systems optimization.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/logo-_1_.ico" />
      </head>
      
      <body className={inter.className}>
        <LocaleProvider>
          <ToastContainer />
          <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
            <Navbar />
            {children}
            <ScrollToTop />
          </main>
          <Footer />
        </LocaleProvider>
      </body>
      {process.env.NEXT_PUBLIC_GTM && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
      )}
    </html>
  );
}
