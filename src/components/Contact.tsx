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
        <div className='w-[50%] space-y-[80px]'>
            { /* inputs */}
            <div className='w-full h-10 flex'>
                <div className='w-[40%] text-start flex items-center'>
                    Your name*
                </div>
                <input className='w-[60%] outline-none bg-gray-100 pl-5' />
            </div>
            <div className='w-full h-10 flex'>
                <div className='w-[40%] text-start flex items-center'>
                    Your email*
                </div>
                <input className='w-[60%] outline-none bg-gray-100 pl-5' />
            </div>
            <div className='w-full h-10 flex'>
                <div className='w-[40%] text-start flex items-center'>
                    Your phone number*
                </div>
                <input className='w-[60%] outline-none bg-gray-100 pl-5' />
            </div>
            <div className='w-full h-10 flex'>
                <div className='w-[40%]'>
                    <ReactFlagsSelect
                        selected={selected}
                        onSelect={(code) => setSelected(code)}
                        showSelectedLabel={false}
                    />
                </div>
                <input className='w-[60%] outline-none bg-gray-100 pl-2 text-center' disabled value={countries[selected]} />
            </div>

            <textarea placeholder='Your message here' className='pl-5 pt-5 text-[14px] w-full outline-none border border-[var(--blue)] min-h-[218px] max-h-[218px]' />

            <button className='w-full h-[60px] bg-[var(--blue)] text-white text-xl'>
                Submit
            </button>
        </div>

    )

}
