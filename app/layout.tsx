import Header from './Components/Header';
import Footer from './Components/Footer';
import  head from './head'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">      
      <head />
      <body>

        <Header />
        
          {children}
        
        <Footer />        
      </body>
    </html>
  )
}
