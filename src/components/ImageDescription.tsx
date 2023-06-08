import * as React from 'react'
import Image from 'next/image'

interface Props {
    caption: string;
    image: string;
    children: React.ReactNode
}

export default function ImageDescription({ caption,  image, children }: Props) {
    return (
            <div className="xl:w-[343px] xl:h-[552px] w-[129px] h-[207px] border border-[red] ">
                <div className="relative">
                    <Image src={image} alt='sea' height={420} width={500} className="xl:h-[254px] h-[95px] w-full object-cover" />
                    <div className="xl:text-[28px] text-[11px] text-white grid place-items-center absolute left-0 right-0 top-[67px] bottom-0 xl:top-[180px] bg-white bg-opacity-50">
                        {caption}
                    </div>
                </div>
                <p className="text-[5px] text-[#2F2F2F] px-[5px] pt-3 leading-[1.5em] tracking-[0.1em] xl:tracking-[0.02em] xl:text-[13px] xl:px-[13px] xl:pt-8 ">
                    {children}
                </p>
                <div>
                </div>
            </div>
    )
}
