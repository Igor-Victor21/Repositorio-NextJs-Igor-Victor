"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"

import IconLinkedin from "./assets/IconLinkedin.png"
import IconGithub from "./assets/IconGithub.png"
import IconWhatsApp from "./assets/IconWhatsapp.png"
import IconCurriculo from "./assets/IconCurriculo.png"
import IconDeveloper from "./assets/IconDeveloper.png"
import EcommerceImage from "./assets/E-commerceProject.png"
import ProjectAdmin from "./assets/ProjectAdmin.png"
import ProjectMobile from "./assets/ProjectMobile.png"

import Navbar from "./components/nav";
import ButtonProject from "./components/buttonsProject"
import ContainerTec from "./components/containerTec"
import ContainerService from "./components/containerService"
import FooterContact from "./components/footerContact";

export default function Home() {

  const router = useRouter()

  const wppNumber = "5541987446352"

  const handleZap = () => {
    const URLzap = `https://api.whatsapp.com/send?phone=${wppNumber}`
    window.open(URLzap, "_blank")
  }

  return (
    <>
      <Navbar />






      {/* Container Text */}
      <section id="inicio" className="scroll-mt-[87px] flex w-full h-full min-h-screen bg-home-gradient md:items-center">
        <div className="flex flex-col w-full h-auto px-4 my-[143px] bg-transparent md:max-w-[1123px] md:mx-[101px] md:my-[143px] md:px-0">
          <p className="text-[#D5D5D5] text-[20px]">
            Desenvolvo soluções <span className="font-bold text-[#F5F5F5]">web e mobile</span> que transformam ideias em <span className="font-bold text-[#F5F5F5]">produtos reais.</span>
          </p>

          <br />

          <p className="text-[#D5D5D5]">
            Olá, prazer! Me chamo <br />
          </p>

          <p className="text-[#F5F5F5] text-[18px]">
            <span className="font-bold">Igor Victor da Silva</span>
          </p>

          <br />
          <br />

          <p className="text-[#F5F5F5] text-[26px]">
            <span className="font-bold">Desenvolvedor Full-Stack</span>
          </p>

          <br />
          <br />

          <p className="text-[#D5D5D5] text-[18px]">
            Atuo como Desenvolvedor Full Stack focado em <span className="font-bold text-[#F5F5F5]">Node.js, Express, Next.js e React</span>. Crio aplicações
            completas para web, desktop e mobile, estruturando backend, banco de dados e a camada
            de segurança necessária para garantir operações online com confiança.<br /><br />
            Tenho experiência com SQL Server, Firebase, APIs REST, Git e boas práticas de versionamento. Além
            de conhecimento sólido em Java para backend.
          </p>
          <br />
          <br />

          {/* Container Buttons */}
          <div className="flex flex-col gap-[40px] md:mt-[20px] md:flex-row">
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
      <section id="projetos" className=" scroll-mt-[87px] w-full h-full min-h-screen bg-pages-gradient">

        {/* Title page */}
        <div className="flex items-center justify-center w-full h-[87px] border-b-3 border-[#F5F5F5] border-t-3 border-[#F5F5F5]">
          <h1 className="text-[#F5F5F5] text-center font-bold text-[40px] border-b-2 border-[#F5F5F5]">Projetos</h1>
        </div>

        {/* Container Project Cards  */}
        <div className="flex flex-col items-center justify-center mt-[20px] md:flex-row">
          {/* Cards 01 */}
          <div className="flex flex-col items-center w-[350px] h-[600px] md:w-[450px] md:h-[648px] bg-[#3A3A3A] m-[15px] rounded-[16px] ">
            <div className="flex items-center justify-center flex-col my-[20px] md:my-0">
              <div className="m-[15px]">
                <h2 className="text-center text-[#F5F5F5] font-bold text-[18px]">E-COMMERCE</h2>
                <span className="text-[#F5F5F5] border-b-[1.2px] border-[#F5F5F5] text-[14px]">PROJETO PARA VC BRINQUEDOS ESPUMADOS</span>
              </div>
              {/* Image */}
              <Image src={EcommerceImage} alt="ImageProject" className="w-[95%] ml-[15px]" />
              <hr className="border-[1.5px] border-[#F5F5F5] w-[90%] mt-[20px]" />
              <div className="flex flex-col mt[20px] mb-[20px] h-[151px]">
                <h2 className="text-[18px] text-[#F5F5F5] text-center font-bold mt-[20px] mb-[20px]">Tecnologias Utilizadas</h2>
                <li className="text-[14px] font-normal text-[#FFFFFF]">Next.Js & Tailwind</li>
                <li className="text-[14px] font-normal text-[#FFFFFF]">API Node.Js & Express</li>
                <li className="text-[14px] font-normal text-[#FFFFFF]">Banco de Dados Firebase</li>
              </div>
              <ButtonProject />
            </div>
          </div>

          {/* Cards 02 */}
          <div className="flex flex-col items-center w-[350px] h-[600px] md:w-[450px] md:h-[648px] bg-[#3A3A3A] m-[15px] rounded-[16px] ">
            <div className="flex items-center justify-center flex-col my-[20px] md:my-0">
              <div className="m-[15px]">
                <h2 className="text-center text-[#F5F5F5] font-bold text-[18px]">PAINEL ADMINISTRATIVO</h2>
                <span className="text-[#F5F5F5] border-b-[1.2px] border-[#F5F5F5] text-[14px]">PROJETO PARA VC BRINQUEDOS ESPUMADOS</span>
              </div>
              {/* Image */}
              <Image src={ProjectAdmin} alt="ImageProject" className="w-[95%] ml-[15px]" />
              <hr className="border-[1.5px] border-[#F5F5F5] w-[90%] mt-[20px]" />
              <div className="flex flex-col mt[20px] mb-[20px] md:h-[151px]">
                <h2 className="text-[18px] text-[#F5F5F5] text-center font-bold mt-[20px] mb-[20px]">Tecnologias Utilizadas</h2>
                <li className="text-[14px] font-normal text-[#FFFFFF]">Vite, React & CSS3</li>
                <li className="text-[14px] font-normal text-[#FFFFFF]">API Node.Js & Express</li>
                <li className="text-[14px] font-normal text-[#FFFFFF]">Autentificação JWT</li>
                <li className="text-[14px] font-normal text-[#FFFFFF]">Banco de Dados Firebase</li>
              </div>
              <ButtonProject />
            </div>
          </div>

          {/* Cards 03 */}
          <div className="flex flex-col items-center w-[350px] h-[600px] md:w-[450px] md:h-[648px] bg-[#3A3A3A] m-[15px] rounded-[16px] ">
            <div className="flex items-center justify-center flex-col my-[20px] md:my-0">
              <div className="m-[15px]">
                <h2 className="text-center text-[#F5F5F5] font-bold text-[18px]">APP INTERNO - MOBILE</h2>
                <span className="text-[#F5F5F5] border-b-[1.2px] border-[#F5F5F5] text-[14px]">PROJETO PARA VC BRINQUEDOS ESPUMADOS</span>
              </div>
              {/* Image */}
              <Image src={ProjectMobile} alt="ImageProject" className="w-[95%] ml-[15px]" />
              <hr className="border-[1.5px] border-[#F5F5F5] w-[90%] mt-[20px]" />
              <div className="flex flex-col mt[20px] mb-[20px]">
                <h2 className="text-[18px] text-[#F5F5F5] text-center font-bold mt-[20px] mb-[20px]">Tecnologias Utilizadas</h2>
                <li className="text-[14px] font-normal text-[#FFFFFF]">Flutter & Dart</li>
                <li className="text-[14px] font-normal text-[#FFFFFF]">API Node.Js & Express</li>
                <li className="text-[14px] font-normal text-[#FFFFFF]">Autentificação JWT</li>
                <li className="text-[14px] font-normal text-[#FFFFFF]">Banco de Dados MongoDB</li>
              </div>
              <ButtonProject />
            </div>
          </div>
        </div>



        {/* Container button see more */}
        
        {/* <div className="flex justify-end items-end h-full relative">
          <button onClick={() => router.push("./projects")} className="text-[#F5F5F5] text-[18px] font-semibold border-b-[1.2px] border-[#F5F5F5] m-[20px] cursor-pointer hover:tracking-wide duration-200">VER MAIS {">>>"}</button>
        </div> */}



      </section>






      <section id="sobreMim" className=" scroll-mt-[87px] w-full h-full min-h-screen bg-pages-gradient">
        {/* Título página */}
        <div className="flex items-center justify-center w-full h-[87px] border-b-3 border-[#F5F5F5] border-t-3 border-[#F5F5F5]">
          <h1 className="text-[#F5F5F5] text-center font-bold text-[40px] border-b-2 border-[#F5F5F5]">Sobre Mim</h1>
        </div>

        {/* Container Text */}
        <div className="flex flex-col md:w-full md:h-full items-center">
          {/* Area Text*/}
          <div className="flex flex-col p-4 justify-center m-[20px]">
            <p className="text-[#D5D5D5] indent-4 font-normal text-[18px] leading-[160%]" >
              Olá! Sou <span className="font-semibold text-[#F5F5F5]">Igor Victor da Silva</span>, <span className="font-bold text-[#F5F5F5]">Desenvolvedor Full Stack</span> formado em 2025 em Análise e <br className="hidden lg:block" />
              Desenvolvimento de Sistemas pelo SENAI. Atuo no desenvolvimento de aplicações completas <br className="hidden lg:block" />
              para web, desktop e mobile, trabalhando tanto no <span className="font-bold text-[#F5F5F5]">Backend</span> quanto no <span className="font-bold text-[#F5F5F5]">Frontend</span> com
              <span className="font-extrabold text-[#F5F5F5]"> Node.js,<br className="hidden lg:block" />
                Express, React, Next.js e Flutter.</span> Também possuo conhecimento sólido em Java e experiência <br className="hidden lg:block" />
              com bancos de dados como <span className="font-bold text-[#F5F5F5]">SQL Server, Firebase e MongoDB.</span>
              <br /><br />
              <span className="font-bold text-[#F5F5F5]">Soluções que desenvolvo:</span>
            </p>
            <ul className="list-disc pl-8 text-[#D5D5D5] text-[18px] leading-[160%]">
              <li>CRUDs eficientes com persistência real de dados</li>
              <li>Autenticação segura (JWT + proteção HttpOnly)</li>
              <li>Integração com serviços externos (Google Auth)</li>
              <li>Painéis administrativos completos para operação</li>
              <li>APIs REST padronizadas e documentadas</li>
              <li>Deploy em infraestrutura na nuvem</li>
              <li>Boas práticas, escalabilidade e monitoramento contínuo</li>
            </ul>
            <br /><br />
            <p className="text-[#D5D5D5] indent-4 font-normal text-[18px] leading-[160%]">
              Já possuo <span className="text-[#F5F5F5] font-bold">experiência em projetos reais,</span> Aplicando com <span className="text-[#F5F5F5] font-bold">boas práticas,</span> foco em <br className="hidden lg:block" />
              <span className="text-[#F5F5F5] font-bold">performance</span> e <span className="text-[#F5F5F5] font-bold">escalabilidade</span> para entregar soluções estáveis e de alto valor para o negócio.
            </p>
            <br /><br />
            <p className="text-[#D5D5D5] indent-4 font-normal text-[18px] leading-[160%]">
              Tenho facilidade em <span className="text-[#F5F5F5] font-bold">colaboração, comunicação</span> e <span className="text-[#F5F5F5] font-bold">trabalho em equipe,</span> acreditando que os <br className="hidden lg:block" />
              melhores produtos nascem da união de ideias e de uma cultura de aprendizado. Sou movido <br className="hidden lg:block" />
              pela busca constante de conhecimento e adoro transformar desafios em crescimento tanto <br className="hidden lg:block" />
              para mim quanto para o produto que estou construindo.
            </p>
            <br /><br />
            <p className="text-[#D5D5D5] indent-4 font-normal text-[18px] leading-[160%]">
              Quero aplicar <span className="text-[#F5F5F5] font-bold">meus conhecimentos</span> e minha <span className="text-[#F5F5F5] font-bold">capacidade de lidar com pessoas</span> para <br className="hidden lg:block" />
              proporcionar <span className="text-[#F5F5F5] font-bold">o melhor atendimento</span> aos seus clientes.<br className="hidden lg:block" />
              <span className="text-[#F5F5F5] font-bold"></span>
            </p>
          </div>
        </div>
      </section>






      <section id="tecnologias" className="scroll-mt-[87px] w-full h-full min-h-screen bg-pages-gradient">
        {/* Título página */}
        <div className="flex items-center justify-center w-full h-[87px] border-b-3 border-[#F5F5F5] border-t-3 border-[#F5F5F5]">
          <h1 className="text-[#F5F5F5] text-center font-bold text-[40px] border-b-2 border-[#F5F5F5]">Tecnologias</h1>
        </div>
        <ContainerTec />
      </section>






      <section id="servicos" className=" scroll-mt-[87px] w-full h-full min-h-screen bg-pages-gradient">
        {/* Título página */}
        <div className="flex items-center justify-center w-full h-[87px] border-b-3 border-[#F5F5F5] border-t-3 border-[#F5F5F5]">
          <h1 className="text-[#F5F5F5] text-center font-bold text-[40px] border-b-2 border-[#F5F5F5]">Serviços</h1>
        </div>
        <ContainerService />
      </section>






      <section id="contato" className=" scroll-mt-[87px] w-full h-full min-h-screen bg-pages-gradient">
        {/* Título página */}
        <div className="flex items-center justify-center w-full h-[87px] border-b-3 border-[#F5F5F5] border-t-3 border-[#F5F5F5]">
          <h1 className="text-[#F5F5F5] text-center font-bold text-[40px] border-b-2 border-[#F5F5F5]">Contato</h1>
        </div>
        <FooterContact />
      </section>

    </>
  );
}
