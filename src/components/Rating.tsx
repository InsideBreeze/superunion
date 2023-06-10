'use client'
import React from 'react';
import Description from "@/components/Description";
import { RxAvatar } from 'react-icons/rx'
import Image from 'next/image'

const Rating = () => {
    const lastImageRef = React.useRef<any>(null)
    const firstImageRef = React.useRef<any>(null)

    return (<div className="mt-[89px] overflow-x-hidden ">
        <Description title="Our Clients Satisfaction">
            <div className="inline-flex gap-[48px] mt-3">
                <div className="border px-6 py-5
                                w-[456px]    shadow-xl
                                hover:border hover:border-[var(--blue)] rounded-md
                                transition-all
                                "
                    ref={firstImageRef}>

                    <div className='flex flex-col justify-between h-full pb-2'>
                        <p className="text-base text-[#2F2F2F]">
                            I am a new seller on Amazon and have spent a long time searching for a reliable and affordable logistics provider. My friend recommended Superunion to me and I am glad I took his advice. Their custom manager is very patient and answered my questions in details. I will definitely use Superunion to shipping cargo from now on.
                        </p>
                        <div className="flex items-center space-x-1 mt-2">
                            <div>
                                <Image src="/images/David.jpg" alt="david" width={100} height={100} className='h-12 w-12 object-cover rounded-full' />
                            </div>

                            <div className="">
                                <p className="text-base">
                                    Archie David
                                </p>
                                <p className="text-[10px]">⭐⭐⭐⭐⭐</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="border
                                w-[456px] shadow-xl py-5 px-6
                                                                hover:border hover:border-[var(--blue)] rounded-md
                                transition-all

                                ">
                    <div className='flex flex-col justify-between h-full pb-2'>

                        <p className="text-base text-[#2F2F2F]">
                            Superunion is the best. If there are any updates in the delivery, they will inform me right away. If I have any questions, they always respond quickly. My goods arrived into Amazon warehouse within estimated delivery time. I would highly recommend Superunion to my other friends.
                        </p>
                        <div className="flex items-center space-x-1 mt-2">
                            <div>
                                <Image src="/images/Emily.jpg" alt="david" width={100} height={100} className='h-12 w-12 object-cover rounded-full' />
                            </div>

                            <div className="">
                                <p className="text-base">
                                    Emily Nuckols
                                </p>
                                <p className="text-[10px]">⭐⭐⭐⭐⭐</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border
                                w-[456px] shadow-xl py-5 px-6
                                                                hover:border hover:border-[var(--blue)] rounded-md
                                transition-all

                                " ref={lastImageRef}>

                    <div className='flex flex-col justify-between h-full pb-2'>

                        <p className="text-base text-[#2F2F2F]">
                            Superunion is the best. If there are any updates in the delivery, they will inform me right away. If I have any questions, they always respond quickly. My goods arrived into Amazon warehouse within estimated delivery time. I would highly recommend Superunion to my other friends.
                        </p>
                        <div className="flex items-center space-x-1">
                            <div>
                                <Image src="/images/Christina.jpg" alt="david" width={100} height={100} className='h-12 w-12 object-cover rounded-full' />
                            </div>
                            <div className="">
                                <p className="text-base">
                                    Emily Nuckols
                                </p>
                                <p className="text-[10px]">⭐⭐⭐⭐⭐</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </Description>
        <div className='flex absolute bottom-[44px] right-[70px]'>
            <Image src="/images/left_white_arrow.png" alt="right_arrow"
                className="h-[42px] w-[42px] cursor-pointer shadow-xs" height={50} width={50}
                onClick={() => firstImageRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })}
            />
            <Image src="/images/right_arrow.png" alt="right_arrow"
                className="h-[42px] w-[42px] cursor-pointer shadow-xs" height={50} width={50}
                onClick={() => lastImageRef.current.scrollIntoView({
                    behavior: 'smooth', block: 'nearest',
                    inline: 'center'
                })} />

        </div>
    </div>
    )
};

export default Rating
