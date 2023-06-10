import * as React from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
    children: React.ReactNode;
    title: string;
    className?: string;
}


export default function Description({ title, children }: Props) {

    return (
        <section className='px-[70px]'>
            <p className={twMerge('text-[var(--blue)] border-l border-l-[var(--blue)] pl-[9px] border-l-[5px] font-bold text-2xl')}>{title}</p>
            {children}
        </section>
    )
}
