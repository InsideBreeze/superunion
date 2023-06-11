'use client'
import * as React from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion";
import Description from './Description';

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

export default function CargoSearch({}: Props) {
    const [codes, setCodes] = React.useState(['CJ000840', 'CJ000841', 'CJ000842'])
    const [code, setCode] = React.useState('')
    const inputRef = React.useRef<any>(null)
    const [isActive, setIsActive] = React.useState(true)

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
                    </div>
                )
            }
        </div>

    )


}
