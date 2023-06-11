'use client'
import * as React from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion";
import Description from './Description';
import { twMerge } from 'tailwind-merge';

interface Result {
    "shipment-id": string;
    "client-reference": string;
    "statue": string;
    "costcode": string;
    "postcode": string;

}

const result: Result = {
    "shipment-id": 'CJ000840',
    "client-reference": "FBA15DG42YYW",
    "statue": "in-transit",
    "costcode": "Japan",
    "postcode": "252-5220"
}

const status = {
    "status": 1,
    "info": "",
    "action": "",
    "show_time": 1,
    "data": {
        "shipment":
        {
            "shipment_id": "CJ000840",
            "client_reference": "FBA15DG42YYW",
            "ext_number": "FBA15DG42YYW",
            "outer_carrier_code": "",
            "outer_carrier_tracking_number": "",
            "status": "in_transit",
            "country": "日本",
            "postcode": "252-5220",
            "traces": [{ "time": "2023-06-09 10:22:38", "station": "成田空港", "description": "" }, { "time": "2023-06-09 11:22:38", "station": "関西国際空港", "description": "" }, { "time": "2023-06-10 15:22:38", "station": "深セン市", "description": "" }, { "time": "2023-06-11 09:22:38", "station": "香港集散中心", "description": "" }, { "time": "2023-06-12 13:22:38", "station": "东莞市货运中心", "description": "" }, { "time": "2023-06-14 08:22:38", "station": "天津滨海新区", "description": "" }, { "time": "2023-06-15 12:22:38", "station": "北京市", "description": "" }]
        }
    }
}

export default function CargoSearch() {
    const [codes, setCodes] = React.useState(['CJ000840', 'CJ000841', 'CJ000842'])
    const [code, setCode] = React.useState('')
    const inputRef = React.useRef<any>(null)
    const [isActive, setIsActive] = React.useState(true)

    const traces = status.data.shipment.traces
    const [showResult, setShowResult] = React.useState<Boolean>(false)

    React.useEffect(() => {
        if (inputRef) {
            inputRef.current.focus()
        }
    }, [])

    const handleSearch = () => {
        setShowResult(true);
        setIsActive(false)

    }
    return (
        <div className='bg-white pb-[966px]'>
            <div className="flex flex-col items-center relative">

                <p className="text-[#0052D9] text-[25px] mt-[84px] mb-[15px]">Cargo Tracking</p>
                <div className='relative'>
                    <div className='flex relative'>
                        <input className="w-[480px] h-[60px]  bg-transparent
 border-[var(--blue)] border-[2px] outline-none text-xl pl-[14px] placeholder:text-[#646464]"
                            ref={inputRef}
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            placeholder='Search'
                        />
                        <button onClick={handleSearch}>
                            <Image src="/images/rec.png" width={60} height={60} alt='rec'
                                className='h-[60px] w-[60px]' />
                            <Image src="/images/search.png" alt="search" width={36} height={36}
                                className='cursor-pointer h-9 w-9 absolute right-[30px] translate-x-[50%] top-[50%] -translate-y-[50%]'
                            />
                        </button>
                    </div>
                    <AnimatePresence>
                        {
                            codes.length > 0 && isActive && (
                                <motion.div className='shadow-xl w-[540px] h-[120px] pt-[18px] pl-5 pr-4 absolute top-[60px] index-100 bg-white'
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                >
                                    <p className='text-[#2F2F2F]'>History</p>
                                    <div className='flex space-x-5 text-[#646464] mt-[10px]'>

                                        {
                                            codes.map(code => (
                                                <div key={code} className='bg-[#E2E2E2] px-[9px] py-[5px] flex items-center space-x-1 cursor-pointer'
                                                    onClick={() => setCode(code)}
                                                >
                                                    <p>{code}</p>
                                                    <div className='h-4 w-4  rounded-full bg-[#646464] flex items-center justify-center hover:cursor-pointer'
                                                        onClick={() => setCodes(codes.filter(c => c !== code))}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[9px] h-[9px] text-white">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </motion.div>
                            )
                        }
                    </AnimatePresence>
                </div>
                {
                    code.length === 0 && !showResult && (
                        <>
                            <Image src="/images/cargo_search.png" width={800} height={800} className='h-[319.29px] w-[315.24px] mt-[73px]' alt='search' />
                        </>
                    )
                }



            </div>
            {
                showResult && (
                    <div className='mt-[152px]'>
                        <Description title='Result'>
                            {
                                <div className='space-y-8 mt-[28px]'>
                                    {
                                        Object.keys(result).map(key => (
                                            <div key={key} className='h-[88px] w-[857px] flex border border-[var(--blue)] '>
                                                <div className='h-full w-[258px] grid place-items-center bg-[var(--blue)] text-white text-2xl'>
                                                    {key}

                                                </div>
                                                <div className='h-full w-[857px] grid place-items-center text-[#333333] text-2xl'>
                                                    {result[key as keyof Result]}
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            }
                        </Description>

                        <div className='mt-[79px]'>
                            <Description title={"Traces"}>

                                <div className='mt-[28px]'>
                                {
                                    status.data.shipment.traces.map((trace, idx) => (
                                <div className=' relative' key={trace.time}>
                                    <div className='flex text-[var(--blue)]'>
                                        <div className='h-[94px] flex space-x-5 items-start'>
                                            <div className={twMerge('h-[15px] w-[15px] rounded-full ', idx === traces.length -1 ? 'bg-[#999999]' : 'bg-[var(--blue)]')}>
                                            </div>
                                                    <div className={twMerge(idx === traces.length - 1 && 'text-[#999999]')}>
                                                <p>{trace.time}</p>
                                                        <div className='flex'>
                                                <p>{trace.station}</p>
                                                <p>{trace.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className={twMerge('w-[2px] h-[75px] bg-[var(--blue)] absolute top-[17px] left-[7px] text-[red]',
                                                           idx === status.data.shipment.traces.length - 1 && 'hidden',
                                                           idx === traces.length -2 && 'bg-[#999999]'
                                        )}
                                    />

                                </div>

                                    ))
                                }
                                    </div>
                            </Description>
                        </div>
                    </div>
                )
            }
        </div>

    )


}
