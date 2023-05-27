"use client"
import Link from "next/link"
import logo from "../assets/logo.png"
import { InstagramLogo, WhatsappLogo } from "@phosphor-icons/react"
export function Footer() {
    return (
        <footer className="bg-blue-500 p-4 w-full md:px-20 lg:px-50 rounded-t-xl">
           <div className="flex justify-between items-center">
           <div className="bg-white rounded-full w-[60px] h-[60px] flex justify-center items-center">
                <img src={logo.src} alt="Cover" className="max-w-[50px]" />
            </div>
            <Link href="https://api.whatsapp.com/send/?phone=244939039608&text&type=phone_number&app_absent=0" className="bg-white py-3 px-6 text-blue-500 hover:bg-blue-500 hover:text-white transition-all rounded-lg drop-shadow-lg border border-black">Junte-se a nós</Link>
           </div>
            <div className="my-6 text-white w-full flex justify-center gap-4">
                <Link href="https://www.instagram.com/agenciacover1/" className="hover:text-blue-700">
                <InstagramLogo size={32} />
                </Link>
                <Link href="https://api.whatsapp.com/send/?phone=244939039608&text&type=phone_number&app_absent=0" className="hover:text-blue-700">
                <WhatsappLogo size={32} />
                </Link>
            </div>
            <p className="text-center font-thin text-white">C.O.V.E.R © 2023</p>
        </footer>
    )
}