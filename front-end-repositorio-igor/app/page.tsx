import Navbar from "./components/nav";

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="inicio" className=" scroll-mt-[87px] w-screen h-screen bg-pages-gradient">
        {/* <h1 className="mt-15 bg-transparent">teste section 1</h1>  */}
      </section>

      <section id="projetos" className=" scroll-mt-[87px] w-screen h-screen bg-pages-gradient">
        {/* Título página */}
        <div className="flex items-center justify-center w-screen h-[87px] border-b-3 border-[#F5F5F5] border-t-3 border-[#F5F5F5]">
          <h1 className="text-[#F5F5F5] text-center font-bold text-[40px] border-b-2 border-[#F5F5F5]">Projetos</h1>
        </div>
      </section>

      <section id="sobreMim" className=" scroll-mt-[87px] w-screen h-screen bg-pages-gradient">
        {/* Título página */}
        <div className="flex items-center justify-center w-screen h-[87px] border-b-3 border-[#F5F5F5] border-t-3 border-[#F5F5F5]">
          <h1 className="text-[#F5F5F5] text-center font-bold text-[40px] border-b-2 border-[#F5F5F5]">Sobre Mim</h1>
        </div>
      </section>

      <section id="tecnologias" className=" scroll-mt-[87px] w-screen h-screen bg-pages-gradient">
        {/* Título página */}
        <div className="flex items-center justify-center w-screen h-[87px] border-b-3 border-[#F5F5F5] border-t-3 border-[#F5F5F5]">
          <h1 className="text-[#F5F5F5] text-center font-bold text-[40px] border-b-2 border-[#F5F5F5]">Tecnologias</h1>
        </div>
      </section>

      <section id="servicos" className=" scroll-mt-[87px] w-screen h-screen bg-pages-gradient">
        {/* Título página */}
        <div className="flex items-center justify-center w-screen h-[87px] border-b-3 border-[#F5F5F5] border-t-3 border-[#F5F5F5]">
          <h1 className="text-[#F5F5F5] text-center font-bold text-[40px] border-b-2 border-[#F5F5F5]">Serviços</h1>
        </div>
      </section>

      <section id="contato" className=" scroll-mt-[87px] w-screen h-screen bg-pages-gradient">
        {/* Título página */}
        <div className="flex items-center justify-center w-screen h-[87px] border-b-3 border-[#F5F5F5] border-t-3 border-[#F5F5F5]">
          <h1 className="text-[#F5F5F5] text-center font-bold text-[40px] border-b-2 border-[#F5F5F5]">Contato</h1>
        </div>
      </section>

    </>
  );
}
