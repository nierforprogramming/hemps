import { Playfair_Display, Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import AOSProvider from "@/providers/aos-provider";

const serif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const sans = Jost({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nepal Hemp Collective — Raw. Pure. Himalayan.",
  description:
    "Wild Himalayan hemp fiber, water-retted and hand-processed in Far-Western Nepal.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="nepalhemp"
      className={`${serif.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans pt-16">
        <AOSProvider>
          <Header />
          {children}
          <Footer />
        </AOSProvider>
      </body>
    </html>
  );
}
