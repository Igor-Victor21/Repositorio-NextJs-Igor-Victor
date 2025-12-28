"use client"

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

import IconEmail from "../assets/IconE-mail.png"
import IconPhone from "../assets/IconPhone.png"
import IconLinkedin from "../assets/IconLinkedin.png"
import IconGithub from "../assets/IconGithub.png"
import IconWhatsApp from "../assets/IconWhatsapp.png"

export default function FooterContact() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [mensagem, setMensagem] = useState("")

  const [showToast, setShowToast] = useState(false)

  const handleEmail = () => {

    if (!nome.trim()) {
      setShowToast(true)
      setTimeout(() => setShowToast(false), 5000)
      return
    }

    if (!mensagem.trim()) {
      setShowToast(true)
      setTimeout(() => setShowToast(false), 5000)
      return
    }

    const to = "igor.victorcontato@gmail.com"
    const subject = `Olá, meu nome é ${nome}. Estou entrando em contato através do seu portifólio.`

    const emailURL = `https://mail.google.com/mail/u/0/?fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(mensagem)}&tf=cm`

    window.open(emailURL, "_blank")
  }

  const wppNumber = "5541987446352"

  const handleZap = () => {
    const URLzap = `https://api.whatsapp.com/send?phone=${wppNumber}`
    window.open(URLzap, "_blank")
  }

  return (
    <section className="flex flex-col items-center p-[30px] md:flex-row md:justify-center">

      {/* Container E-mail contact */}
      <div className="flex flex-col p-5 w-[390px] h-[450px] md:h-[530px] md:m-[70px] bg-white rounded-[15px] my-[30px] md:w-[576px]">
        {showToast && (
          <div className="flex flex-col fixed w-[80vw] md:w-[50vw] xl:w-[20vw] left-1/2 -translate-x-1/2 bottom-6 bg-gray-500 p-4 z-50 rounded-lg">
            <p className="text-[12px] font-bold text-white">Oops, parece que algum dos dados necessários não foi preenchido, preencha antes de continuar.</p>
          </div>
        )}

        <div className="flex flex-col my-[20px] md:my-[0px]">
          <div>
            <h2 className="text-center text-[#000000] font-bold text-[18px]">Envie sua mensagem</h2>
          </div>
          <div className="flex flex-col mt-[10px] ">
            <div className="mt-5 w-full">
              <p className="font-medium">Nome Completo</p>
              <input className="p-1 w-full border-solid border-1 border-gray-500 rounded-lg" placeholder="Nome Completo" type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
            </div>
            <div className="mt-5 w-full">
              <p className="font-medium">Mensagem</p>
              <textarea className="w-full h-30 pl-1 border-solid border-1 border-gray-500 rounded-lg md:h-40 xl:h-50" value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
            </div>
          </div>
          <button onClick={handleEmail} className="flex w-[294px] h-[54px] md:w-[480px] md:h-[64px] justify-center items-center p-2 mt-5 rounded-lg bg-button-form self-center border-[1px] border-border-button-form cursor-pointer motion-safe:hover:scale-105 transition">Enviar Mensagem</button>
        </div>
      </div>

      {/* Container Contact */}
      <div className="flex flex-col w-[390px] h-[450px] md:h-[530px] md:m-[70px] border-[2px] border-[#F5F5F5] my-[30px] rounded-[15px] md:w-[576px]">
        <div className="flex mt-[20px] w-full flex-row gap-[30px] justify-center md:gap-[100px]">
          <div>
            <div className="flex justify-center">
              <Image src={IconEmail} alt="Icon" className="w-[34px] h-[34px] md:w-[45px] md:h-[45px]" />
            </div>
            <div>
              <div>
                <h2 className="text-[#F5F5F5] text-[14px] text-center font-bold  md:text-[18px]">Entre em contato via E-mail</h2>
              </div>
              <p className="text-[#D5D5D5] text-[14px] text-center">igor.victorcontato@gmail.com</p>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <Image src={IconPhone} alt="Icon" className="w-[34px] h-[34px] md:w-[45px] md:h-[45px]" />
            </div>
            <div>
              <div>
                <h2 className="text-[#F5F5F5] text-[14px] text-center font-bold  md:text-[18px]">Telefone</h2>
              </div>
              <p className="text-[#D5D5D5] text-[14px] text-center">(41) 98744-6352</p>
            </div>
          </div>
        </div>

        {/* Availability */}
        <div className="flex w-full justify-center mt-[70px]">
          <div>
            <h2 className="text-[#F5F5F5] text-[14px] text-center font-bold  md:text-[18px]">Disponibilidade para contato:</h2>
            <p className="text-[#D5D5D5] text-[14px] text-center">Segunda - Sexta, 8:00 às 18:00</p>
          </div>
        </div>
        <hr className="flex mx-auto border-[1.5px] border-[#F5F5F5] w-[90%] mt-[35px] mb-[20px]" />
        <h2 className="text-[#F5F5F5] text-[14px] text-center font-extrabold  mb-[20px] md:text-[18px]">Acompanhe meus projetos e perfil <br />profissional</h2>

        {/* Social media */}
        <div className="flex justify-center">
          <Link href="https://www.linkedin.com/in/igor-victor21/" target="_blank" rel="noopener noreferrer" className="mr-[32px]">
            <Image src={IconLinkedin} alt="linkedin" className="w-[34px] h-[34px] md:w-[45px] md:h-[45px]" />
          </Link>
          <Link href="https://github.com/Igor-Victor21" target="_blank" rel="noopener noreferrer">
            <Image src={IconGithub} alt="Github" className="w-[34px] h-[34px] md:w-[45px] md:h-[45px]" />
          </Link>
        </div>

        {/* Button Contact */}
        <div className="flex mx-auto mt-[20px] p-2 rounded-[50px] bg-[#F5F5F5] w-[180px] h-[35px] items-center justify-center md:h-[40px]">
          <button onClick={handleZap} className="flex gap-1 text-[#121212] font-medium cursor-pointer hover:tracking-wide duration-200">COMEÇAR CHAT <Image src={IconWhatsApp} alt="IconWhatsApp" width={24} height={24} /></button>
        </div>

      </div>


    </section>

  );
}