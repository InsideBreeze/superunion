'use client'
import Link from 'next/link'
import * as React from 'react'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'

/* should be client component */
export default function Header() {

    const pathname = usePathname()
    return (
        <header className={twMerge(' bg-cover relative', pathname === '/'
                                 ? 'bg-[url("/images/bg@2.png")] h-[650px]' : 'h-[350px] bg-[url("/images/bg.png")]')}>
            <nav className='flex items-center justify-between text-[#333333]
                            h-[120px] bg-white bg-opacity-50 px-[130px] py-[36px]
                            '>
                    {/* icon */}
                    <div>
                        <Image src='/images/logo_blue.png' alt="logo" width={200} height={40} className="w-[180px] h-10" />
                    </div>
                    {/* links */}
                    <div className='whitespace-nowrap space-x-[40px] text-xl'>
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
            </nav>
            <div className={twMerge(
                'absolute top-[500px] left-[70px] font-bold text-4xl text-white'
                , pathname === "/" ? 'block' : 'hidden')}>
                <p>Your reliable shipping solution provider</p>
                <p>Ship your business here!</p>
            </div>
        </header>
    )
}
