'use client'
import Link from 'next/link'
import * as React from 'react'

/* should be client component */
export default function Header() {
    return (
        <header className='bg-[url("/images/bg.png")] lg:h-[350px] bg-cover h-[130px]'>
            <nav className='z-1 text-green h-[40px] lg:h-[109px] bg-white bg-opacity-50 px-[50px] py-[14px] lg:px-[130px] lg:py-[36px]'>
                <div className='border border-[black] flex justify-between items-center'>
                    {/* icon */}
                    <div>
                        superunion
                    </div>
                    {/* links */}
                    <div className='space-x-[15px] lg:space-x-[40px] lg:text-xl text-[8px]'>
                        <Link href='/'>
                            Our Service
                        </Link>
                        <Link href='/'>
                            About us
                        </Link>
                        <Link href='/'>
                            Workflow
                        </Link>

                    </div>
                </div>
            </nav>
        </header>
    )
}
