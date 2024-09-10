import "./globals.css";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Anikus LLC",
  description: "Where you can get IT digital services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white text-black-green font-roboto">
      <body className="">
        <Toaster position="top-right" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
