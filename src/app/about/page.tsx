import * as React from 'react'
import Image from 'next/image'
import Description from '@/components/Description'

interface Props {

}
export default function AboutPage({}: Props) {
    return (
        <main className=''>

            <section className='flex pl-[26px] pr-6 xl:pl-[70px] xl:pr-[95px] xl:mt-[67px] mt-[25px] xl:space-x-[62px] space-x-[23px]'>
                <Image src='/images/about_us_person.png' alt='person' height={600} width={750}
                    className='w-[180px] h-[230] xl:w-[495px] xl:h-[617px]'
                />
                <div className='w-[230px] xl:w-[560px] border border-[red]'>
                    <h3 className='text-center text-[8px] font-bold text-[var(--blue)] xl:text-xl mt-[6px] lg:mt-[16px]'>About us</h3>
                    <div className='space-y-1 lg:space-y-2 relative'>
                        <p className='text-[7px] lg:text-[14px] text-[#2F2F2F] leading-[1.5em] tracking-[0.01em] lg:leading-[30px] lg:tracking-[0.02em]'>
                            Superunion is an international shipping agency, we are dedicate to providing secure, fast and low-cost international freight shipping service from China to the world, especially for door-to-door delivery for cross-border E-commerce business.
                        </p>
                        <p className='text-[7px] lg:text-[14px] text-[#2F2F2F] leading-[1.5em] tracking-[0em] lg:leading-[30px] lg:tracking-[0.02em]'>
                            Our headquarters is located in Shenzhen, the center of the Pear River Delta, one of China’s most important regions for export and manufacturing, as well as the nearest and major port in China.
                        </p>
                        <p className='text-[7px] lg:text-[14px] text-[#2F2F2F] leading-[1.5em] tracking-[0em] lg:leading-[30px] lg:tracking-[0.02em]'>
                            After years of exploring and developing, our team has accumulatd extensive experience and professional knowledges in providing suitable logistics solutions and dealing with various challenge. We believe that teamwork and collaboration are crucial for success, and that’s why we work closely with our clients to understand their needs and provide customized solutions that meet their specific requirements. We also prioritize customer satisfaction, and we strive to provide our clients with the best possible experience.
                        </p>
                        <p className='text-[7px] lg:text-[14px] text-[#2F2F2F] leading-[1.5em] tracking-[0em] lg:leading-[30px] lg:tracking-[0.02em]'>
                            Our services include sea freight, air freight, express, inspection, FBA preparation, short-term storage, logistics consulting, customs brokerage. Whether you’re a large enterprise or a start-up, we have the skills and experience to help you achieve your goals.
                        </p>
                        <div className='absolute xl:-right-[18px] xl:top-[35px] xl:w-[7px] xl:h-[66px] bg-[#0052D9] top-[13px] -right-[7px] w-[3px] h-[33px]' />
                    </div>
                </div>
            </section>

            <section className='px-[26px] mt-[45px] xl:mt-[120px] xl:px-[70px]'>
                <Description title='Why Choose US'>
                    <div className='grid grid-cols-3 xl:gap-14 gap-[21px] mt-2 xl:mt-[21px]'>
                        <div className='border xl:h-[400px] h-[150px] flex flex-col items-center xl:pt-[43px] pt-4 xl:space-y-[30px] space-y-3'>
                            <Image src='/images/one_stop.png' alt='one stop' width={80} height={60}
                                className='h-6 w-6 xl:h-[60px] xl:w-[60px]' />
                            <button className='w-[75px] h-[15px] xl:w-[200px] xl:h-[40px] xl:text-[18px] text-[7px] bg-[#0052D9] text-white outline-none'>
                                One stop solution
                            </button>
                            <p className='w-[80px] text-[4px] leading-[2em] text-[#2F2F2F] xl:w-[280px] xl:text-[13px] xl:leading-[2em]'>
                                Includes purchasing product(such as Alibaba), picking up cargo, inspection, temporary storage, FBA preparation, customs declaration and clearance, deliver to Amazon warehouse or other destination address.
                            </p>
                        </div>
                        <div className='border xl:h-[400px] h-[150px] flex flex-col items-center xl:pt-[43px] pt-4 xl:space-y-[30px] space-y-3'>
                            <Image src='/images/high_quality.png' alt='one stop' width={80} height={60}
                                className='h-6 w-6 xl:h-[60px] xl:w-[60px]' />
                            <button className='w-[75px] h-[15px] xl:w-[200px] xl:h-[40px] xl:text-[18px] text-[7px] bg-[#0052D9] text-white outline-none'>
                                High quality service
                            </button>
                            <p className='w-[80px] text-[4px] leading-[2em] text-[#2F2F2F] xl:w-[280px] xl:text-[13px] xl:leading-[2em]'>
                                We will assign you a personal advisor who will communicate with you anytime to keep you updated on the progress of your cargo and answer any questions you may have.
                            </p>
                        </div>
                        <div className='border xl:h-[400px] h-[150px] flex flex-col items-center xl:pt-[43px] pt-4 xl:space-y-[30px] space-y-3'>
                            <Image src='/images/hidden.png' alt='no hidden' width={80} height={60}
                                className='h-6 w-6 xl:h-[60px] xl:w-[60px]' />
                            <button className='w-[75px] h-[15px] xl:w-[200px] xl:h-[40px] xl:text-[18px] text-[7px] bg-[#0052D9] text-white outline-none'>
                                No hidden charges
                            </button>
                            <p className='w-[80px] text-[4px] leading-[2em] text-[#2F2F2F] xl:w-[280px] xl:text-[13px] xl:leading-[2em]'>
                                All-inclusive pricing, once we have provided you a formal quote, the price will not change, you don’t have to worry about any additional fees after the shipment begins.
                            </p>
                        </div>
                    </div>
                </Description>
            </section>
            {/* contact */}
            <section className='flex'>
                <p className='h-10'>
                    La
                    </p>
            </section>

        </main>
    )
}
