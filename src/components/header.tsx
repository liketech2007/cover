"use client"
import { CaretDown, List, X } from '@phosphor-icons/react'
import Link from 'next/link'
import { useState } from 'react'

export function Header() {
    const [openMenu,setOpenMenu] = useState(false)
    const [openMais,setOpenMais] = useState(false)
    return (
        <header className={ ` bg-white p-4 flex justify-between items-center w-full md:px-20 lg:px-50 rounded-b-lg ${openMenu === true ? "fixed top-0" : "sticky top-0"}`}>
            <div className={openMenu == true ? "self-start" : ""}>Logo</div>
            <ul className="gap-4 text-sm hidden lg:flex">
               <Link href="#proposito" className="border-b-0 border-t-0 border-r-0 boder-l-0 border-blue-500 p-4 hover:border-b  transition-all flex justify-center items-center">Propósito</Link>
               <Link href="#servicos" className="border-b-0 border-t-0 border-r-0 boder-l-0 border-blue-500 p-4 hover:border-b  transition-all flex justify-center items-center">Serviços</Link>
               <Link href="#portfolio" className="border-b-0 border-t-0 border-r-0 boder-l-0 border-blue-500 p-4 hover:border-b  transition-all flex justify-center items-center">Portifólio</Link>
               <Link href="#feedbacks" className="border-b-0 border-t-0 border-r-0 boder-l-0 border-blue-500 p-4 hover:border-b  transition-all flex justify-center items-center">Feedbacks</Link> 
               <Link href="#livros" className="border-b-0 border-t-0 border-r-0 boder-l-0 border-blue-500 p-4 hover:border-b  transition-all flex justify-center items-center">Nossos Livros</Link>
               <Link href="#mentoria" className="border-b-0 border-t-0 border-r-0 boder-l-0 border-blue-500 p-4 hover:border-b  transition-all flex justify-center items-center">Mentoria</Link>
               <li className="  transition-all flex justify-center items-center gap-3"  onClick={() => setOpenMais(openMais === true ? false : true)} onMouseEnter={() => setOpenMais(true)} onMouseLeave={() => setOpenMais(false)}>
                Mais
                <CaretDown className="text-sm" />
                <div className={` ${openMais === true ? "absolute top-0 right-1 bg-white rounded-lg p- flex flex-col gap-3 items-end text-black" : "hidden"}`}>
                <X size={48}  onClick={() => setOpenMais(false)}/>
                        <ul>
                        <Link href="#bastidores" className="border-b-0 border-t-0 border-r-0 boder-l-0 border-blue-500 p-4 hover:border-b  transition-all flex justify-center items-center">Bastidores</Link>
                        <Link href="#rubrica" className="border-b-0 border-t-0 border-r-0 boder-l-0 border-blue-500 p-4 hover:border-b  transition-all flex justify-center items-center">Rubrica</Link>
                        <Link href="#dicas" className="border-b-0 border-t-0 border-r-0 boder-l-0 border-blue-500 p-4 hover:border-b  transition-all flex justify-center items-center">Dicas</Link>
                        <Link href="#parceiro" className="border-b-0 border-t-0 border-r-0 boder-l-0 border-blue-500 p-4 hover:border-b  transition-all flex justify-center items-center">Cover Parceiro</Link> 
                        </ul>
                </div>
               
               </li>
            </ul>
            <div className="block lg:hidden">
            <List className={openMenu === true ? "hidden text-black bg-white" : "block"}  size={48} onClick={() => setOpenMenu(true)}/>
            {
                openMenu === true ? (
                <div className="flex flex-col justify-end items-end gap-6">
                    <X size={48}  onClick={() => setOpenMenu(false)}/>
                    <ul className="flex flex-col gap-4 text-sm ">
                        <Link href="#proposito" className="border-b-0 border-t-0 border-r-0 boder-l-0 border-blue-500 p-4 hover:border-b  transition-all flex justify-center items-center">Propósito</Link>
                        <Link href="#servicos" className="border-b-0 border-t-0 border-r-0 boder-l-0 border-blue-500 p-4 hover:border-b  transition-all flex justify-center items-center">Serviços</Link>
                        <Link href="#portfolio" className="border-b-0 border-t-0 border-r-0 boder-l-0 border-blue-500 p-4 hover:border-b  transition-all flex justify-center items-center">Portfólio</Link>
                        <Link href="#feedbacks" className="border-b-0 border-t-0 border-r-0 boder-l-0 border-blue-500 p-4 hover:border-b  transition-all flex justify-center items-center">Feedbacks</Link> 
                        <Link href="#livros" className="border-b-0 border-t-0 border-r-0 boder-l-0 border-blue-500 p-4 hover:border-b  transition-all flex justify-center items-center">Nossos Livros</Link>
                        <Link href="#mentoria" className="border-b-0 border-t-0 border-r-0 boder-l-0 border-blue-500 p-4 hover:border-b  transition-all flex justify-center items-center">Mentoria</Link>
                        <li className={`transition-all flex justify-center items- gap-3 `} onClick={() => setOpenMais(openMais === true ? false : true)}>
                        Mais
                        <CaretDown className="text-sm" />
                        <div className={` ${openMais === true ? "block" : "hidden"}`}>
                        <ul>
                        <Link href="#bastidores" className="border-b-0 border-t-0 border-r-0 boder-l-0 border-blue-500 p-4 hover:border-b  transition-all flex justify-center items-center">Bastidores</Link>
                        <Link href="#rubrica" className="border-b-0 border-t-0 border-r-0 boder-l-0 border-blue-500 p-4 hover:border-b  transition-all flex justify-center items-center">Rubrica</Link>
                        <Link href="#dicas" className="border-b-0 border-t-0 border-r-0 boder-l-0 border-blue-500 p-4 hover:border-b  transition-all flex justify-center items-center">Dicas</Link>
                        <Link href="#parceiro" className="border-b-0 border-t-0 border-r-0 boder-l-0 border-blue-500 p-4 hover:border-b  transition-all flex justify-center items-center">Cover Parceiro</Link> 
                        </ul>
                        </div>
                        </li>
                </ul>  
            </div>
                ) : null
            }
            </div>
        </header>
    )
}