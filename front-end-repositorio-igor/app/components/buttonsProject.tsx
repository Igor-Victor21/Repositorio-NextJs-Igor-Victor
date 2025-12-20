"use client"

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation"

import IconLink from "../assets/IconLink.png"
import IconEye from "../assets/IconEye.png"


export default function ButtonsProject() {
    const router = useRouter()
    return (
        <section>
            <div className="flex flex-row gap-[10px] md:mb-[20px]">
                <div className="flex p-2 rounded-[50px] bg-[#F5F5F5] w-[128.76px] md:w-[168.76px] h-[46px] items-center justify-center">
                    <Link href="https://vc-brinquedos-espumados-site-next-r.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex gap-1 text-[#121212] font-medium cursor-pointer hover:tracking-wide duration-200">SITE 
                        <Image src={IconLink} alt="IconWhatsApp" width={24} height={24} />
                        </Link>
                </div>
                <div className="flex p-2 rounded-[50px] bg-[#F5F5F5] w-[184.11px] h-[46px] items-center justify-center ">
                    <button onClick={() => router.push("./documentation")} className="flex gap-1 text-[#121212] font-medium cursor-pointer hover:tracking-wide duration-200">DOCUMENTAÇÃO <Image src={IconEye} alt="IconWhatsApp" width={24} height={24} /></button>
                </div>
            </div>
        </section>
    );
}