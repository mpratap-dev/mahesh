import "../styles/global.css";
import Nav from "../components/Nav";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], weight: ["800", "900"] });

export const metadata = {
  title: "Mahesh Pratap | UI / UX & Frontend Developer",
  description: "Portfolio of Mahesh Pratap",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`h-screen bg-gray-100 dark:bg-gray-900 ${nunito.className}`}>
        <Nav />
        <div className="md:mx-12 bg-white dark:bg-gray-950 shadow-lg rounded-t-2xl overflow-auto platform content">
          {children}
        </div>
      </body>
    </html>
  );
}
