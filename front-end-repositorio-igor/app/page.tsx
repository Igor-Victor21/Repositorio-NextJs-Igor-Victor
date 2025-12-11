import Navbar from "./components/nav";

export default function Home() {
  return (
   <>
   <Navbar/>
    <section id="inicio" className=" scroll-mt-[87px] w-screen h-screen bg-home-gradient">
     {/* <h1 className="mt-15 bg-transparent">teste section 1</h1>  */}
    </section>
    
    <section id="projetos" className=" scroll-mt-[87px] w-screen h-screen bg-gray-500">
     <h1>teste section 2</h1> 
    </section>
    
    <section id="sobreMim" className=" scroll-mt-[87px] w-screen h-screen bg-blue-500">
     <h1>teste section 3</h1> 
    </section>
    
    <section id="tecnologias" className=" scroll-mt-[87px] w-screen h-screen bg-green-500">
     <h1>teste section 4</h1> 
    </section>
    
    <section id="servicos" className=" scroll-mt-[87px] w-screen h-screen bg-pink-500">
     <h1>teste section 5</h1> 
    </section>
    
    <section id="contato" className=" scroll-mt-[87px] w-screen h-screen bg-yellow-500">
     <h1>teste section 6</h1> 
    </section>
    
   </>
  );
}
