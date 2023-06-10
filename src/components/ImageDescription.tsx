import * as React from 'react'
import Image from 'next/image'

interface Props {
    caption: string;
    image: string;
    children: React.ReactNode
}


export default function ImageDescription({ caption,  image, children }: Props) {
    return (
            <div className="shadow-xl
                              border
                                                          transition-all hover:shadow-none hover:border-[#0052D9]

                            ">
                <div className="relative">
                    <Image src={image} alt='sea' height={420} width={500} className="max-h-[254px] w-full object-cover" />
                    <div className="flex items-center justify-center
                                    text-white absolute left-0 right-0 bottom-0 h-[33%]
                                    bg-[#497bd0]
                                    leading-[1em]
                                    bg-opacity-50
                                    ">
                    <p className='text-center text-3xl leading-[1em]'>{caption}</p>
                    </div>
                </div>
                <p className="text-[#2F2F2F] py-8 px-4 text-lg

                              ">
                    {children}
                </p>
                <div>
                </div>
            </div>
    )
}
