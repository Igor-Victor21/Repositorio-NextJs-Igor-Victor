"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation"

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

  return (
    <section className="flex flex-col items-center p-[30px] md:flex-row md:justify-center">

      <div className="flex flex-col p-5 w-[390px] h-[450px] md:h-[530px] md:m-[70px] bg-white rounded-[15px] my-[30px] md:w-[576px]">
        {showToast && (
          <div className="flex flex-col absolute w-[80vw] md:w-[40vw] xl:w-[20vw] self-center md:self-auto top-[5%] bg-gray-500 p-4 z-40 rounded-lg">
            <button onClick={() => setShowToast(false)} className="text-gray-300 hover:text-white cursor-pointer font-bold self-end">X</button>
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

      <div className="flex w-[390px] h-[450px] md:h-[530px] md:m-[70px] border-[2px] border-[#F5F5F5] my-[30px] rounded-[15px] md:w-[576px]">
        
      </div>
    </section>

  );
}