import "./globals.css";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";

export const metadata = {
  title: "Anikus LLC",
  description: "Where you can get IT digital services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white text-black-green font-roboto">
      <body className="">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
