import * as React from 'react'
import Image from 'next/image'
import CargoSearch from '@/components/CargoSearch'

interface Props {

}
export default function TrackingPage({}: Props) {
    return (
        <div className="flex flex-col items-center bg-white">
            <CargoSearch />

            <p className='mt-[73px] mb-[46px] text-[var(--blue)] xl:text-xl'>Welcome use cargo tracing,Please input your tracking number.</p>

            <Image src="/images/cargo_search.png" width={800} height={800} className='xl:h-[631px] xl:w-[639px]' alt='search'/>
            <div className='h-[96px] bg-gray-100 w-full'/>

        </div>
    )
}
