'use client'
import Link from 'next/link'
import * as React from 'react'
import { usePathname } from 'next/navigation'

/* should be client component */
export default function Header() {

    const pathname = usePathname()

    return (
        <header className='bg-[url("/images/bg.png")] lg:h-[350px] bg-cover h-[130px]'>
            <nav className='z-1 text-green h-[60px] lg:h-[109px] bg-white bg-opacity-50 px-[30px] py-[14px] lg:px-[130px] lg:py-[36px] text-[rgba(51,51,51,1)]'>
                <div className='border border-[black] flex justify-between items-center'>
                    {/* icon */}
                    <div>
                        superunion
                    </div>
                    {/* links */}
                    <div className='space-x-[15px] lg:space-x-[40px] lg:text-xl text-[8px]'>
                        <Link href='/' className={`${pathname === '/' && 'active_link'}`} >
                            Our Service
                        </Link>
                        <Link href='/about' className={`${pathname === '/about' && 'active_link'}`}>
                            About us
                        </Link>
                        <Link href='/workflow' className={`${pathname === '/workflow' && 'active_link'}`}>
                            Workflow
                        </Link>

                    </div>
                </div>
            </nav>
        </header>
    )
}
