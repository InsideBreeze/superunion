import Description from "@/components/Description";
import ImageDescription from "@/components/ImageDescription";
import Image from 'next/image'

export default function Home() {
    return (
        <main className="h-full">
            <div className="mt-[32px] xl:mt-[86px]">
                <Description title="Shipping method" className="text-[8px] xl:text-xl font-bold">
                    <div className="mt-[9px] xl:mt-[24px] grid grid-cols-3 xl:gap-[56px]">
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
            </div>
        </main>
    )
}
