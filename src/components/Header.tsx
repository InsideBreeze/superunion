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
        <div className="space-x-[40px] whitespace-nowrap text-xl">
          <Link href="/" className={`${pathname === '/' && 'active_link'}`}>
            Our Service
          </Link>
          <Link
            href="/about"
            className={`${pathname === '/about' && 'active_link'}`}
          >
            About us
          </Link>
          <Link
            href="/workflow"
            className={`${pathname === '/workflow' && 'active_link'}`}
          >
            Workflow
          </Link>
          <Link
            href="/tracking"
            className={`${pathname === '/tracking' && 'active_link'}`}
          >
            Tracking
          </Link>
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
