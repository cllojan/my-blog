import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Head from "./head";
import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Head />
      <body>
        <div className='mx-auto max-w-2xl '>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
