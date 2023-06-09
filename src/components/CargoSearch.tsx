import * as React from 'react'
import Image from 'next/image'

interface Props {

}
export default function CargoSearch({}: Props) {
    return (
        <>
            <p className="text-[#0052D9] xl:text-[25px] xl:mt-[84px] xl:mb-[15px]">Cargo Tracking</p>
            <div className='flex relative'>
                <input className="xl:w-[480px] xl:h-[60px]  bg-transparent
 border-[var(--blue)] border-[2px] outline-none xl:text-xl xl:pl-[14px] placeholder:text-[#646464]"
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
