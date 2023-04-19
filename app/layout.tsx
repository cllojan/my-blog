import Header from './Components/Header';
import Footer from './Components/Footer';
import Head from './head';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">      
      <Head />
      <body>
        <Header />        
          {children}        
        <Footer />        
      </body>
    </html>
  )
}
