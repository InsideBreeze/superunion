import * as React from 'react'
import Image from 'next/image'

interface Props {
  caption: string
  image: string
  children: React.ReactNode
}

export default function ImageDescription({ caption, image, children }: Props) {
  return (
    <div
      className="border
                              shadow-xl
                            transition-all
                                              duration-200            hover:scale-[1.02] hover:border-[#0052D9]

                            "
    >
      <div className="relative">
        <Image
          src={image}
          alt="sea"
          height={420}
          width={500}
          className="max-h-[254px] w-full object-cover"
        />
        <div
          className="absolute bottom-0 left-0
                                    right-0 flex h-[33%] items-center justify-center bg-[#497bd0]
                                    bg-opacity-50
                                    leading-[1em]
                                    text-white
                                    "
        >
          <p className="text-center text-3xl leading-[1em]">{caption}</p>
        </div>
      </div>
      <p
        className="px-4 py-8 text-lg text-[#2F2F2F]

                              "
      >
        {children}
      </p>
      <div></div>
    </div>
  )
}
