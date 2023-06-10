import * as React from 'react'
import Image from 'next/image'

interface Props {
    caption: string;
    image: string;
    children: React.ReactNode
}

//                px-[5px] pt-3 leading- TRACKINGh-[0.1em] xl:tracking-[0.02em] xl:text-[13px] xl:px-[13px] xl:pt-8 ">

export default function ImageDescription({ caption,  image, children }: Props) {
    return (
            <div className="shadow-xl hover:border-[2px] transition-all hover:shadow-none hover:border-[var(--blue)]">
                <div className="relative">
                    <Image src={image} alt='sea' height={420} width={500} className="max-h-[254px] w-full object-cover" />
                    <div className="flex items-center justify-center
                                    text-white absolute left-0 right-0 bottom-0 h-[33%]
                                    bg-[#497bd0]
                                    leading-[1em]
                                    bg-opacity-50
                                    ">
                    <p className='text-center lg:text-3xl md:text-2xl text-xl lg:leading-[1em]'>{caption}</p>
                    </div>
                </div>
                <p className="text-[#2F2F2F] my-8 xl:text-lg mx-4 lg:text-[17px] md:text-sm text-lg">
                    {children}
                </p>
                <div>
                </div>
            </div>
    )
}
