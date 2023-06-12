'use client'
import { Status, Trace } from '@/types'
import axios from 'axios'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import * as React from 'react'
import CargoTrackingResult from './CargoTrackingResult'
import { twMerge } from 'tailwind-merge'

export default function CargoSearch() {
  const [history, setHistory] = React.useState<string[]>([])
  const [code, setCode] = React.useState('')
  const inputRef = React.useRef<any>(null)
  const [traces, setTraces] = React.useState<Trace[]>([])
  const [parcelData, setParcelData] = React.useState<Status | null>(null)
  const [notFound, setNotFound] = React.useState(false)

  const [isFocus, setIsFoucs] = React.useState(false)

  React.useEffect(() => {
    if (inputRef) {
      inputRef.current.focus()
    }
  }, [])

  React.useEffect(() => {
    const cargo = localStorage.getItem('cargo')
    if (cargo) {
      const data = JSON.parse(cargo) as string[]
      setHistory(data.slice(0, 3))
    }
  }, [])

  console.log(parcelData, 'data')

  /// send request
  const handleSearch = async (code: string) => {
    // here should request the data
    //
    const response = await axios.post(
      `https://www.superunionlogistics.com/api/tracking`,
      `tracking_number=${code}`,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )
    const res = response.data

    if (res.code === 200) {
      if (!history.includes(code)) {
        console.log(code, 'code....')
        setHistory([code, ...history])
        localStorage.setItem('cargo', JSON.stringify([code, ...history]))
      }
      const { traces, ...parcelData } = res.data
      setTraces(traces)
      setParcelData(parcelData)
      setCode('')
      setNotFound(false)
    } else {
      setNotFound(true)
      inputRef.current.focus()
    }
  }

  return (
    <div className="bg-white">
      <div className="relative flex flex-col items-center">
        <p className="mb-[15px] mt-[84px] text-[25px] text-[#0052D9]">
          Cargo Tracking
        </p>
        <div className={twMerge("relative")}>
          <div className="relative flex">
            <input
              className="h-[60px] w-[480px]  border-[2px]
 border-[var(--blue)] bg-transparent pl-[14px] text-xl outline-none placeholder:text-[#646464]"
              ref={inputRef}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Search"
              onFocus={() => setIsFoucs(true)}
              onBlur={() => setIsFoucs(false)}
            />
    <button onClick={() => handleSearch(code)} disabled={code.trim().length === 0}>
              <Image
                src="/images/rec.png"
                width={60}
                height={60}
                alt="rec"
                className="h-[60px] w-[60px]"
              />
              <Image
                src="/images/search.png"
                alt="search"
                width={36}
                height={36}
                className="absolute right-[30px] top-[50%] h-9 w-9 -translate-y-[50%] translate-x-[50%] cursor-pointer"
              />
            </button>
          </div>
          <AnimatePresence>
                      {isFocus && code.length === 0 && history.length > 0
            && (
              <motion.div
                className="index-100 absolute top-[60px] h-[150px] w-[540px] bg-white pl-5 pr-4 pt-[18px] shadow-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <p className="text-[#2F2F2F]">History</p>
                <div className="mt-[10px] flex text-[#646464] flex-wrap items-start">
                  {history.map((code) => (
                    <div
                      key={code}
                      className="flex cursor-pointer mr-4 mb-2 items-center space-x-3 bg-[#E2E2E2] px-[20px] py-[5px]"
                      onClick={async () => {
                        handleSearch(code)
                      }}
                    >
                      <p>{code}</p>
                      <div
                        className="flex h-4  w-4 items-center justify-center rounded-full bg-[#646464] hover:cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation()
                          const newHistory = history.filter((c) => c !== code)
                          setHistory(newHistory)
                          localStorage.setItem(
                            'cargo',
                            JSON.stringify(newHistory)
                          )
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-[9px] w-[9px] text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {!parcelData && (
          <div className="mb-[200px]">
            <Image
              src="/images/cargo_search.png"
              width={800}
              height={800}
              className="mt-[73px] h-[319.29px] w-[315.24px]"
              alt="search"
            />
          </div>
        )}
      </div>
      {parcelData && !notFound && (
        <CargoTrackingResult parcelData={parcelData} traces={traces} />
      )}
      {notFound && (
        <p className="mt-[150px] text-center text-2xl pb-[200px]">
          Not Found, please check your input :){' '}
        </p>
      )}
    </div>
  )
}
