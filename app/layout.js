import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "JurassicMusicSociety",
  description: "Your community-driven radio destination.",
  keywords: ["music", "radio", "community", "Jurassic Music Society", "JurassicMusicSociety", "entertainment", "jurassic", "society", "live music"],
  openGraph: {
    title: "JurassicMusicSociety",
    description: "Your community-driven radio destination.",
    url: "https://jurassicmusicsociety.com", 
    images: [
      {
        url: "/JMS.png", 
        width: 800,
        height: 600,
        alt: "JMS",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
