import * as React from 'react'
import Image from 'next/image'
import Description from '@/components/Description'
import Contact from '@/components/Contact'

interface Props {

}
export default function AboutPage({}: Props) {
    return (
        <main className='bg-white'>
            <section className='flex items-center items-center items-start pl-[70px] pr-[95px] pt-[67px] space-x-[62px]'>
                <Image src='/images/about_us_person.png' alt='person' height={600} width={750}
                    className='max-w-[495px] max-h-[550px] bg-cover flex-1'
                />
                <div className='w-[50%] flex-1'>
                    <h3 className='text-center font-bold text-[var(--blue)] text-xl'>About us</h3>
                    <div className='space-y-2 relative'>
                        <p className='text-[14px] text-[#2F2F2F] leading-[30px] tracking-[0.02em]'>
                            Superunion is an international shipping agency, we are dedicate to providing secure, fast and low-cost international freight shipping service from China to the world, especially for door-to-door delivery for cross-border E-commerce business.
                        </p>
                        <p className='text-[14px] text-[#2F2F2F] leading-[30px] tracking-[0.02em]'>
                            Our headquarters is located in Shenzhen, the center of the Pear River Delta, one of China’s most important regions for export and manufacturing, as well as the nearest and major port in China.
                        </p>
                        <p className='text-[14px] text-[#2F2F2F] leading-[30px] tracking-[0.02em]'>
                            After years of exploring and developing, our team has accumulatd extensive experience and professional knowledges in providing suitable logistics solutions and dealing with various challenge. We believe that teamwork and collaboration are crucial for success, and that’s why we work closely with our clients to understand their needs and provide customized solutions that meet their specific requirements. We also prioritize customer satisfaction, and we strive to provide our clients with the best possible experience.
                        </p>
                        <p className='text-[14px] text-[#2F2F2F] leading-[30px] racking-[0.02em]'>
                            Our services include sea freight, air freight, express, inspection, FBA preparation, short-term storage, logistics consulting, customs brokerage. Whether you’re a large enterprise or a start-up, we have the skills and experience to help you achieve your goals.
                        </p>
                        <div className='absolute -right-[18px] top-[35px] w-[7px] h-[66px] bg-[#0052D9]
                                        ' />
                    </div>
                </div>
            </section>

            <div className='mt-[120px]'>
                <Description title='Why Choose US' className='text-xl'>
                    <div className='grid grid-cols-3 gap-14 mt-[21px]'>
                        <div className=
                            'border h-[400px] flex hover:scale-[1.03] transition-all duration-200 hover:border-[#0052D9] flex-col items-center pt-[43px] space-y-[30px]'
                        >
                            <Image src='/images/one_stop.png' alt='one stop' width={80} height={60}
                                className='h-[60px] w-[60px]' />
                            <button className='w-[200px] h-[40px] text-[18px] bg-[#0052D9] text-white outline-none'>
                                One stop solution
                            </button>
                            <p className='
                                          leading-[2em] text-[#2F2F2F] w-[280px] text-[13px] 
                                          '>
                                Includes purchasing product(such as Alibaba), picking up cargo, inspection, temporary storage, FBA preparation, customs declaration and clearance, deliver to Amazon warehouse or other destination address.
                            </p>
                        </div>

                        <div className=
                            'border hover:border-[#0052D9] h-[400px] flex flex-col items-center pt-[43px] space-y-[30px] hover:scale-[1.03] transition-all duration-200'
                        >
                            <Image src='/images/high_quality.png' alt='one stop' width={80} height={60}
                                className='h-[60px] w-[60px]' />
                            <button className='w-[200px] h-[40px] text-[18px] bg-[#0052D9] text-white outline-none'>
                                High quality service
                            </button>
                            <p className='leading-[2em] text-[#2F2F2F] w-[280px] text-[13px]'>
                                We will assign you a personal advisor who will communicate with you anytime to keep you updated on the progress of your cargo and answer any questions you may have.
                            </p>
                        </div>
                        <div className='border hover:border-[#0052D9] h-[400px] flex flex-col items-center pt-[43px] space-y-[30px] transtion-all duration-200 hover:scale-[1.03]'>
                            <Image src='/images/hidden.png' alt='no hidden' width={80} height={60}
                                className='h-[60px] w-[60px]' />
                            <button className='w-[200px] h-[40px] text-[18px] bg-[#0052D9] text-white outline-none'>
                                No hidden charges
                            </button>
                            <p className='leading-[2em] text-[#2F2F2F] w-[280px] text-[13px]'>
                                All-inclusive pricing, once we have provided you a formal quote, the price will not change, you don’t have to worry about any additional fees after the shipment begins.
                            </p>
                        </div>
                    </div>
                </Description>
            </div>

            {/* contact */}
            <div className='mt-[120px] pb-[50px]'>

                <Description title='Contact us' className='font-semibold text-[32px]'>

                    <div className='flex gap-[77px] mt-[57px]'>
                        <Contact />
                        <div className='text-[#333333] w-[50%]'>
                            <p className='pt-[text-[var(--blue)] text-xl'>Send an email here to get free consulting and quote:</p>
                            <div className='flex space-x-[15px] items-center mt-[25px] mb-[31px]'>
                                <Image src='/images/message.png' width={20} height={20} alt='message'
                                    className='h-4 w-4'
                                />
                                <p className='text-[16px]'>Email：overseas@superunionlogistics.com</p>
                            </div>
                            <div className='flex space-x-[15px] items-center mt-[31px] mb-[32px]'>
                                <Image src='/images/phone.png' width={20} height={20} alt='message'
                                    className='h-4 w-4'
                                />
                                <p className='text-[16px]'>Telephone: +86 19159157982</p>
                            </div>
                            <div className='flex space-x-[15px] items-center mt-[25px] mb-[31px]'>
                                <Image src='/images/phone.png' width={20} height={20} alt='message'
                                    className='h-4 w-4'
                                />
                                <p className='text-[16px]'>Whatsapp/Wechat: +86 19159157982</p>
                            </div>
                            <div className='flex space-x-[15px] items-center mt-[25px] mb-[19px]'>
                                <Image src='/images/scan.png' width={20} height={20} alt='message'
                                    className='h-4 w-4'
                                />
                                <p className='text-[16px] text-[var(--blue)]'>Mobile scan code to add friends</p>
                            </div>
                            <div className='inline-flex space-x-6 '>
                                <Image src="/images/code0.png" alt='wechat code' height={950} width={1000} className='object-cover w-[97px] h-[133px]' />
                                <Image src="/images/code1.png" alt='wechat code' height={950} width={1000} className='object-cover
                                        w-[97px] h-[133px]' />
                            </div>
                            <p className='text-[14px] py-[19px]'>
                                Contact us：We are excited to hear from you!</p>
                            <Image src='/images/location.png' alt='location' className='
                                    h-[240px] w-[484px] object-cover' height={600} width={650} />
                            <div className='flex items-center space-x-[10px] mt-[16px]'>
                                <Image src='/images/lo.png' width={20} height={20} alt='message'
                                    className='h-4 w-4'
                                />
                                <p className='text-[14px]'>公司地址：深圳市……</p>
                            </div>
                        </div>
                    </div>

                </Description>
            </div>
            <div className='bg-gray-100 h-[88px]' />
        </main>
    )
}
