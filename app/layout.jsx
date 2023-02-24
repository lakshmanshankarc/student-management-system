"use client"
import './globals.css'
import Navbar from '../libs/global/Navbar'
import Sidebar from '../libs/global/Sidebar'
import { CookiesProvider } from "react-cookie"
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
    <CookiesProvider>
        <Navbar />
        <Sidebar />
        {children}
    </CookiesProvider>
      </body>
    </html>
  )
}
