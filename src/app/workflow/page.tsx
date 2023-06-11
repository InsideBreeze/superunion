import * as React from 'react'
import Image from 'next/image'
import Work from '@/components/Work'
{
  /* <div className='flex items-center justify-center h-full  ml-[34px] mr-[17px]'>
            <Image src={arrowImage} alt='arrow' width={200} height={25} className="translate-y-[50px] w-[158.91px] h-[18.57px]"/>
                    </div> */
}

export default function Workflow() {
  return (
    <main className=" relative bg-white">
      <div className="z-1000 mb-8 mt-[42px] flex h-full items-center justify-center">
        <button
          className=" h-[78px] w-[427px]
                               bg-[var(--blue)] text-[44px]
                               font-bold text-white outline-none"
        >
          Our Workflow
        </button>
      </div>

      <Image
        src="/images/workflow_person.png"
        alt="person"
        width={800}
        height={800}
        className="absolute left-0 top-0 xl:h-[650px] xl:w-[650px]"
      />

      <div className="flex w-full px-[130px] pb-[57px]">
        <div className="flex flex-col items-center">
          <div>
            <Work
              seq={1}
              contentImage="/images/cargo.png"
              imgH={108}
              imgW={108}
            >
              Pick up cargo from the supplier or purchasing product for our
              clients.
            </Work>
          </div>
          <div className="mt-[214px]">
            <Work
              seq={6}
              contentImage="/images/pick_cargo.png"
              imgH={78}
              imgW={86}
            >
              Pick up cargo from the supplier or purchasing product for our
              clients.
            </Work>
          </div>

          {/*  //dummy */}
          {/* <div className='bg-[var(--blue)] h-[138.26px] w-[3px] mt-[39px]' /> */}
          <Image
            alt="down arrow"
            className="mt-[39px] h-[138.26px] w-[16px]"
            src="/images/down_arrow.png"
            width={100}
            height={150}
          />

          <div className="mt-[42px]">
            <Work seq={7} contentImage="/images/boat.png" imgH={90} imgW={80}>
              Shipping by sea or by air
            </Work>
          </div>
          <div className="mt-[244px]">
            <Work
              seq={12}
              contentImage="/images/track.png"
              imgH={75}
              imgW={100}
            >
              Dispatch the cargo by truck or by carrier
            </Work>
          </div>
        </div>
        {/* colum2 */}

        <div className="">
          <div className="ml-[34px] mr-[17px] mt-[150px]">
            <Image
              src="/images/long_right_arrow.png"
              alt="arrow"
              width={200}
              height={25}
              className="h-[18.57px] w-[158.91px]"
            />
          </div>
          <div className="ml-[34px] mr-[17px] mt-[544px]">
            <Image
              src="/images/left_arrow.png"
              alt="arrow"
              width={200}
              height={25}
              className="h-[18.57px] w-[158.91px]"
            />
          </div>
          <div className="ml-[34px] mr-[17px] mt-[548px]">
            <Image
              src="/images/long_right_arrow.png"
              alt="arrow"
              width={200}
              height={25}
              className="h-[18.57px] w-[158.91px]"
            />
          </div>
          <div className="ml-[34px] mr-[17px] mt-[497px]">
            <Image
              src="/images/left_arrow.png"
              alt="arrow"
              width={200}
              height={25}
              className="h-[18.57px] w-[158.91px]"
            />
          </div>
        </div>

        {/* colum3 */}
        <div className="flex flex-col items-center">
          <div>
            <Work
              seq={2}
              contentImage="/images/inspection.png"
              imgH={98.24}
              imgW={87.75}
            >
              Inspection (if need)
            </Work>
          </div>
          <div className="mt-[214px]">
            <Work
              seq={5}
              contentImage="/images/loading_cargo.png"
              imgH={82}
              imgW={101}
            >
              Loading the cargo
            </Work>
          </div>

          {/*  //dummy */}
          {/* <div className='bg-[var(--blue)] h-[138.26px] w-[3px] mt-[39px]' /> */}
          <Image
            alt="down arrow"
            className="mt-[39px] h-[138.26px] w-[16px] opacity-0"
            src="/images/down_arrow.png"
            width={100}
            height={150}
          />

          <div className="mt-[42px]">
            <Work
              seq={8}
              contentImage="/images/destination.png"
              imgH={82}
              imgW={92}
            >
              Arriving at the destination port
            </Work>
          </div>
          <div className="mt-[244px]">
            <Work seq={12} contentImage="/images/clock.png" imgH={80} imgW={80}>
              Make an appointment
            </Work>
          </div>
        </div>

        {/* colum4 arrows again */}

        <div className="">
          <div className="ml-[34px] mr-[17px] mt-[150px]">
            <Image
              src="/images/long_right_arrow.png"
              alt="arrow"
              width={200}
              height={25}
              className="h-[18.57px] w-[158.91px]"
            />
          </div>
          <div className="ml-[34px] mr-[17px] mt-[544px]">
            <Image
              src="/images/left_arrow.png"
              alt="arrow"
              width={200}
              height={25}
              className="h-[18.57px] w-[158.91px]"
            />
          </div>
          <div className="ml-[34px] mr-[17px] mt-[548px]">
            <Image
              src="/images/long_right_arrow.png"
              alt="arrow"
              width={200}
              height={25}
              className="h-[18.57px] w-[158.91px]"
            />
          </div>
          <div className="ml-[34px] mr-[17px] mt-[497px]">
            <Image
              src="/images/left_arrow.png"
              alt="arrow"
              width={200}
              height={25}
              className="h-[18.57px] w-[158.91px]"
            />
          </div>
        </div>
        {/* works again */}

        <div className="flex flex-col items-center">
          <div>
            <Work
              seq={3}
              contentImage="/images/warehouse.png"
              imgH={93}
              imgW={93}
            >
              Warehouse receiving
            </Work>
          </div>

          <Image
            alt="down arrow"
            className="mt-[39px] h-[138.26px] w-[16px]"
            src="/images/down_arrow.png"
            width={100}
            height={150}
          />

          <div className="mt-[42px]">
            <Work
              seq={4}
              contentImage="/images/barcode.png"
              imgH={81}
              imgW={112}
            >
              Adding barcode, FBA label and packaging (if need)
            </Work>
          </div>

          {/*  //dummy */}
          {/* <div className='bg-[var(--blue)] h-[138.26px] w-[3px] mt-[39px]' /> */}

          <Image
            alt="down arrow"
            className="mt-[39px] h-[138.26px] w-[16px] opacity-0"
            src="/images/down_arrow.png"
            width={100}
            height={150}
          />

          <div className="mt-[42px]">
            <Work seq={9} contentImage="/images/clear.png" imgH={91} imgW={91}>
              Customs clearance
            </Work>
          </div>
          <Image
            alt="down arrow"
            className=" mt-[39px] h-[138.26px] w-[16px]"
            src="/images/down_arrow.png"
            width={100}
            height={150}
          />

          <div className="mt-[60px]">
            <Work
              seq={10}
              contentImage="/images/uploading.png"
              imgW={85}
              imgH={97}
            >
              Unloading the cargo
            </Work>
          </div>
        </div>

        {/* <div className='flex items-center ml-[34px] mr-[17px]'>
                    <Image src='/images/long_right_arrow.png' alt='arrow' width={200} height={25} className="w-[158.91px] h-[18.57px]" />
                </div>


                <Work seq={2} contentImage="/images/inspection.png" arrowImage='/images/long_right_arrow.png'>
                    Inspection (if need)
                </Work>
                <div className='flex items-center ml-[34px] mr-[17px]'>
                    <Image src='/images/long_right_arrow.png' alt='arrow' width={200} height={25} className="w-[158.91px] h-[18.57px]" />
                </div>
                <Work seq={3} contentImage="/images/warehouse.png" >
                    Pick up cargo from the
                    supplier or purchasing
                    product for our clients.
                </Work> */}
      </div>

      <Image
        src="/images/right_corner.png"
        alt="corner"
        width={500}
        height={500}
        className="absolute bottom-0 right-0 h-[443.12px] w-[539px]"
      />

      <div className="w-full bg-gray-100 xl:h-[96px]" />
    </main>
  )
}
