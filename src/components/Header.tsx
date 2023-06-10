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
                                 ? 'bg-[url("/images/bg@2.png")] xl:h-[650px] h-[255px]' : 'h-[230px] lg:h-[350px] bg-[url("/images/bg.png")]')}>
            <nav className='flex items-center justify-between text-[#333333]
                            h-[60px] xl:h-[120px] bg-white bg-opacity-50 sm:px-[30px] sm:py-[14px] px-[10px] py-2 xl:px-[130px] xl:py-[36px]
                            '>
                    {/* icon */}
                    <div>
                        <Image src='/images/logo_blue.png' alt="logo" width={200} height={40} className="md:w-[180px] md:h-10 w-[120px] h-6" />
                    </div>
                    {/* links */}
                    <div className='whitespace-nowrap space-x-2 sm:space-x-[15px] md:space-x-[24px] xl:space-x-[40px] xl:text-xl text-[10px] sm:text-sm md:text-base'>
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
                'absolute left-[26px] top-[171px] xl:top-[500px] xl:left-[70px] font-bold lg:text-3xl md:text-2xl sm:text-xl xl:text-4xl text-base text-white'
                , pathname === "/" ? 'block' : 'hidden')}>
                <p>Your reliable shipping solution provider</p>
                <p>Ship your business here!</p>
            </div>
        </header>
    )
}
