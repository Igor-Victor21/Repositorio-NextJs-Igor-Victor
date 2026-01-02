"use client";

import Image from "next/image";
import IconWhatsappWhiteLogo from "../assets/IconWhatsappWhiteLogo.png";

interface BtnSolicitarServicoProps {
    service: string;
}

export default function BtnSolicitarServico({ service }: BtnSolicitarServicoProps) {

    const wppNumber: string = "5541987446352";

    const handleZap = (): void => {

        localStorage.setItem("service", service);

        const message: string = `
Olá! Tudo bem? Dei uma olhada no seu site e gostaria de saber o valor do seguinte serviço:

${service}
        `;

        const zapURL: string = `https://api.whatsapp.com/send?phone=${wppNumber}&text=${encodeURIComponent(message)}`;
        window.open(zapURL, "_blank");
    };

    return (
        <section className="flex justify-center">
            <div className="flex p-2 w-[252px] h-[56px] items-center justify-center">
                <button
                    onClick={handleZap}
                    className="flex gap-1 text-[#F5F5F5] text-[18px] border-b-[1.2px] border-[#F5F5F5] font-semibold cursor-pointer hover:tracking-wide duration-200">VAMOS CONVERSAR 
                    <Image src={IconWhatsappWhiteLogo} alt="IconWhatsApp" width={24} height={24}/>
                </button>
            </div>
        </section>
    );
}
