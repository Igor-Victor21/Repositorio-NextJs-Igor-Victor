"use client";

import Image from "next/image";

import IconTools from "../assets/IconTools.png"
import IconWeb from "../assets/IconWeb.png"
import IconEcommerce from "../assets/IconEcommerce.png"
import IconAdmin from "../assets/IconAdmin.png"
import IconAdminEcommerce from "../assets/IconEcommerce+Admin.png"
import IconMobile from "../assets/IconMobile.png"

import BtnSolicitarServico from "./btnRequestService"


export default function ContainerService() {

    return (
        <section className="pb-5">
            <div className="flex items-center justify-center flex-col mx-auto md:mt-[5%] md:w-[1104px] md:h-[539px]">
                <div className="md:flex md:flex-row gap-[27px] md:m-[15px]">
                    <div className="w-[350px] h-[300px] mb-[5px] border-2 border-[#D9D9D9] rounded-[15px] m-[20px]">
                        <div className="m-[10px]">
                            <h2 className="text-[#F5F5F5] text-[18px] font-bold text-center">MANUTENÇÃO DE SISTEMAS</h2>
                        </div>
                        <div className="flex justify-center">
                            <Image src={IconTools} alt="Icon" width={80} height={80} />
                        </div>
                        <div className="flex justify-center">
                            <hr className="border-[1px] border-[#F5F5F5] w-[90%] m-[15px]" />
                        </div>
                        <div className="flex h-[75px]">
                            <p className="text-[#F5F5F5] text-[14px] font-normal text-center p-[4px]">Manutenção, correções e otimizações de sistemas para garantir desempenho, estabilidade e segurança.</p>
                        </div>
                        <BtnSolicitarServico service="MANUTENÇÃO DE SISTEMAS"/>
                    </div>
                    <div className="w-[350px] h-[300px] mb-[5px] border-2 border-[#D9D9D9] rounded-[15px] m-[20px]">
                        <div className="m-[10px]">
                            <h2 className="text-[#F5F5F5] text-[18px] font-bold text-center">SITES E BLOGS</h2>
                        </div>
                        <div className="flex justify-center">
                            <Image src={IconWeb} alt="Icon" width={80} height={80} />
                        </div>
                        <div className="flex justify-center">
                            <hr className="border-[1px] border-[#F5F5F5] w-[90%] m-[15px]" />
                        </div>
                        <div className="flex h-[75px]">
                            <p className="text-[#F5F5F5] text-[14px] font-normal text-center p-[4px]">Páginas rápidas, responsivas e profissionais para apresentar seu negócio com credibilidade.</p>
                        </div>
                        <BtnSolicitarServico service="SITES E BLOGS"/>
                    </div>
                    <div className="w-[350px] h-[300px] mb-[5px] border-2 border-[#D9D9D9] rounded-[15px] m-[20px]">
                        <div className="m-[10px]">
                            <h2 className="text-[#F5F5F5] text-[18px] font-bold text-center">E-COMMERCE</h2>
                        </div>
                        <div className="flex justify-center">
                            <Image src={IconEcommerce} alt="Icon" width={80} height={80} />
                        </div>
                        <div className="flex justify-center">
                            <hr className="border-[1px] border-[#F5F5F5] w-[90%] m-[15px]" />
                        </div>
                        <div className="flex h-[75px]">
                            <p className="text-[#F5F5F5] text-[14px] font-normal text-center p-[4px]">Loja moderna com carrinho rápido, pagamentos seguros e gestão fácil de pedidos.</p>
                        </div>
                        <BtnSolicitarServico service="E-COMMERCE"/>

                    </div>
                </div>
                <div className="md:flex md:flex-row gap-[27px] md:m-[15px]">
                    <div className="w-[350px] h-[300px] mb-[5px] border-2 border-[#D9D9D9] rounded-[15px] m-[20px]">
                        <div className="m-[10px]">
                            <h2 className="text-[#F5F5F5] text-[18px] font-bold text-center">SISTEMAS ADMINISTRATIVOS</h2>
                        </div>
                        <div className="flex justify-center">
                            <Image src={IconAdmin} alt="Icon" width={80} height={80} />
                        </div>
                        <div className="flex justify-center">
                            <hr className="border-[1px] border-[#F5F5F5] w-[90%] m-[15px]" />
                        </div>
                        <div className="flex h-[75px]">
                            <p className="text-[#F5F5F5] text-[14px] font-normal text-center p-[4px]">Gestão interna com autenticação, permissões, relatórios e dashboards intuitivos.</p>
                        </div>
                        <BtnSolicitarServico service="SISTEMAS ADMINISTRATIVOS"/>
                    </div>
                    <div className="w-[350px] h-[300px] mb-[5px] border-2 border-[#D9D9D9] rounded-[15px] m-[20px]">
                        <div className="m-[10px]">
                            <h2 className="text-[#F5F5F5] text-[18px] font-bold text-center">E-COMMERCE + ADMINISTRATIVO</h2>
                        </div>
                        <div className="flex justify-center">
                            <Image src={IconAdminEcommerce} alt="Icon" width={240} height={82} />
                        </div>
                        <div className="flex justify-center">
                            <hr className="border-[1px] border-[#F5F5F5] w-[90%] m-[15px]" />
                        </div>
                        <div className="flex h-[75px]">
                            <p className="text-[#F5F5F5] text-[14px] font-normal text-center p-[4px]">Controle total de produtos, clientes e vendas em uma única plataforma.</p>
                        </div>
                        <BtnSolicitarServico service="E-COMMERCE + ADMINISTRATIVO"/>
                    </div>
                    <div className="w-[350px] h-[300px] mb-[5px] border-2 border-[#D9D9D9] rounded-[15px] m-[20px]">
                        <div className="m-[10px]">
                            <h2 className="text-[#F5F5F5] text-[18px] font-bold text-center">APLICATIVOS MOBILE</h2>
                        </div>
                        <div className="flex justify-center">
                            <Image src={IconMobile} alt="Icon" width={80} height={80} />
                        </div>
                        <div className="flex justify-center">
                            <hr className="border-[1px] border-[#F5F5F5] w-[90%] m-[15px]" />
                        </div>
                        <div className="flex h-[75px]">
                            <p className="text-[#F5F5F5] text-[14px] font-normal text-center p-[4px]">Aplicativos modernos e performáticos desenvolvidos com Flutter.</p>
                        </div>
                        <BtnSolicitarServico service="APLICATIVOS MOBILE"/>
                    </div>
                </div>
            </div>
        </section>
    );
}