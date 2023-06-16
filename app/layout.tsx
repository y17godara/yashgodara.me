import "./globals.css";
import { TopNavbar } from '@components';

import { Roboto_Mono } from "next/font/google";
const roboto = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Yash Godara",
  description: "Personal Portfolio of Yash Godara",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div>
          <div className="z-[999]">
          </div>
          <div className="z-[1]">{children}</div>
        </div>
      </body>
    </html>
  );
}
