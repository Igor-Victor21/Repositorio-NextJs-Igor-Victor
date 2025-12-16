"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation"

import LogoSite from "../assets/Igor-Victor21.png"
import IconMenu from "../assets/IconMenu.png";
import IconInicio from "../assets/IconInicio.png"
import IconProjetos from "../assets/IconProjetos.png"
import IconSobreMim from "../assets/IconSobreMim.png"
import IconTecnologias from "../assets/IconTecnologias.png"
import IconServicos from "../assets/IconServiços.png"
import IconContato from "../assets/IconContato.png"


// Interface serve para definir a forma de um objeto,
// basicamente especificando seus atributos e seus tipos.
interface navProps {
    showNav: boolean
}

export default function Navbar({ }) {
    // Variavel para navegar entre as páginas
    const router = useRouter()

    // Variavel de estado para abrir ou fechar o menu
    const [menuOpen, setMenuOpen] = useState(false)
    // Variavel de estado para exibir avisos 
    const [showToast, setShowToast] = useState(false)

    return (
        <section className="bg-nav-gradient w-screen max-h-[87px] h-[87px] fixed top-0 z-50 border-b-1 border-[#F5F5F5]">
            {/* Mobile */}
            <div className="flex items-center justify-between h-full px-6 md:hidden">
                <Image src={LogoSite} alt="logo" width={180} height={50} />

                <button onClick={() => setMenuOpen(!menuOpen)}>
                    <Image className="mr-[10px]" src={IconMenu} alt="Menu" width={35} height={35} />
                </button>
            </div>

            {menuOpen && (
                <div
                    className="bg-nav-gradient md:hidden fixed left-0 w-full h-auto max-h-[calc(100vh-90px)] border-t-[1.2px] border-[#F5F5F5] grid grid-cols-3 gap-y-8 gap-x-4 px-6 py-8 overflow-y-auto z-50 border-b-1 border-[#F5F5F5]" 
                >
                    <Link href="#inicio" onClick={() => setMenuOpen(false)} className="flex flex-col items-center gap-2 text-[#F5F5F5] font-bold text-[16px]">
                        <span className="border-b-[1.2px] border-[#F5F5F5]">
                            Início
                        </span>
                    </Link>

                    <Link href="#projetos" onClick={() => setMenuOpen(false)} className="flex flex-col items-center gap-2 text-[#F5F5F5] font-bold text-[16px]">
                        <span className="border-b-[1.2px] border-[#F5F5F5]">
                            Projetos
                        </span>
                    </Link>

                    <Link href="#sobreMim" onClick={() => setMenuOpen(false)} className="flex flex-col items-center gap-2 text-[#F5F5F5] font-bold text-[16px]">
                        <span className="border-b-[1.2px] border-[#F5F5F5]">
                            Sobre Mim
                        </span>
                    </Link>

                    <Link href="#tecnologias" onClick={() => setMenuOpen(false)} className="flex flex-col items-center gap-2 text-[#F5F5F5] font-bold text-[16px]">
                        <span className="border-b-[1.2px] border-[#F5F5F5]">
                            Tecnologias
                        </span>
                    </Link>

                    <Link href="#servicos" onClick={() => setMenuOpen(false)} className="flex flex-col items-center gap-2 text-[#F5F5F5] font-bold text-[16px]">
                        <span className="border-b-[1.2px] border-[#F5F5F5]">
                            Serviços
                        </span>
                    </Link>

                    <Link href="#contato" onClick={() => setMenuOpen(false)} className="flex flex-col items-center gap-2 text-[#F5F5F5] font-bold text-[16px]">
                        <span className="border-b-[1.2px] border-[#F5F5F5]">
                            Contato
                        </span>
                    </Link>
                </div>

            )}

            {/* Desktop */}
            <div className="hidden md:flex items-center w-full h-full">
                <Image src={LogoSite} alt="logo" className="ml-[45px]" width={234} height={60} />
                <div className="flex items-center h-full ml-[5vw]">
                    <div className="flex items-center max-w-[95] w-50 h-[34] m-[41px]">
                        <Link href="#inicio" className="flex items-center gap-1 text-[#F5F5F5] font-bold border-b-[1.2] border-[#F5F5F5] text-[18px] cursor-pointer  hover:tracking-wide duration-200">
                            Início
                            <Image src={IconInicio} alt="IconNav" width={24} height={24} />
                        </Link>
                    </div>
                    <div className="flex items-center max-w-[117] w-50 h-[34] m-[41px]">
                        <Link href="#projetos" className="flex items-center gap-1 text-[#F5F5F5] font-bold border-b-[1.2] border-[#F5F5F5] text-[18px] cursor-pointer  hover:tracking-wide duration-200">
                            Projetos
                            <Image src={IconProjetos} alt="IconNav" width={24} height={24} />
                        </Link>
                    </div>
                    <div className="flex items-center max-w-[131] w-50 h-[34] m-[41px]">
                        <Link href="#sobreMim" className="flex items-center gap-1 text-[#F5F5F5] font-bold border-b-[1.2] border-[#F5F5F5] text-[18px] cursor-pointer  hover:tracking-wide duration-200">
                            Sobre Mim
                            <Image src={IconSobreMim} alt="IconNav" width={24} height={24} />
                        </Link>
                    </div>
                    <div className="flex items-center max-w-[149] w-50 h-[34] m-[41px]">
                        <Link href="#tecnologias" className="flex items-center gap-1 text-[#F5F5F5] font-bold border-b-[1.2] border-[#F5F5F5] text-[18px] cursor-pointer  hover:tracking-wide duration-200">
                            Tecnologias
                            <Image src={IconTecnologias} alt="IconNav" width={24} height={24} />
                        </Link>
                    </div>
                    <div className="flex items-center max-w-[117] w-50 h-[34] m-[41px]">
                        <Link href="#servicos" className="flex items-center gap-1 text-[#F5F5F5] font-bold border-b-[1.2] border-[#F5F5F5] text-[18px] cursor-pointer  hover:tracking-wide duration-200">
                            Serviços
                            <Image src={IconServicos} alt="IconNav" width={24} height={24} />
                        </Link>
                    </div>
                    <div className="flex items-center max-w-[106] w-50 h-[34] m-[41px]">
                        <Link href="#contato" className="flex items-center gap-1 text-[#F5F5F5] font-bold border-b-[1.2] border-[#F5F5F5] text-[18px] cursor-pointer  hover:tracking-wide duration-200">
                            Contato
                            <Image src={IconContato} alt="IconNav" width={24} height={24} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )


}