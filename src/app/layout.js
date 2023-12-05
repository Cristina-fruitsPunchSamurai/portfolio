import { Poppins } from 'next/font/google'
import './globals.css'
import ActiveSectionContextProvider from '@/context/section-context';
import NavBar from './components/Navigation/NavBar';
import Footer from './components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400','600', '700'],
})

export const metadata = {
  title: "Cristina's Portfolio",
  description: "I'm a fullstack developer looking for an apprenticeship in France",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <ActiveSectionContextProvider>
          <NavBar />
          {children}
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
