"use client";

import Image from "next/image";
import Link from "next/link";


import IconLinkedin from "./assets/IconLinkedin.png"
import IconGithub from "./assets/IconGithub.png"
import IconWhatsApp from "./assets/IconWhatsapp.png"
import IconCurriculo from "./assets/IconCurriculo.png"
import IconDeveloper from "./assets/IconDeveloper.png"
import EcommerceImage from "./assets/E-commerceProject.png"




import Navbar from "./components/nav";

export default function Home() {

  const wppNumber = "5541987446352"

  const handleZap = () => {
    const URLzap = `https://api.whatsapp.com/send?phone=${wppNumber}`
    window.open(URLzap, "_blank")
  }

  return (
    <>
      <Navbar />

      {/* Container Text */}
      <section id="inicio" className="scroll-mt-[87px] flex w-full h-full min-h-screen bg-home-gradient">
        <div className="flex flex-col w-full h-auto px-4 my-[143px] bg-transparent md:max-w-[1123px] md:mx-[101px] md:my-[143px] md:px-0">
          <p className="text-[#F5F5F5] text-[20px]">
            Desenvolvo soluções <strong>web e mobile</strong> que transformam ideias em produtos reais.
          </p>

          <br />

          <p className="text-[#C5C5C5]">
            Olá, prazer! Me chamo <br />
          </p>

          <p className="text-[#F5F5F5] text-[18px]">
            <strong>Igor Victor da Silva</strong>
          </p>

          <br />
          <br />

          <p className="text-[#F5F5F5] text-[26px]">
            <strong>Desenvolvedor Full-Stack</strong>
          </p>

          <br />
          <br />

          <p className="text-[#F5F5F5] text-[18px]">
            Atuo como Desenvolvedor Full Stack focado em <strong>Node.js, Express, Next.js e React</strong>. Crio aplicações
            completas para web, desktop e mobile, estruturando backend, banco de dados e a camada
            de segurança necessária para garantir operações online com confiança.<br /><br />
            Tenho experiência com SQL Server, Firebase, APIs REST, Git e boas práticas de versionamento. Além
            de conhecimento sólido em Java para backend.
          </p>
          <br />
          <br />

          {/* Container Buttons */}
          <div className="flex flex-col gap-[40px] md:flex-row">
            <div className="flex p-2 rounded-[50px] bg-[#F5F5F5] w-[252px] h-[56px] items-center justify-center">
              <button onClick={handleZap} className="flex gap-1 text-[#121212] font-medium cursor-pointer hover:tracking-wide duration-200">VAMOS CONVERSAR <Image src={IconWhatsApp} alt="IconWhatsApp" width={24} height={24} /></button>
            </div>
            <div className="flex p-2 rounded-[50px] bg-[#F5F5F5] w-[231px] h-[56px] items-center justify-center ">
              <button onClick={() => window.open("/Curriculo-Igor-Victor.pdf", "_blank")} className="flex gap-1 text-[#121212] font-medium cursor-pointer hover:tracking-wide duration-200">VER CURRÍCULO <Image src={IconCurriculo} alt="IconWhatsApp" width={24} height={24} /></button>
            </div>

            {/* Social media */}
            <div className="flex md:bottom-[15px] md:right-[20px] md:absolute">
              <Link href="https://www.linkedin.com/in/igor-victor21/" target="_blank" rel="noopener noreferrer" className="mr-[32px]">
                <Image src={IconLinkedin} alt="linkedin" width={45} height={45} />
              </Link>
              <Link href="https://github.com/Igor-Victor21" target="_blank" rel="noopener noreferrer">
                <Image src={IconGithub} alt="Github" width={45} height={45} />
              </Link>
            </div>
          </div>
        </div>

        {/* Icon dev */}
        <div className="md:float-left md:mr-57 md:w-[401.47px] md:h-[348.65px]">
          <Image src={IconDeveloper} alt="Developer" className="hidden md:block md:absolute md:top-[183px] object-contain" />
        </div>
      </section>

      {/* Section Project */}
      <section id="projetos" className=" scroll-mt-[87px] w-full h-full bg-pages-gradient">

        {/* Title page */}
        <div className="flex items-center justify-center w-full h-[87px] border-b-3 border-[#F5F5F5] border-t-3 border-[#F5F5F5]">
          <h1 className="text-[#F5F5F5] text-center font-bold text-[40px] border-b-2 border-[#F5F5F5]">Projetos</h1>
        </div>

        {/* Container Project Cards  */}
        <div className="flex flex-col items-center justify-center mt-[20px] md:flex-row">
          {/* Cards 01 */}
          <div className="flex flex-col items-center w-[350px] h-[648px] bg-[#3A3A3A] m-[15px] rounded-[16px] ">
            <div className="m-[15px]">
              <h2 className="text-center text-[#F5F5F5] font-bold text-[18px]">E-COMMERCE</h2>
              <span className="text-[#F5F5F5] border-b-[1.2px] border-[#F5F5F5] text-[14px]">PROJETO PARA VC BRINQUEDOS ESPUMADOS</span>
            </div>
            {/* Image */}
              <Image src={EcommerceImage} alt="ImageProject" className="w-[95%] ml-[15px]"/>
            <hr className="border-[1.5px] border-[#F5F5F5] w-[90%]"/>
          </div>

          {/* Cards 02 */}
          <div className="flex flex-col items-center w-[350px] h-[648px] bg-[#3A3A3A] m-[15px] rounded-[16px] ">
            <div className="m-[15px]">
              <h2 className="text-center text-[#F5F5F5] font-bold text-[18px]">PAINEL ADMINISTRATIVO</h2>
              <span className="text-[#F5F5F5] border-b-[1.2px] border-[#F5F5F5] text-[14px]">PROJETO PARA VC BRINQUEDOS ESPUMADOS</span>
            </div>
            {/* Image */}
              <Image src={EcommerceImage} alt="ImageProject" className="w-[95%] ml-[15px]"/>
            <hr className="border-[1.5px] border-[#F5F5F5] w-[90%]"/>
          </div>

          {/* Cards 03 */}
          <div className="flex flex-col items-center w-[350px] h-[648px] bg-[#3A3A3A] m-[15px] rounded-[16px] ">
            <div className="m-[15px]">
              <h2 className="text-center text-[#F5F5F5] font-bold text-[18px]">APP INTERNO - MOBILE</h2>
              <span className="text-[#F5F5F5] border-b-[1.2px] border-[#F5F5F5] text-[14px]">PROJETO PARA VC BRINQUEDOS ESPUMADOS</span>
            </div>
            {/* Image */}
              <Image src={EcommerceImage} alt="ImageProject" className="w-[95%] ml-[15px]"/>
            <hr className="border-[1.5px] border-[#F5F5F5] w-[90%]"/>
          </div>
        </div>

        {/* Container button see more */}
        <div>
          <button>VER MAIS</button>
        </div>
      </section>

      <section id="sobreMim" className=" scroll-mt-[87px] w-full h-full bg-pages-gradient">
        {/* Título página */}
        <div className="flex items-center justify-center w-full h-[87px] border-b-3 border-[#F5F5F5] border-t-3 border-[#F5F5F5]">
          <h1 className="text-[#F5F5F5] text-center font-bold text-[40px] border-b-2 border-[#F5F5F5]">Sobre Mim</h1>
        </div>
      </section>

      <section id="tecnologias" className=" scroll-mt-[87px] w-full h-full bg-pages-gradient">
        {/* Título página */}
        <div className="flex items-center justify-center w-full h-[87px] border-b-3 border-[#F5F5F5] border-t-3 border-[#F5F5F5]">
          <h1 className="text-[#F5F5F5] text-center font-bold text-[40px] border-b-2 border-[#F5F5F5]">Tecnologias</h1>
        </div>
      </section>

      <section id="servicos" className=" scroll-mt-[87px] w-full h-full bg-pages-gradient">
        {/* Título página */}
        <div className="flex items-center justify-center w-full h-[87px] border-b-3 border-[#F5F5F5] border-t-3 border-[#F5F5F5]">
          <h1 className="text-[#F5F5F5] text-center font-bold text-[40px] border-b-2 border-[#F5F5F5]">Serviços</h1>
        </div>
      </section>

      <section id="contato" className=" scroll-mt-[87px] w-full h-full bg-pages-gradient">
        {/* Título página */}
        <div className="flex items-center justify-center w-full h-[87px] border-b-3 border-[#F5F5F5] border-t-3 border-[#F5F5F5]">
          <h1 className="text-[#F5F5F5] text-center font-bold text-[40px] border-b-2 border-[#F5F5F5]">Contato</h1>
        </div>
      </section>

    </>
  );
}
