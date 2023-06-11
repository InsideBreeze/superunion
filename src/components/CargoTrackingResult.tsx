import { Status, Trace } from '@/types'
import * as React from 'react'
import { twMerge } from 'tailwind-merge'
import Description from './Description'

interface Props {
  parcelData: Status
  traces: Trace[]
}
export default function CargoTrackingResult({ parcelData, traces }: Props) {
  console.log('lemon traces', traces)
  return (
    <div className="mt-[152px]">
      <Description title="Result">
        <div className="mt-[28px] space-y-8">
          {parcelData &&
            Object.keys(parcelData).map((key) => (
              <div
                key={key}
                className="flex h-[88px] w-[857px] border border-[var(--blue)] "
              >
                <div className="grid h-full w-[258px] place-items-center truncate bg-[var(--blue)] text-2xl text-white">
                  {key}
                </div>
                <div className="grid h-full w-[857px] place-items-center text-2xl text-[#333333]">
                  {parcelData[key as keyof Status]}
                </div>
              </div>
            ))}
        </div>
      </Description>

      <div className="mt-[79px]">
        <Description title={'Traces'}>
          <div className="mt-[28px]">
            {traces.map((trace, idx) => (
              <div className=" relative" key={trace.time}>
                <div className="flex text-xl text-[var(--blue)]">
                  <div className="flex h-[94px] items-start space-x-5">
                    <div
                      className={twMerge(
                        'h-[15px] w-[15px] rounded-full ',
                        idx === traces.length - 1
                          ? 'bg-[#999999]'
                          : 'bg-[var(--blue)]'
                      )}
                    ></div>
                    <div
                      className={twMerge(
                        idx === traces.length - 1 && 'text-[#999999]'
                      )}
                    >
                      <p>{trace.time}</p>
                      <div className="flex">
                        <p>{trace.station}</p>
                        <p>{trace.info}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={twMerge(
                    'absolute left-[7px] top-[17px] h-[75px] w-[2px] bg-[var(--blue)] text-[red]',
                    idx === traces.length - 1 && 'hidden',
                    idx === traces.length - 2 && 'bg-[#999999]'
                  )}
                />
              </div>
            ))}
          </div>
        </Description>
      </div>
    </div>
  )
}
