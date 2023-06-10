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
        <div className='w-[50%] space-y-[60px]'>
            { /* inputs */}
            <div className='w-full h-10 flex'>
                <div className='
                                border-b  border-b-[var(--blue)]
border-t  border-t-[var(--blue)]
border-l border-l-[var(--blue)]
                                text-[#666666]

                w-[40%] pl-[21px] text-start flex items-center'>
                    Your name*
                </div>
                <input className='w-[60%] outline-none border-t border-t-[var(--blue)]
                border-b border-b-[var(--blue)] border-r border-r-[var(--blue)] 
                ' />
            </div>
            <div className='w-full h-10 flex
                                                            border-b  border-b-[var(--blue)]
border-t  border-t-[var(--blue)]
border-l border-l-[var(--blue)]
                            border-r border-r-[var(--blue)]

                            '>
                <div className='pl-[21px] w-[40%] text-start flex items-center                                 text-[#666666]
'>
                    Your email*
                </div>
                <input className='w-[60%] outline-none  ' />
            </div>
            <div className='w-full h-10 flex
                                                            border-b  border-b-[var(--blue)]
border-t  border-t-[var(--blue)]
border-l border-l-[var(--blue)]
                            border-r border-r-[var(--blue)]



                            '>
                <div className='pl-[21px] w-[40%] text-start flex items-center
                                                text-[#666666]
                                '>
                    Your phone number*
                </div>
                <input className='w-[60%] outline-none  ' />
            </div>

            <div className='w-full h-10 flex
                                                            border-b  border-b-[var(--blue)]
border-t  border-t-[var(--blue)]
border-l border-l-[var(--blue)]
                            border-r border-r-[var(--blue)]


                            '>
                <div className='pl-[21px] w-[40%] text-start flex items-center
                                                                text-[#666666]

                                '>
                    Your country*
                </div>
                <input className='w-[60%] outline-none ' />
            </div>


            <textarea placeholder='Your message here' className='pl-[21px] pt-5 text-[14px] w-full outline-none border border-[var(--blue)] min-h-[218px] max-h-[218px]' />

            <button className='w-full h-[60px] bg-[var(--blue)] text-white text-xl'>
                Submit
            </button>
        </div>

    )

}
