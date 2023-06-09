import * as React from 'react'
import Image from 'next/image'
import Work from '@/components/Work'
{/* <div className='flex items-center justify-center h-full  ml-[34px] mr-[17px]'>
            <Image src={arrowImage} alt='arrow' width={200} height={25} className="translate-y-[50px] w-[158.91px] h-[18.57px]"/>
                    </div> */}

export default function Workflow() {
    return (
        <main className=' bg-white relative'>
            <div className='flex items-center justify-center h-full z-1000 mt-[42px] mb-8'>
            <button className=' bg-[var(--blue)] text-white
                               h-[160px] w-[29px] xl:w-[427px] xl:h-[78px]
                               font-bold xl:text-[44px] outline-none'>Our Workflow</button>
            </div>

            <Image src="/images/workflow_person.png" alt='person' width={800} height={800} className='absolute left-0 top-0 xl:h-[650px] xl:w-[650px]' />

            <div className='flex px-[130px] w-full pb-[57px]'>
                <div className='flex flex-col items-center'>
                    <div>
                        <Work seq={1} contentImage="/images/cargo.png" arrowImage='/images/long_right_arrow.png'>
                            Pick up cargo from the
                            supplier or purchasing
                            product for our clients.
                        </Work>
                    </div>
                    <div className='mt-[214px]'>
                        <Work seq={6} contentImage="/images/inspection.png" arrowImage='/images/long_right_arrow.png'>
                            Pick up cargo from the
                            supplier or purchasing
                            product for our clients.
                        </Work>
                    </div>

                    {/*  //dummy */}
                    {/* <div className='bg-[var(--blue)] h-[138.26px] w-[3px] mt-[39px]' /> */}
                    <Image alt='down arrow' className='mt-[39px] h-[138.26px] w-[16px]' src='/images/down_arrow.png' width={100} height={150} />

                    <div className='mt-[42px]'>
                        <Work seq={7} contentImage="/images/boat.png" arrowImage='/images/long_right_arrow.png'>
                            Shipping by sea or by air
                        </Work>
                    </div>
                    <div className='mt-[244px]'>
                        <Work seq={12} contentImage="/images/track.png" arrowImage='/images/long_right_arrow.png'>
                            Dispatch the cargo by truck or by carrier
                        </Work>
                    </div>


                </div>
                {/* colum2 */}

                <div className=''>

                    <div className='mr-[17px] mt-[150px] ml-[34px]'>
                        <Image src='/images/long_right_arrow.png' alt='arrow' width={200} height={25} className="w-[158.91px] h-[18.57px]" />
                    </div>
                    <div className='mr-[17px] ml-[34px] mt-[544px]'>
                        <Image src='/images/left_arrow.png' alt='arrow' width={200} height={25} className="w-[158.91px] h-[18.57px]" />
                    </div>
                    <div className='mr-[17px] ml-[34px] mt-[548px]'>
                        <Image src='/images/long_right_arrow.png' alt='arrow' width={200} height={25} className="w-[158.91px] h-[18.57px]" />
                    </div>
                    <div className='mr-[17px] ml-[34px] mt-[497px]'>
                        <Image src='/images/left_arrow.png' alt='arrow' width={200} height={25} className="w-[158.91px] h-[18.57px]" />
                    </div>

                </div>


                {/* colum3 */}
                <div className='flex flex-col items-center'>
                    <div>
                        <Work seq={2} contentImage="/images/inspection.png" arrowImage='/images/long_right_arrow.png'>
                            Inspection (if need)
                        </Work>
                    </div>
                    <div className='mt-[214px]'>
                        <Work seq={5} contentImage="/images/loading_cargo.png" arrowImage='/images/long_right_arrow.png'>
                            Loading the cargo
                        </Work>
                    </div>

                    {/*  //dummy */}
                    {/* <div className='bg-[var(--blue)] h-[138.26px] w-[3px] mt-[39px]' /> */}
                    <Image alt='down arrow' className='opacity-0 mt-[39px] h-[138.26px] w-[16px]' src='/images/down_arrow.png' width={100} height={150} />

                    <div className='mt-[42px]'>
                        <Work seq={8} contentImage="/images/destination.png" arrowImage='/images/long_right_arrow.png'>
                            Arriving at the destination port
                        </Work>
                    </div>
                    <div className='mt-[244px]'>
                        <Work seq={12} contentImage="/images/clock.png" arrowImage='/images/long_right_arrow.png'>
                            Make an appointment
                        </Work>
                    </div>
                </div>


                {/* colum4 arrows again */}

                                <div className=''>

                    <div className='mr-[17px] mt-[150px] ml-[34px]'>
                        <Image src='/images/long_right_arrow.png' alt='arrow' width={200} height={25} className="w-[158.91px] h-[18.57px]" />
                    </div>
                    <div className='mr-[17px] ml-[34px] mt-[544px]'>
                        <Image src='/images/left_arrow.png' alt='arrow' width={200} height={25} className="w-[158.91px] h-[18.57px]" />
                    </div>
                    <div className='mr-[17px] ml-[34px] mt-[548px]'>
                        <Image src='/images/long_right_arrow.png' alt='arrow' width={200} height={25} className="w-[158.91px] h-[18.57px]" />
                    </div>
                    <div className='mr-[17px] ml-[34px] mt-[497px]'>
                        <Image src='/images/left_arrow.png' alt='arrow' width={200} height={25} className="w-[158.91px] h-[18.57px]" />
                    </div>

                </div>
                    {/* works again */}

                                    <div className='flex flex-col items-center'>
                    <div>
                        <Work seq={3} contentImage="/images/warehouse.png" arrowImage='/images/long_right_arrow.png'>
                            Warehouse receiving
                        </Work>
                    </div>

                    <Image alt='down arrow' className='mt-[39px] h-[138.26px] w-[16px]' src='/images/down_arrow.png' width={100} height={150} />

                    <div className='mt-[42px]'>
                        <Work seq={4} contentImage="/images/barcode.png" arrowImage='/images/long_right_arrow.png'>
                            Adding barcode, FBA label and packaging (if need)
                        </Work>
                    </div>

                    {/*  //dummy */}
                    {/* <div className='bg-[var(--blue)] h-[138.26px] w-[3px] mt-[39px]' /> */}

    <Image alt='down arrow' className='opacity-0 mt-[39px] h-[138.26px] w-[16px]' src='/images/down_arrow.png' width={100} height={150} />

                    <div className='mt-[42px]'>
                        <Work seq={9} contentImage="/images/clear.png" arrowImage='/images/long_right_arrow.png'>
                            Customs clearance
                        </Work>
                    </div>
                    <Image alt='down arrow' className=' mt-[39px] h-[138.26px] w-[16px]' src='/images/down_arrow.png' width={100} height={150} />

                    <div className='mt-[60px]'>
                        <Work seq={10} contentImage="/images/uploading.png" arrowImage='/images/long_right_arrow.png'>
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

            <Image src="/images/right_corner.png" alt='corner' width={500} height={500}
                   className='w-[539px] h-[443.12px] absolute right-0 bottom-0' />

            <div className='xl:h-[96px] bg-gray-100 w-full' />


        </main>
    )
}
