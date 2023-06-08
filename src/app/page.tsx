import Description from "@/components/Description";
import ImageDescription from "@/components/ImageDescription";
import Image from 'next/image'

export default function Home() {
    return (
        <main className="h-full">
            <div className="mt-[32px] xl:mt-[86px]">
                <Description title="Shipping method" className="text-[8px] xl:text-xl font-bold">
                    <div className="mt-[9px] xl:mt-[24px] grid grid-cols-3">
                        <div className="xl:w-[343px] xl:h-[552px] w-[129px] h-[207px] border border-[red] ">
                            <div className="relative">
                                <Image src='/images/sea.png' alt='sea' height={420} width={500} className="xl:h-[254px] h-[95px] w-full object-cover" />
                                <div className="xl:text-[28px] text-[11px] text-white grid place-items-center absolute left-0 right-0 top-[67px] bottom-0 xl:top-[180px] bg-white bg-opacity-50">
                                    Sea LCL and FCL
                                </div>
                            </div>
                            <p className="text-[5px] text-[#2F2F2F] px-[5px] pt-3 leading-[1.5em] tracking-[0.1em] xl:tracking-[0.02em] xl:text-[13px] xl:px-[13px] xl:pt-8 ">
                                We offer fixed vessels every week, loading the full containers or consolidate the LCL shipments, then deliver the cargo to the Amazon fulfillment center or other destination address in US, Europe, Japan, Canada and Australia. We also can help you solve the customsclearance and duty/tax payment.
                            </p>
                            <div>
                            </div>
                        </div>
                        <ImageDescription caption="Air freight" image='/images/airplane.png'>
                            We offer fixed vessels every week, loading the full containers or consolidate the LCL shipments, then deliver the cargo to the Amazon fulfillment center or other destination address in US, Europe, Japan, Canada and Australia. We also can help you solve the customsclearance and duty/tax payment.
                        </ImageDescription>

                        <ImageDescription caption="Express" image="/images/express.png">
                            We offer fixed vessels every week, loading the full containers or consolidate the LCL shipments, then deliver the cargo to the Amazon fulfillment center or other destination address in US, Europe, Japan, Canada and Australia. We also can help you solve the customsclearance and duty/tax payment.
                        </ImageDescription>
                    </div>
                </Description>
            </div>
        </main>
    )
}
