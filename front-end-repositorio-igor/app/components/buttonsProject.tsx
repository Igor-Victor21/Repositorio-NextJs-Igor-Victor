"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation"

import IconLink from "../assets/IconLink.png"
import IconEye from "../assets/IconEye.png"

export default function ButtonsProject() {

    const [showToast, setShowToast] = useState(false)
    const router = useRouter()

    const toastButton = () => {
        setShowToast(true)
        setTimeout(() => setShowToast(false), 5000)
        return
    }

    return (
        <section>
            <div className="flex flex-row gap-[10px] md:mb-[20px]">
                <div className="flex p-2 rounded-[50px] bg-[#F5F5F5] w-[128.76px] md:w-[168.76px] h-[46px] items-center justify-center">
                    <Link href="https://vc-brinquedos-espumados-site-next-r.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex gap-1 text-[#121212] font-medium cursor-pointer hover:tracking-wide duration-200">SITE
                        <Image src={IconLink} alt="IconWhatsApp" width={24} height={24} />
                    </Link>
                </div>
                <div className="flex p-2 rounded-[50px] bg-[#F5F5F5] w-[184.11px] h-[46px] items-center justify-center ">
                    <button onClick={toastButton} className="flex gap-1 text-[#121212] font-medium cursor-pointer hover:tracking-wide duration-200">DOCUMENTAÇÃO <Image src={IconEye} alt="IconWhatsApp" width={24} height={24} /></button>
                    {showToast && (
                        <div className="flex flex-col fixed w-[45vw] md:w-[45vw] xl:w-[15vw] left-1/2 -translate-x-1/2 bottom-6 bg-red-500 p-4 z-50 rounded-lg">
                            <p className="text-[12px] font-bold text-white">Em desenvolvimento...</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}