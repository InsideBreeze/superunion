'use client'
import React from 'react';
import Description from "@/components/Description";
import { RxAvatar } from 'react-icons/rx'
import Image from 'next/image'

const Rating = () => {
    const lastImageRef = React.useRef<any>(null)
    const firstImageRef = React.useRef<any>(null)

    return (<div className="mt-[33px] xl:mt-[89px] overflow-x-hidden ">
        <Description title="Our Clients Satisfaction" className="text-[8px] xl:text-xl font-bold">

            <div className="inline-flex xl:space-x-[48px] xl:mt-8 mt-3 space-x-[18px]">
                <div className="xl:h-[268px] xl:w-[534px] w-[200px] h-[101px] shadow-xl" ref={firstImageRef}>
                    <div className="xl:pl-[17px] xl:pr-[15px] xl:pt-[28px] pl-[6px] pr-[6px] pt-[14px]">
                        <p className="xl:text-[16px] text-[5px] text-[#2F2F2F] leading-[2em]">
                            I am a new seller on Amazon and have spent a long time searching for a reliable and affordable logistics provider. My friend recommended Superunion to me and I am glad I took his advice. Their custom manager is very patient and answered my questions in details. I will definitely use Superunion to shipping cargo from now on.
                        </p>
                        <div className="flex items-center xl:space-x-1 mt-2">
                            <RxAvatar className="xl:h-9 xl:w-9 h-3" />
                            <div className="">
                                <p className="text-[6px] xl:text-base">
                                    Archie David
                                </p>
                                <p className="text-[3px] xl:text-[6px]">⭐⭐⭐⭐⭐</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:h-[268px] xl:w-[534px] w-[200px] h-[101px] shadow-xl">
                    <div className="xl:pl-[17px] xl:pr-[15px] xl:pt-[28px] pl-[6px] pr-[6px] pt-[14px]">
                        <p className="xl:text-[16px] text-[5px] text-[#2F2F2F] leading-[2em]">
                            Superunion is the best. If there are any updates in the delivery, they will inform me right away. If I have any questions, they always respond quickly. My goods arrived into Amazon warehouse within estimated delivery time. I would highly recommend Superunion to my other friends.
                        </p>
                        <div className="flex xl:mt-7 items-center xl:space-x-1 mt-4 space-x-[2px]">
                            <RxAvatar className="xl:h-9 xl:w-9 h-3" />
                            <div>
                                <p className="text-[6px] xl:text-base">
                                    Emily Nuckols
                                </p>
                                <p className="text-[3px] xl:text-[6px]">⭐⭐⭐⭐⭐</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:h-[268px] xl:w-[534px] w-[200px] h-[101px] shadow-md" ref={lastImageRef}>
                    <div className="xl:pl-[17px] xl:pr-[15px] xl:pt-[28px] pl-[6px] pr-[6px] pt-[14px]">
                        <p className="xl:text-[16px] text-[5px] text-[#2F2F2F] leading-[2em]">
                            I have been working with Superunion for a year now and their service has always been excellent. Their prices are also competitive compared to other freight forwarder. I hope to have more cooperation in the future.
                        </p>
                        <div className="flex xl:mt-[60px] mt-[22px] items-center xl:space-x-1 space-x-[2px]">
                            <RxAvatar className="xl:h-9 xl:w-9 h-4 w-4" />
                            <div >
                                <p className="text-[6px] xl:text-base">Felix Ortiz</p>
                                <p className="xl:text-[6px] text-[3px]">⭐⭐⭐⭐⭐</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Description>
        <Image src="/images/right_arrow.png" alt="right_arrow"
            className="absolute right-[70px] bottom-[44px] h-[42px] w-[42px] cursor-pointer shadow-xs" height={50} width={50}
            onClick={() => lastImageRef.current.scrollIntoView({
                behavior: 'smooth', block: 'nearest',
                inline: 'center'
            })} />
        <Image src="/images/left_arrow.png" alt="right_arrow"
            className="absolute right-[136px] bottom-[44px] h-[42px] w-[42px] cursor-pointer shadow-xs" height={50} width={50}
            onClick={() => firstImageRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })}
        />
    </div>
    )
};

export default Rating
