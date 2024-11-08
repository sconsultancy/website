import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sconsultancy Group",
  description:
    "Unleash Your Potential with SConsultancy.Scale with interactive websites, custom tools, and growth hacks to supercharge your business",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={" main_body "}
        style={{
          backgroundImage:
            "url(https://sconsultancy.github.io/website/hero_bg.jpg)",
        }}
      >
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
