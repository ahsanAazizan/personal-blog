import "./globals.css";
import type { Metadata } from "next";
import { Nanum_Gothic } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

const nanumGothicFont = Nanum_Gothic({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Ahsan Azizan | Personal Website",
    template: "Ahsan Azizan | %s",
  },
  description: "Personal website of Ahsan Awadullah Azizan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={nanumGothicFont.className + " overflow-x-hidden bg-black"}
      >
        <NextTopLoader color="#fff" />
        {children}
      </body>
    </html>
  );
}
