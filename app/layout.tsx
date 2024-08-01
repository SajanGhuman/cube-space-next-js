import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "./providers";
import Cube from "./components/cube";
import NewLr from "./components/newlr";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cube Space",
  description: "Cube Space Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <div className="absolute top-0 left-0">
            <Cube />
          </div>
          <NewLr />
          {children}
        </Provider>
      </body>
    </html>
  );
}
