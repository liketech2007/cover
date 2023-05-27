"use client"
import { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import proposito from "../assets/proposito.png"
import portfolio from "../assets/portfolio.jpg"
import servicos from "../assets/servicos.png"
import livros from "../assets/livros.png"
import mentoria from "../assets/mentoria.png"
import bastidores from "../assets/bastidores.png"
import rubrica from "../assets/rubrica.jpg"
import dicas from "../assets/dicas.jpg"
import parceria from "../assets/parceria.png"
import feedbacks from "../assets/feedbacks.jpg"
import Link from 'next/link';
import { CaretUp } from '@phosphor-icons/react';

//data-aos="fade-up-right"
export function Main() {
    useEffect(() => {
        AOS.init({ duration: 1});
    },[])
    return (
        <main className="min-w-full flex flex-col justify-center items-center relative z-0">
            <div  className="min-w-full flex justify-center items-center bg-[url('../assets/banner.png')] text-white h-[200px]">
                <Link href="https://api.whatsapp.com/send/?phone=244939039608&text&type=phone_number&app_absent=0" className="bg-blue-500 py-3 px-6 text-white hover:bg-white hover:text-black transition-all rounded-lg drop-shadow-lg border border-black">Junte-se a nós</Link>
            </div>
            <div  className='w-full self-start flex flex-wrap gap-6 justify-between items-start p-4 md:px-20 lg:px-50 '>
            <h1 data-aos="fade-up-right" className='text-4xl lg:text-8xl font-bold bg-blue-500 py-3 px-6 rounded-lg text-white'>C.O.V.E.R</h1>
            <p data-aos="fade-up-right" className='font-bold bg-blue-500 py-3 px-6 rounded-lg text-white'>Agência de Marketing</p>
            <p data-aos="fade-up-right" className='font-bold bg-blue-500 py-3 px-6 rounded-lg text-white self-end'>Apenas começa no começo</p>
            <div data-aos="fade-up-right" className='bg-blue-500 py-3 px-6 rounded-lg text-white self-start lg:self-center'>
                C: Crescimento <br />
                O: Otimização <br />
                V: Visiblidade <br />
                E: Essência <br />
                R: Relevância <br />
            </div>
            </div>
            <div className="w-full">
            <div id="proposito"  className="bg-white rounded-lg px-4 min-w-full min-h-[300px] pb-8 flex flex-col lg:flex-row gap-6 justify-center items-center">
               <div className="flex items-center gap-2">
               <h1 className="bg-blue-500 px-6 py-3 rounded-lg text-white font-bold text-3xl">Propósito</h1>
               <img src={proposito.src} alt="Propósito" className="max-w-[75px]"/>
               </div>
                <div className="flex justify-center">
                <p className="text-center border-blue-500 border-l-0 border-t-0 border-r-0 border-b rounded-lg p-4 drop-shadow-md max-w-[400px]">
                    O nosso propósito é ajudar <span className="text-blue-500">Marcas</span> a posicinarem no digital, terem <span className="text-blue-500">relevância</span>
                     <span className="text-blue-500">autoridade</span> em suas áreas de atuação e <span className="text-blue-500">alavancar</span> seus resultados
                </p>
                 </div>   
            </div>

            <div id="servicos" className="bg-blue-500 rounded-lg min-w-full lg:p-16 p-4 md:px-20 lg:px-50">
            <div className="flex items-center gap-2">
               <h1 className="bg-white px-6 py-3 rounded-lg text-blue-500 font-bold text-3xl">Serviços</h1>
               <img src={servicos.src} alt="Propósito" className="max-w-[75px] rounded-full"/>
               </div>
                <div className="w-full text-white flex flex-wrap gap-8 my-8">
                    <div data-aos="fade-up-right" className="rounded-lg border-t-0 border-l-0 border-r-0 border-white border-b-2 p-4 w-full group">
                        <p className='font-bold'>Gestão de Redes Sociais (GRS)</p>
                        <p className='hidden group-hover:block p-4'>

                        </p>
                        </div>
                    <div data-aos="fade-up-right" className="rounded-lg border-t-0 border-l-0 border-r-0 border-white border-b-2 p-4 w-full group">
                        <p className='font-bold'>Gestão de Anuncios Online</p>
                        <p className='hidden group-hover:block p-4'>

                        </p>
                        </div>
                    <div data-aos="fade-up-right" className="rounded-lg border-t-0 border-l-0 border-r-0 border-white border-b-2 p-4 w-full group">
                        <p className='font-bold'>Criação de Conteudo Estratégico</p>
                        <p className='hidden group-hover:block p-4'>

                        </p>
                        </div>
                    <div data-aos="fade-up-right" className="rounded-lg border-t-0 border-l-0 border-r-0 border-white border-b-2 p-4 w-full group">
                        <p className='font-bold'>Design Gráfico</p>
                        <p className='hidden group-hover:block p-4'>

                        </p>
                        </div>
                    <div data-aos="fade-up-right" className="rounded-lg border-t-0 border-l-0 border-r-0 border-white border-b-2 p-4 w-full group">
                        <p className='font-bold'>CopyWriting</p>
                        <p className='hidden group-hover:block p-4'>

                        </p>
                        </div>
                    <div data-aos="fade-up-right" className="rounded-lg border-t-0 border-l-0 border-r-0 border-white border-b-2 p-4 w-full group">
                        <p className='font-bold'>Lançamento de info-produtos</p>
                        <p className='hidden group-hover:block p-4'>

                        </p>
                        </div>
                    <div data-aos="fade-up-right" className="rounded-lg border-t-0 border-l-0 border-r-0 border-white border-b-2 p-4 w-full group">
                        <p className='font-bold'>Criação de websites</p>
                        <p className='hidden group-hover:block p-4'>

                        </p>
                        </div>
                </div>
            </div>
            <div id="portfolio" className="rounded-lg min-w-full flex flex-col gap-12 lg:gap-4 lg:p-16 p-4 md:px-20 lg:px-50">
            <div className="flex items-center gap-2">
               <h1 className="bg-blue-500 px-6 py-3 rounded-lg text-white font-bold text-3xl">Portfólio</h1>
               <img src={portfolio.src} alt="Propósito" className="max-w-[75px] rounded-full"/>
               </div>
                <div className="flex flex-wrap gap-4 justify-center items-center">
                    <div data-aos="fade-up-right" className="p-4 rounded-lg w-[200px] bg-blue-500 text-white">
                        oi
                    </div>
                </div>
            </div>
            <div id="livros" className="rounded-lg min-w-full flex flex-col gap-12 lg:gap-4 lg:p-16 p-4 md:px-20 lg:px-50 bg-blue-500 text-white">
            <div className="flex items-center gap-2">
               <h1 className="bg-white px-6 py-3 rounded-lg text-blue-500 font-bold text-3xl">Nossos Livros</h1>
               <img src={livros.src} alt="Propósito" className="max-w-[75px] rounded-full"/>
               </div>
                <div className="flex flex-wrap gap-4 justify-center items-center">
                    <div data-aos="fade-up-right" className="p-4 rounded-lg w-[200px] bg-blue-500 text-white">
                        oi
                    </div>
                </div>
            </div>

            <div id="mentoria" className="rounded-lg min-w-full flex flex-col gap-12 lg:gap-4 lg:p-16 p-4 md:px-20 lg:px-50">
            <div className="flex items-center gap-2">
               <h1 className="bg-blue-500 px-6 py-3 rounded-lg text-white font-bold text-3xl">Mentoria</h1>
               <img src={mentoria.src} alt="Propósito" className="max-w-[75px] rounded-full"/>
               </div>
                <div className="flex flex-wrap gap-4 justify-center items-center">
                    <div data-aos="fade-up-right" className="p-4 rounded-lg w-[200px] drop-shadow-lgborder-b-0 border-t-0 border-r-0 boder-l-0 border-blue-500 border-b">
                        oi
                    </div>
                </div>
            </div>


            <div id="bastidores" className="rounded-lg min-w-full flex flex-col gap-12 lg:gap-4 lg:p-16 p-4 md:px-20 lg:px-50">
            <div className="flex items-center gap-2">
               <h1 className="bg-blue-500 px-6 py-3 rounded-lg text-white font-bold text-3xl">Bastidores</h1>
               <img src={bastidores.src} alt="Propósito" className="max-w-[75px] rounded-full"/>
               </div>
                <div className="flex flex-wrap gap-4 justify-center items-center">
                    <div data-aos="fade-up-right" className="p-4 rounded-lg w-[200px] drop-shadow-lgborder-b-0 border-t-0 border-r-0 boder-l-0 border-blue-500 border-b">
                        oi
                    </div>
                </div>
            </div>


            <div id="rubrica" className="rounded-lg min-w-full flex flex-col gap-12 lg:gap-4 lg:p-16 p-4 md:px-20 lg:px-50">
            <div className="flex items-center gap-2">
               <h1 className="bg-blue-500 px-6 py-3 rounded-lg text-white font-bold text-3xl">Rubrica</h1>
               <img src={rubrica.src} alt="Propósito" className="max-w-[75px] rounded-full"/>
               </div>
                <div className="flex flex-wrap gap-4 justify-center items-center">
                    <div data-aos="fade-up-right" className="p-4 rounded-lg w-[200px] drop-shadow-lgborder-b-0 border-t-0 border-r-0 boder-l-0 border-blue-500 border-b">
                        oi
                    </div>
                </div>
            </div>


            <div id="dicas" className="rounded-lg min-w-full flex flex-col gap-12 lg:gap-4 lg:p-16 p-4 md:px-20 lg:px-50">
            <div className="flex items-center gap-2">
               <h1 className="bg-blue-500 px-6 py-3 rounded-lg text-white font-bold text-3xl">Dicas</h1>
               <img src={dicas.src} alt="Propósito" className="max-w-[75px] rounded-full"/>
               </div>
                <div className="flex flex-wrap gap-4 justify-center items-center">
                    <div data-aos="fade-up-right" className="p-4 rounded-lg w-[200px] drop-shadow-lgborder-b-0 border-t-0 border-r-0 boder-l-0 border-blue-500 border-b">
                        oi
                    </div>
                </div>
            </div>


            <div id="parceria" className="rounded-lg min-w-full flex flex-col gap-12 lg:gap-4 lg:p-16 p-4 md:px-20 lg:px-50">
            <div className="flex items-center gap-2">
               <h1 className="bg-blue-500 px-6 py-3 rounded-lg text-white font-bold text-3xl">Parceria Cover</h1>
               <img src={parceria.src} alt="Propósito" className="max-w-[75px] rounded-full"/>
               </div>
                <div className="flex flex-wrap gap-4 justify-center items-center">
                    <div data-aos="fade-up-right" className="p-4 rounded-lg w-[200px] drop-shadow-lgborder-b-0 border-t-0 border-r-0 boder-l-0 border-blue-500 border-b">
                        oi
                    </div>
                </div>
            </div>


            <div id="feedbacks" className="rounded-lg min-w-full flex flex-col gap-12 lg:gap-4 lg:p-16 p-4 md:px-20 lg:px-50">
            <div className="flex items-center gap-2">
               <h1 className="bg-blue-500 px-6 py-3 rounded-lg text-white font-bold text-3xl">Feedbacks</h1>
               <img src={feedbacks.src} alt="Propósito" className="max-w-[75px] rounded-full"/>
               </div>
                <div className="flex flex-wrap gap-4 justify-center items-center">
                    <div data-aos="fade-up-right" className="p-4 rounded-lg w-[200px] drop-shadow-lgborder-b-0 border-t-0 border-r-0 boder-l-0 border-blue-500 border-b">
                        oi
                    </div>
                </div>
            </div>
            </div>
            <Link href="#header" className='bg-blue-500 text-white rounded-full p-3 fixed bottom-3 right-3 text-center'>
            <CaretUp size={32} />
            </Link>
        </main>
    )
}