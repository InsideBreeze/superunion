import * as React from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
    children: React.ReactNode;
    title: string;
    className?: string;
}
export default function Description({ title, children, className }: Props) {
    return (
    <section>
      <p className={twMerge('text-2 xl:text-xl text-[var(--blue)] border border-l border-l-[var(--blue)] pl-[9px] border-l-[5px]', className)}>{title}</p>
      {children}
    </section>
  )
}
