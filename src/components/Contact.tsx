'use client'
import * as React from 'react'
import ReactFlagsSelect from "react-flags-select";
import { countries } from '@/data/countries';


interface Props {

}
export default function Contact({}: Props) {
    const [selected, setSelected] = React.useState<string>("")
    console.log(countries[selected])
    return (
        <div className='w-[50%] space-y-8 xl:space-y-[80px]'>
            { /* inputs */}
            <div className='w-full xl:h-10 flex'>
                <div className='w-[40%] text-center grid place-items-center'>
                    Your name*
                </div>
                <input className='w-[60%] outline-none bg-gray-100 pl-2' />
            </div>
            <div className='w-full xl:h-10 flex'>
                <div className='w-[40%] text-center grid place-items-center'>
                    Your email*
                </div>
                <input className='w-[60%] outline-none bg-gray-100 pl-2' />
            </div>
            <div className='w-full xl:h-10 flex'>
                <div className='w-[40%] text-center grid place-items-center'>
                    Your phone number*
                </div>
                <input className='w-[60%] outline-none bg-gray-100 pl-2' />
            </div>
            <div className='w-full xl:h-10 flex'>
                <div className='w-[40%]'>
                    <ReactFlagsSelect
                        selected={selected}
                        onSelect={(code) => setSelected(code)}
                        showSelectedLabel={false}
                    />
                </div>
                <input className='w-[60%] outline-none bg-gray-100 pl-2' disabled value={countries[selected]} />
            </div>

            <textarea placeholder='Your message here' className='xl:pl-5 xl:pt-5 pt-2 pl-2 text-[6px] xl:text-[14px] w-full outline-none border border-[var(--blue)] xl:min-h-[218px] xl:max-h-[218px] min-h-[80px] max-h-[80px]' />

            <button className='w-full h-6 xl:h-[60px] bg-[var(--blue)] text-white xl:text-xl text-[9px]'>
                Submit
            </button>
        </div>

    )

}
