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
        <section className='xl:px-[70px] px-[26px]'>
      <p className={twMerge('text-[8px] text-[var(--blue)] border border-l border-l-[var(--blue)] pl-[9px] border-l-[5px]', className)}>{title}</p>
      {children}
    </section>
  )
}
