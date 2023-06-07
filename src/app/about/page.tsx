import * as React from 'react'
import Image from 'next/image'

interface Props {

}
export default function AboutPage({}: Props) {
    return (
        <main className=''>
            <section className='flex pl-[26px] pr-8 xl:pl-[70px] xl:pr-[95px] xl:mt-[67px] mt-[25px] xl:space-x-[62px] space-x-[23px]'>
                <Image src='/images/about_us_person.png' alt='person' height={600} width={750}
                    className='w-[180px] h-[230] xl:w-[495px] xl:h-[617px]'
                />
                <div className='w-[209px] xl:w-[560px] border border-[red]'>
                    <h3 className='text-center text-[8px] font-bold text-[var(--blue)] xl:text-xl'>About us</h3>
                </div>
            </section>
            <section className='flex'>
            </section>
            {/* contact */}
            <section className='flex'>
            </section>

        </main>
    )
}
