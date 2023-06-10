import * as React from 'react'
import Image from 'next/image'

interface Props {

}
export default function CargoSearch({}: Props) {
    return (
        <>
            <p className="text-[#0052D9] text-[25px] mt-[84px] mb-[15px]">Cargo Tracking</p>
            <div className='flex relative'>
                <input className="w-[480px] h-[60px]  bg-transparent
 border-[var(--blue)] border-[2px] outline-none text-xl pl-[14px] placeholder:text-[#646464]"
                    placeholder='Search'
        />
                <Image src="/images/rec.png" width={60} height={60} alt='rec'
                    className='h-[60px] w-[60px]' />
                <Image src="/images/search.png" alt="search" width={36} height={36}
                    className='cursor-pointer h-9 w-9 absolute right-[30px] translate-x-[50%] top-[50%] -translate-y-[50%]'
                />
            </div>
        </>

    )


}
