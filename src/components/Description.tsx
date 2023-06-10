import * as React from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
    children: React.ReactNode;
    title: string;
    className?: string;
}


// mt-[45px] xl:mt-[120px]
export default function Description({ title, children, className }: Props) {

    return (
        <section className='xl:px-[70px] sm:px-[16px] px-1'>
            <p className={twMerge('text-[var(--blue)] border-l border-l-[var(--blue)] pl-[9px] border-l-[5px] font-bold lg:text-2xl')}>{title}</p>
            {children}
        </section>
    )
}
