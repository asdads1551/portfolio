import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/(home)/component/Navbar"
import { ThemeProvider } from "./component/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000/"),

	title: {
		template: "%s | Janus Zeng Portfolio",
		default: "Janus Zeng Portfolio",
	},
	authors: {
		name: "Janus Zeng Portfolio",
	},

	description:
		"我是一個Web全端開發者",
	openGraph: {
		title: "Janus Zeng Portfolio",
		description:
			"我是一個Web全端開發者",
		url: "http://localhost:3000/",
		siteName: "Janus Zeng Portfolio",
		images: "/og.png",
		type: "website",
	},
	keywords: ["Janus Zeng", "janus", "januszeng"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"suppressHydrationWarning >
      <body className={spaceGrotesk.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>        
      </body>
    </html>
  );
}
