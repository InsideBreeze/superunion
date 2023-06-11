import * as React from 'react'
import Image from 'next/image'
import CargoSearch from '@/components/CargoSearch'

interface Props {

}
export default function TrackingPage({}: Props) {
    return (
        <div className="flex flex-col items-center bg-white pb-[966px]">
            <CargoSearch />
            {/* <div className='h-[96px] bg-gray-100 w-full'/> */}

        </div>
    )
}
