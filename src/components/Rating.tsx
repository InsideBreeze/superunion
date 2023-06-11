'use client'
import React from 'react'
import Description from '@/components/Description'
import { RxAvatar } from 'react-icons/rx'
import Image from 'next/image'

const Rating = () => {
  const lastImageRef = React.useRef<any>(null)
  const firstImageRef = React.useRef<any>(null)

  return (
    <div className="mt-[89px] overflow-x-hidden ">
      <Description title="Our Clients Satisfaction">
        <div className="mt-3 inline-flex gap-[48px]">
          <div
            className="w-[456px] rounded-md border
                                px-6    py-5
                                shadow-xl transition-all hover:border
                                hover:border-[var(--blue)]
                                "
            ref={firstImageRef}
          >
            <div className="flex h-full flex-col justify-between pb-2">
              <p className="text-base text-[#2F2F2F]">
                I am a new seller on Amazon and have spent a long time searching
                for a reliable and affordable logistics provider. My friend
                recommended Superunion to me and I am glad I took his advice.
                Their custom manager is very patient and answered my questions
                in details. I will definitely use Superunion to shipping cargo
                from now on.
              </p>
              <div className="mt-2 flex items-center space-x-1">
                <div>
                  <Image
                    src="/images/David.jpg"
                    alt="david"
                    width={100}
                    height={100}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                </div>

                <div className="">
                  <p className="text-base">Archie David</p>
                  <p className="text-[10px]">⭐⭐⭐⭐⭐</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-[456px]
                                rounded-md border px-6 py-5
                                                                shadow-xl transition-all hover:border
                                hover:border-[var(--blue)]

                                "
          >
            <div className="flex h-full flex-col justify-between pb-2">
              <p className="text-base text-[#2F2F2F]">
                Superunion is the best. If there are any updates in the
                delivery, they will inform me right away. If I have any
                questions, they always respond quickly. My goods arrived into
                Amazon warehouse within estimated delivery time. I would highly
                recommend Superunion to my other friends.
              </p>
              <div className="mt-2 flex items-center space-x-1">
                <div>
                  <Image
                    src="/images/Emily.jpg"
                    alt="david"
                    width={100}
                    height={100}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                </div>

                <div className="">
                  <p className="text-base">Emily Nuckols</p>
                  <p className="text-[10px]">⭐⭐⭐⭐⭐</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="w-[456px]
                                rounded-md border px-6 py-5
                                                                shadow-xl transition-all hover:border
                                hover:border-[var(--blue)]

                                "
            ref={lastImageRef}
          >
            <div className="flex h-full flex-col justify-between pb-2">
              <p className="text-base text-[#2F2F2F]">
                Superunion is the best. If there are any updates in the
                delivery, they will inform me right away. If I have any
                questions, they always respond quickly. My goods arrived into
                Amazon warehouse within estimated delivery time. I would highly
                recommend Superunion to my other friends.
              </p>
              <div className="flex items-center space-x-1">
                <div>
                  <Image
                    src="/images/Christina.jpg"
                    alt="david"
                    width={100}
                    height={100}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                </div>
                <div className="">
                  <p className="text-base">Emily Nuckols</p>
                  <p className="text-[10px]">⭐⭐⭐⭐⭐</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Description>
      <div className="absolute bottom-[44px] right-[70px] flex">
        <Image
          src="/images/left_white_arrow.png"
          alt="right_arrow"
          className="shadow-xs h-[42px] w-[42px] cursor-pointer"
          height={50}
          width={50}
          onClick={() =>
            firstImageRef.current.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'center',
            })
          }
        />
        <Image
          src="/images/right_arrow.png"
          alt="right_arrow"
          className="shadow-xs h-[42px] w-[42px] cursor-pointer"
          height={50}
          width={50}
          onClick={() =>
            lastImageRef.current.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'center',
            })
          }
        />
      </div>
    </div>
  )
}

export default Rating
