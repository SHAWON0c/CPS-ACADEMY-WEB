"use client"

import { ReactNode } from "react"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { AuthProvider } from "../context/AuthProvider"

type Props = {
  children: ReactNode
}

export default function ClientWrapper({ children }: Props) {
  return (
    <AuthProvider>
      <Navbar/>
      <main>{children}</main>
      <Footer/>
    </AuthProvider>
  )
}
