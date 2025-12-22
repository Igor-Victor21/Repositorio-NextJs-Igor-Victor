"use cliente"

import Image from "next/image";

import IconNextJs from "../assets/IconNext.js.png"
import IconReact from "../assets/IconReact.png"
import IconFlutter from "../assets/IconFlutter.png"
import IconTypeScript from "../assets/IconTypeScript.png"
import IconNodeJs from "../assets/IconNode.js.png"
import IconSQLServer from "../assets/IconSqlServer.png"


export default function ContainerTec() {

    return (
        <section className="pb-5">
            <div className="flex items-center justify-center flex-col mx-auto md:mt-[5%] md:w-[1104px] md:h-[539px]">
                <div className="md:flex md:flex-row gap-[27px] md:m-[15px]">
                    <div className="w-[350px] h-[250px] mb-[5px] border-2 border-[#D9D9D9] rounded-[15px] m-[20px]">
                        <div className="m-[10px]">
                            <h2 className="text-[#F5F5F5] text-[18px] font-bold text-center">NEXT.JS</h2>
                        </div>
                        <div className="flex justify-center">
                            <Image src={IconNextJs} alt="Icon" width={80} height={80} />
                        </div>
                        <div className="flex justify-center">
                            <hr className="border-[1px] border-[#F5F5F5] w-[90%] m-[15px]" />
                        </div>
                        <div>
                            <p className="text-[#F5F5F5] text-[14px] font-normal text-center p-[4px]">Framework do React para criar aplicações rápidas, com otimização para motores de busca, rotas e renderização no servidor.</p>
                        </div>

                    </div>
                    <div className="w-[350px] h-[250px] mb-[5px] border-2 border-[#D9D9D9] rounded-[15px] m-[20px]">
                        <div className="m-[10px]">
                            <h2 className="text-[#F5F5F5] text-[18px] font-bold text-center">REACT</h2>
                        </div>
                        <div className="flex justify-center">
                            <Image src={IconReact} alt="Icon" width={80} height={80} />
                        </div>
                        <div className="flex justify-center">
                            <hr className="border-[1px] border-[#F5F5F5] w-[90%] m-[15px]" />
                        </div>
                        <div>
                            <p className="text-[#F5F5F5] text-[14px] font-normal text-center p-[4px]">Biblioteca para interfaces modernas, usando componentes reutilizáveis e alto desempenho.</p>
                        </div>

                    </div>
                    <div className="w-[350px] h-[250px] mb-[5px] border-2 border-[#D9D9D9] rounded-[15px] m-[20px]">
                        <div className="m-[10px]">
                            <h2 className="text-[#F5F5F5] text-[18px] font-bold text-center">FLUTTER</h2>
                        </div>
                        <div className="flex justify-center">
                            <Image src={IconFlutter} alt="Icon" width={80} height={80} />
                        </div>
                        <div className="flex justify-center">
                            <hr className="border-[1px] border-[#F5F5F5] w-[90%] m-[15px]" />
                        </div>
                        <div>
                            <p className="text-[#F5F5F5] text-[14px] font-normal text-center p-[4px]">Framework para desenvolver apps Android e iOS com excelente performance usando apenas um código.</p>
                        </div>


                    </div>
                </div>
                <div className="md:flex md:flex-row gap-[27px] md:m-[15px]">
                    <div className="w-[350px] h-[250px] mb-[5px] border-2 border-[#D9D9D9] rounded-[15px] m-[20px]">
                        <div className="m-[10px]">
                            <h2 className="text-[#F5F5F5] text-[18px] font-bold text-center">TYPESCRIPT</h2>
                        </div>
                        <div className="flex justify-center">
                            <Image src={IconTypeScript} alt="Icon" width={80} height={80} />
                        </div>
                        <div className="flex justify-center">
                            <hr className="border-[1px] border-[#F5F5F5] w-[90%] m-[15px]" />
                        </div>
                        <div>
                            <p className="text-[#F5F5F5] text-[14px] font-normal text-center p-[4px]">Extensão do JavaScript que adiciona tipos ao código, ajudando a evitar erros e deixando o desenvolvimento mais organizado.</p>
                        </div>

                    </div>
                    <div className="w-[350px] h-[250px] mb-[5px] border-2 border-[#D9D9D9] rounded-[15px] m-[20px]">
                        <div className="m-[10px]">
                            <h2 className="text-[#F5F5F5] text-[18px] font-bold text-center">NODE.JS</h2>
                        </div>
                        <div className="flex justify-center">
                            <Image src={IconNodeJs} alt="Icon" width={80} height={80} />
                        </div>
                        <div className="flex justify-center">
                            <hr className="border-[1px] border-[#F5F5F5] w-[90%] m-[15px]" />
                        </div>
                        <div>
                            <p className="text-[#F5F5F5] text-[14px] font-normal text-center p-[4px]">Executa JavaScript ou TypeScript no servidor para criar APIs rápidas e seguras com acesso ao banco de dados.</p>
                        </div>

                    </div>
                    <div className="w-[350px] h-[250px] mb-[5px] border-2 border-[#D9D9D9] rounded-[15px] m-[20px]">
                        <div className="m-[10px]">
                            <h2 className="text-[#F5F5F5] text-[18px] font-bold text-center">SQL Server</h2>
                        </div>
                        <div className="flex justify-center">
                            <Image src={IconSQLServer} alt="Icon" width={80} height={80} />
                        </div>
                        <div className="flex justify-center">
                            <hr className="border-[1px] border-[#F5F5F5] w-[90%] m-[15px]" />
                        </div>
                        <div>
                            <p className="text-[#F5F5F5] text-[14px] font-normal text-center p-[4px]">Banco de dados relacional para armazenar, consultar e gerenciar informações com segurança e rapidez.</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}