'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'
import { twMerge } from 'tailwind-merge'

/* should be client component */
export default function Header() {
  const pathname = usePathname()
  return (
    <header
      className={twMerge(
        ' relative bg-cover',
        pathname === '/'
          ? 'h-[650px] bg-[url("/images/bg@2.png")]'
          : 'h-[350px] bg-[url("/images/bg.png")]'
      )}
    >
      <nav
        className="flex h-[120px] items-center justify-between
                            bg-white bg-opacity-50 px-[130px] py-[36px] text-[#333333]
                            "
      >
        {/* icon */}
        <div>
          <Image
            src="/images/logo_blue.png"
            alt="logo"
            width={200}
            height={40}
            className="h-10 w-[180px]"
          />
        </div>
        {/* links */}
        <div className="space-x-[40px] whitespace-nowrap text-xl flex">
                  <div className='w-[120px] text-center'>
          <Link href="/" className={`${pathname === '/' && 'active_link'}`}>
            Our Service
          </Link>
          </div>
                            <div className='w-[90px] text-center'>
          <Link
            href="/about"
            className={`${pathname === '/about' && 'active_link'}`}
          >
            About us
          </Link>
          </div>
                            <div className='w-[90px] text-center'>

          <Link
            href="/workflow"
            className={`${pathname === '/workflow' && 'active_link'}`}
          >
            Workflow
          </Link>
          </div>
                            <div className='w-[90px] text-center'>

          <Link
            href="/tracking"
            className={`${pathname === '/tracking' && 'active_link'}`}
          >
            Tracking
          </Link>
          </div>
        </div>
      </nav>
      <div
        className={twMerge(
          'absolute left-[70px] top-[500px] text-4xl font-bold text-white',
          pathname === '/' ? 'block' : 'hidden'
        )}
      >
        <p>Your reliable shipping solution provider</p>
        <p>Ship your business here!</p>
      </div>
    </header>
  )
}
