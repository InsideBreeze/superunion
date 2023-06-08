import Description from "@/components/Description";
import ImageDescription from "@/components/ImageDescription";
import { RxAvatar } from 'react-icons/rx'
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

                <div className="mt-[39px] xl:mt-[104px]">
                    <Description title="Value Added service" className="text-[8px] xl:text-xl font-bold">
                        <div className="mt-[9px] xl:mt-[24px] grid grid-cols-3 xl:gap-[56px]">
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

                <div className="mt-[33px] xl:mt-[89px] overflow-x-hidden">
                    <Description title="Our Clients Satisfaction" className="text-[8px] xl:text-xl font-bold">

                        <div className="inline-flex xl:space-x-[48px] xl:mt-8 mt-3 space-x-[18px]">
                            <div className="xl:h-[268px] xl:w-[534px] w-[200px] h-[101px] shadow-xl">
                                <div className="xl:pl-[17px] xl:pr-[15px] xl:pt-[28px] pl-[6px] pr-[6px] pt-[14px]">
                                    <p className="xl:text-[16px] text-[5px] text-[#2F2F2F] leading-[2em]">
                                        I am a new seller on Amazon and have spent a long time searching for a reliable and affordable logistics provider. My friend recommended Superunion to me and I am glad I took his advice. Their custom manager is very patient and answered my questions in details. I will definitely use Superunion to shipping cargo from now on.
                                    </p>
                                    <div className="flex items-center xl:space-x-1 mt-2">
                                        <RxAvatar className="xl:h-9 xl:w-9 h-3" />
                                        <div className="">
                                            <p className="text-[6px] xl:text-base">
                                            Archie David
                                            </p>
                                            <p className="text-[3px] xl:text-[6px]">⭐⭐⭐⭐⭐</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:h-[268px] xl:w-[534px] w-[200px] h-[101px] shadow-xl">
                                <div className="xl:pl-[17px] xl:pr-[15px] xl:pt-[28px] pl-[6px] pr-[6px] pt-[14px]">
                                    <p className="xl:text-[16px] text-[5px] text-[#2F2F2F] leading-[2em]">
                                        Superunion is the best. If there are any updates in the delivery, they will inform me right away. If I have any questions, they always respond quickly. My goods arrived into Amazon warehouse within estimated delivery time. I would highly recommend Superunion to my other friends.
                                    </p>
                                    <div className="flex xl:mt-7 items-center xl:space-x-1 mt-4 space-x-[2px]">
                                        <RxAvatar className="xl:h-9 xl:w-9 h-3" />
                                        <div>
                                            <p className="text-[6px] xl:text-base">
                                            Emily Nuckols
                                            </p>
                                            <p className="text-[3px] xl:text-[6px]">⭐⭐⭐⭐⭐</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:h-[268px] xl:w-[534px] w-[200px] h-[101px] shadow-md">
                                <div className="xl:pl-[17px] xl:pr-[15px] xl:pt-[28px] pl-[6px] pr-[6px] pt-[14px]">
                                    <p className="xl:text-[16px] text-[5px] text-[#2F2F2F] leading-[2em]">
                                        I have been working with Superunion for a year now and their service has always been excellent. Their prices are also competitive compared to other freight forwarder. I hope to have more cooperation in the future.
                                    </p>
                                    <div className="flex xl:mt-[60px] mt-[22px] items-center xl:space-x-1 space-x-[2px]">
                                        <RxAvatar className="xl:h-9 xl:w-9 h-4 w-4" />
                                        <div >
                                            <p className="text-[6px] xl:text-base">Felix Ortiz</p>
                                            <p className="xl:text-[6px] text-[3px]">⭐⭐⭐⭐⭐</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Description>
                </div>
            </div>
        </main>
    )
}
