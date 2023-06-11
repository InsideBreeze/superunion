'use client'
import * as React from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ShipmentData, Status, Trace } from '@/types'
import CargoTrackingResult from './CargoTrackingResult'
import axios from 'axios'

const parseData = (data: ShipmentData): [t: Trace[], la: Status] => {
  const { traces, shipment_id, client_reference, status, country, postcode } =
    data
  return [traces, { shipment_id, client_reference, status, country, postcode }]
}

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
      console.log('lala data', data.slice(0, 3))
      setHistory(data.slice(0, 3))
    }
  }, [])

  /// send request
  const handleSearch = async () => {
    // here should request the data
    //
    const response = await axios.post(
      `http://api.superunionlogistics.com:8000/tracking`,
      `tracking_number=${code}`,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )
    const res = response.data

    if (res.code === 200) {
      const data = res.data
      console.log(data)
      if (!history.includes(code)) {
        setHistory([code, ...history])
        localStorage.setItem('cargo', JSON.stringify([code, ...history]))
      }
      const { traces, ...parcelData } = res.data
      setTraces(traces)

      setParcelData(parcelData)
      setCode('')
    } else {
      setNotFound(true)
      inputRef.current.focus()
    }
  }

  console.log('isFocus', isFocus)
  return (
    <div className="bg-white pb-[966px]">
      <div className="relative flex flex-col items-center">
        <p className="mb-[15px] mt-[84px] text-[25px] text-[#0052D9]">
          Cargo Tracking
        </p>
        <div className="relative">
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
            <button
              onClick={handleSearch}
              disabled={code.trim().length === 0}
              className="bg-[red]"
            >
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
            {isFocus && code.length === 0 && history.length > 0 && (
              <motion.div
                className="index-100 absolute top-[60px] h-[120px] w-[540px] bg-white pl-5 pr-4 pt-[18px] shadow-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <p className="text-[#2F2F2F]">History</p>
                <div className="mt-[10px] flex space-x-5 text-[#646464]">
                  {history.map((code) => (
                    <div
                      key={code}
                      className="flex cursor-pointer items-center space-x-1 bg-[#E2E2E2] px-[9px] py-[5px]"
                      onClick={() => setCode(code)}
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
        {code.length === 0 && !parcelData && !notFound && (
          <>
            <Image
              src="/images/cargo_search.png"
              width={800}
              height={800}
              className="mt-[73px] h-[319.29px] w-[315.24px]"
              alt="search"
            />
          </>
        )}
      </div>
      {parcelData && !notFound && (
        <CargoTrackingResult parcelData={parcelData} traces={traces} />
      )}
      {notFound && (
        <p className="mt-[150px] text-center text-2xl text-[red]">
          Not Found, please check your input :){' '}
        </p>
      )}
    </div>
  )
}
