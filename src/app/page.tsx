import Description from '@/components/Description'
import ImageDescription from '@/components/ImageDescription'

import Image from 'next/image'
import React from 'react'
import Rating from '@/components/Rating'

export default function Home() {
  return (
    <main className="flex-1">
      <div className="relative  bg-white pb-[107px] pt-[86px] ">
        <Description title="Shipping method" className="text-xl font-bold">
          <div
            className="mt-[24px] grid grid-cols-3
                                    gap-[56px]"
          >
            <ImageDescription caption="Sea LCL and FCL" image="/images/sea.png">
              We offer fixed vessels every week, loading the full containers or
              consolidate the LCL shipments, then deliver the cargo to the
              Amazon fulfillment center or other destination address in US,
              Europe, Japan, Canada and Australia. We also can help you solve
              the customsclearance and duty/tax payment.
            </ImageDescription>
            <ImageDescription
              caption="Air freight"
              image="/images/airplane.png"
            >
              We offer fixed vessels every week, loading the full containers or
              consolidate the LCL shipments, then deliver the cargo to the
              Amazon fulfillment center or other destination address in US,
              Europe, Japan, Canada and Australia. We also can help you solve
              the customsclearance and duty/tax payment.
            </ImageDescription>
            <ImageDescription caption="Express" image="/images/express.png">
              We offer fixed vessels every week, loading the full containers or
              consolidate the LCL shipments, then deliver the cargo to the
              Amazon fulfillment center or other destination address in US,
              Europe, Japan, Canada and Australia. We also can help you solve
              the customsclearance and duty/tax payment.
            </ImageDescription>
          </div>
        </Description>

        <div className="mt-[104px]">
          <Description
            title="Value Added service"
            className="text-xl font-bold"
          >
            <div
              className="mt-[24px] grid grid-cols-3
                                    gap-[56px] "
            >
              <ImageDescription
                caption="Inspection & FBA Preparation"
                image="/images/insepection.png"
              >
                We are specialized in handling inventory for Amazon FBA sellers,
                includes inspecting the product, barcode and FBA labeling,
                changing packaging box, palletizing to fulfill the requirements
                of Amazon. So that we can free our clients from handling
                inventory and you can focus more on growing your business.
              </ImageDescription>

              <ImageDescription
                caption="Temporary storage"
                image="/images/temporary.png"
              >
                We offer temporary storage services for our clients in China and
                overseas warehouse with a reasonable price.
              </ImageDescription>

              <ImageDescription
                caption="Free Consulting"
                image="/images/consulting.png"
              >
                Our team has been dedicated in international shipping for many
                years and gained much professional knowledge, we can offer free
                consulting services related to customs declaration, customs
                clearance, VAT application, Amazon sellers’ guidance, etc.
              </ImageDescription>
            </div>
          </Description>
        </div>
        <Rating />
      </div>
      <div className="flex h-[246px] flex-col items-center space-y-[15px] border bg-gray-100">
        <p className="mt-[96px] text-[25px] text-[#0052D9]">Cargo Tracking</p>
        <div className="relative flex">
          <div
            className="relative flex h-[60px] w-[480px] items-center justify-center
                                    border-[2px] border-[var(--blue)] bg-white"
          >
            <p className="text-[24px] text-[var(--blue)]">
              https://www.google.com.hk
            </p>
          </div>
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
            className="relative top-[50%] h-9 w-9 translate-x-[-48px] translate-y-[-50%] cursor-pointer"
          />
        </div>
      </div>
    </main>
  )
}
