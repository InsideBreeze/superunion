import * as React from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
  children: React.ReactNode
  title: string
  className?: string
}

export default function Description({ title, children }: Props) {
  return (
    <section className={twMerge("px-[70px]")}>
      <p
        className={twMerge(
          'border-l border-l-[5px] border-l-[var(--blue)] pl-[9px] text-2xl font-bold text-[var(--blue)]'
        )}
      >
        {title}
      </p>
      {children}
    </section>
  )
}
