'use client'
import Link from 'next/link'
import * as React from 'react'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

/* should be client component */
export default function Header() {

    const pathname = usePathname()

    return (
        <header className={twMerge('bg-[url("/images/bg.png")] bg-cover relative', pathname === '/' ? 'xl:h-[500px] h-[255px]' : 'h-[130px] xl:h-[350px]')}>
            <nav className='z-1 text-green h-[60px] xl:h-[109px] bg-white bg-opacity-50 px-[30px] py-[14px] xl:px-[130px] xl:py-[36px] text-[rgba(51,51,51,1)]'>
                <div className='flex justify-between items-center'>
                    {/* icon */}
                    <div>
                        superunion
                    </div>
                    {/* links */}
                    <div className='space-x-[15px] xl:space-x-[40px] xl:text-xl text-[8px]'>
                        <Link href='/' className={`${pathname === '/' && 'active_link'}`} >
                            Our Service
                        </Link>
                        <Link href='/about' className={`${pathname === '/about' && 'active_link'}`}>
                            About us
                        </Link>
                        <Link href='/workflow' className={`${pathname === '/workflow' && 'active_link'}`}>
                            Workflow
                        </Link>
                        <Link href='/tracking' className={`${pathname === '/tracking' && 'active_link'}`}>
                            Tracking
                        </Link>

                    </div>
                </div>
            </nav>
            <div className={twMerge(
                'absolute left-[26px] top-[171px] xl:top-[350px] xl:left-[70px] font-bold xl:text-[34px] text-[13px] text-white'
                , pathname === "/" ? 'block' : 'hidden')}>
                <p>Your reliable shipping solution provider</p>
                <p>Ship your business here!</p>
            </div>
        </header>
    )
}
