import "@styles/globals.css";
import {
  TopNavbar,
  Footer,
} from "@components/index";

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

        {/* Main Page */}
        <main
          className="flex justify-center flex-col mx-auto scroll-smooth transition duration-150 ease-out hover:ease-in"
          data-scroll-container="true"
        >

          {/* Header */}
          <div className="z-[999] h-[--navbar-height] py-2 px-4 sm:px-8 md:px-12 sticky top-0 backdrop-blur-md shadow-sm">
            <TopNavbar />
          </div>

          {/* Content Pages */}
          <div className="m-auto min-h-[--page-height] flex flex-col p-4 align-center justify-center items-start">
            {children}
          </div>

          {/* Footer */}
          <div>
            <Footer />
          </div>
        
        </main>
        
      </body>
    </html>
  );
}
