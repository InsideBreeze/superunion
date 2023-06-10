import Description from "@/components/Description";
import ImageDescription from "@/components/ImageDescription";

import Image from 'next/image'
import React from "react";
import Rating from "@/components/Rating";

export default function Home() {
    return (
        <main className="flex-1">
            <div className="pt-[32px] xl:pb-[107px] lg:pb-[86px] md:pb-[68px] sm:pb-[50px] pb-[40px] xl:pt-[86px] bg-white relative ">
                <Description title="Shipping method" className="text-[8px] xl:text-xl font-bold">
                    <div className="mt-[9px] xl:mt-[24px] grid md:grid-cols-3 sm:grid-cols-2 sm:gap-[20px]
                                    xl:gap-[56px] lg:gap-[45px] md:gap-[30px] gap-[40px]">
                        <ImageDescription caption="Sea LCL and FCL" image='/images/sea.png'>
                            We offer fixed vessels every week, loading the full containers or consolidate the LCL shipments, then deliver the cargo to the Amazon fulfillment center or other destination address in US, Europe, Japan, Canada and Australia. We also can help you solve the customsclearance and duty/tax payment.
                        </ImageDescription>
                        <ImageDescription caption="Air freight" image='/images/airplane.png'>
                            We offer fixed vessels every week, loading the full containers or consolidate the LCL shipments, then deliver the cargo to the Amazon fulfillment center or other destination address in US, Europe, Japan, Canada and Australia. We also can help you solve the customsclearance and duty/tax payment.
                        </ImageDescription>
                        <ImageDescription caption="Express" image="/images/express.png">
                            We offer fixed vessels every week, loading the full containers or consolidate the LCL shipments, then deliver the cargo to the Amazon fulfillment center or other destination address in US, Europe, Japan, Canada and Australia. We also can help you solve the customsclearance and duty/tax payment.
                        </ImageDescription>
                    </div>
                </Description>

                <div className="mt-[39px] xl:mt-[104px]">
                    <Description title="Value Added service" className="text-[8px] xl:text-xl font-bold">
                        <div className="mt-[9px] xl:mt-[24px] grid md:grid-cols-3 sm:grid-cols-2 sm:gap-[20px]
                                    xl:gap-[56px] lg:gap-[45px] md:gap-[30px] gap-[40px]">
                            <ImageDescription caption="Inspection & FBA Preparation" image="/images/insepection.png">
                                We are specialized in handling inventory for Amazon FBA sellers, includes inspecting the product, barcode and FBA labeling, changing packaging box, palletizing to fulfill the requirements of Amazon. So that we can free our clients from handling inventory and you can focus more on growing your business.
                            </ImageDescription>

                            <ImageDescription caption="Temporary storage" image="/images/temporary.png">
                                We offer temporary storage services for our clients in China and overseas warehouse with a reasonable price.
                            </ImageDescription>

                            <ImageDescription caption="Free Consulting" image="/images/consulting.png">
                                Our team has been dedicated in international shipping for many years and gained much professional knowledge, we can offer free consulting services related to customs declaration, customs clearance, VAT application, Amazon sellers’ guidance, etc.
                            </ImageDescription>
                        </div>
                    </Description>
                </div>
                <Rating />
            </div>
            <div className="border lg:h-[246px] lg:flex flex-col items-center bg-gray-100 lg:space-y-[15px] hidden ">
                <p className="lg:mt-[96px] text-[#0052D9] lg:text-[25px] sm:text-base">Cargo Tracking</p>
                <div className='flex relative'>
                    <div className="lg:w-[480px] lg:h-[60px] relative bg-white flex items-center justify-center border-[var(--blue)] border-[2px]">
                        <p className="text-[var(--blue)] lg:text-[24px]">https://www.google.com.hk</p>
                    </div>
                    <Image src="/images/rec.png" width={60} height={60} alt='rec'
                        className='h-[60px] w-[60px]' />
                    <Image src="/images/search.png" alt="search" width={36} height={36}
                        className='cursor-pointer h-9 w-9 relative top-[50%] translate-y-[-50%] translate-x-[-48px]'
                    />
                </div>

            </div>
        </main>
    )
}
