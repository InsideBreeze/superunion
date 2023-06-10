'use client'
import React from 'react';
import Description from "@/components/Description";
import { RxAvatar } from 'react-icons/rx'
import Image from 'next/image'

const Rating = () => {
    const lastImageRef = React.useRef<any>(null)
    const firstImageRef = React.useRef<any>(null)

    return (<div className="mt-[33px] xl:mt-[89px] overflow-x-hidden ">
        <Description title="Our Clients Satisfaction">
            <div className="inline-flex flex-wrap ml-5 sm:ml-0 sm:flex-nowrap xl:gap-[48px] gap-[30px] :mt-8 mt-3 sm:gap-5">
                <div className="sm:h-[268px] lg:px-6 lg:py-5 md:pl-4 md:pt-2 sm:pl-3 sm:pt-3 pt-2 pl-4
                                xl:w-[534px] sm:w-[250px] w-[90%] lg:w-[456px] sm:w-[300px] shadow-xl md:w-[350px]
                                hover:border hover:border-[var(--blue)] rounded-md
                                transition-all
                                " ref={firstImageRef}>

                    <div className='flex flex-col justify-between h-full pb-2'>
                        <p className="lg:text-base text-[#2F2F2F] sm:text-[14px]">
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
                <div className="
                                xl:w-[534px] sm:w-[250px] w-[90%] lg:w-[456px] sm:w-[300px] shadow-xl md:w-[350px] lg:py-5 md:pl-4 md:pt-2 sm:pl-3 sm:pt-3 pt-2 px-6
                                                                hover:border hover:border-[var(--blue)] rounded-md

                                ">
                    <div className='flex flex-col justify-between h-full pb-2'>

                        <p className="lg:text-base text-[#2F2F2F] sm:text-sm ">
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

                <div className="
                                xl:w-[534px] md:w-[250px] lg:w-[456px] w-[90%] sm:w-[300px] shadow-xl md:w-[350px] lg:pt-3 md:pl-4 md:pt-2 sm:pl-3 sm:pt-3 pt-2 pl-4
                                lg:py-6 lg:px-5
                                                                hover:border hover:border-[var(--blue)] rounded-md

                                " ref={lastImageRef}>
                    <div className='flex flex-col justify-between h-full pb-2'>

                        <p className="lg:text-base text-[#2F2F2F] sm:text-sm ">
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
        <div className='sm:flex absolute bottom-[10px] xl:bottom-[44px] xl:right-[70px] right-[10px] hidden'>
            <Image src="/images/left_white_arrow.png" alt="right_arrow"
                className="xl:h-[42px] xl:w-[42px] h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 cursor-pointer shadow-xs" height={50} width={50}
                onClick={() => firstImageRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })}
            />
            <Image src="/images/right_arrow.png" alt="right_arrow"
                className="xl:h-[42px] xl:w-[42px] h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 cursor-pointer shadow-xs" height={50} width={50}
                onClick={() => lastImageRef.current.scrollIntoView({
                    behavior: 'smooth', block: 'nearest',
                    inline: 'center'
                })} />

        </div>
    </div>
    )
};

export default Rating
