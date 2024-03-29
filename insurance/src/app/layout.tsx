import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Insurance Company System',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <Header />
        <ToastContainer />
        {children}
        <Footer />
      </body>
    </html>
  );
}
