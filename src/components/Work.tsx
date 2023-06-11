import React from 'react'
import Image from 'next/image'

interface WorkPropTypes {
  seq: number
  contentImage: string
  children: React.ReactNode
  imgW: number
  imgH: number
}

const Work = ({
  seq = 1,
  contentImage = '/images/cargo.png',
  imgW,
  imgH,
  children,
}: WorkPropTypes) => {
  return (
    <div className="index-100 relative flex border-b border-b-[var(--blue)] pb-[111px]">
      <div className=" items-center justify-start">
        <p className="text-center text-[40px] text-[var(--blue)]">{seq}</p>
        <div className="flex h-[155px] w-[200px] items-center justify-center bg-white shadow-xl ">
          <Image
            src={contentImage}
            alt="workflow"
            width={imgW}
            height={imgH}
            className={`object-fit`}
          />
        </div>
        <p className="absolute bottom-[10px] w-[187px] pt-[22px] text-center text-[16px] text-[#333333]">
          {children}
        </p>
      </div>
    </div>
  )
}

export default Work
