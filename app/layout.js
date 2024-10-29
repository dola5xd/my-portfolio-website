import { Poppins } from "next/font/google";
import "./_styles/globals.css";
import Header from "./_components/Header";

export const metadata = {
  title: "Welcome to my portfolio",
  description: "Hi, its Adel Yasser and welcome to my portfolio",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-dark-background text-dark-gray-300 h-screen ${poppins.className}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
