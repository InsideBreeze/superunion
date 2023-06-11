import * as React from 'react'
import Image from 'next/image'
import Description from '@/components/Description'
import Contact from '@/components/Contact'

interface Props {}
export default function AboutPage({}: Props) {
  return (
    <main className="bg-white">
      <section className="flex items-start items-center items-center space-x-[62px] pl-[70px] pr-[95px] pt-[67px]">
        <Image
          src="/images/about_us_person.png"
          alt="person"
          height={600}
          width={750}
          className="max-h-[550px] max-w-[495px] flex-1 bg-cover"
        />
        <div className="w-[50%] flex-1">
          <h3 className="text-center text-xl font-bold text-[var(--blue)]">
            About us
          </h3>
          <div className="relative space-y-2">
            <p className="text-[14px] leading-[30px] tracking-[0.02em] text-[#2F2F2F]">
              Superunion is an international shipping agency, we are dedicate to
              providing secure, fast and low-cost international freight shipping
              service from China to the world, especially for door-to-door
              delivery for cross-border E-commerce business.
            </p>
            <p className="text-[14px] leading-[30px] tracking-[0.02em] text-[#2F2F2F]">
              Our headquarters is located in Shenzhen, the center of the Pear
              River Delta, one of China’s most important regions for export and
              manufacturing, as well as the nearest and major port in China.
            </p>
            <p className="text-[14px] leading-[30px] tracking-[0.02em] text-[#2F2F2F]">
              After years of exploring and developing, our team has accumulatd
              extensive experience and professional knowledges in providing
              suitable logistics solutions and dealing with various challenge.
              We believe that teamwork and collaboration are crucial for
              success, and that’s why we work closely with our clients to
              understand their needs and provide customized solutions that meet
              their specific requirements. We also prioritize customer
              satisfaction, and we strive to provide our clients with the best
              possible experience.
            </p>
            <p className="racking-[0.02em] text-[14px] leading-[30px] text-[#2F2F2F]">
              Our services include sea freight, air freight, express,
              inspection, FBA preparation, short-term storage, logistics
              consulting, customs brokerage. Whether you’re a large enterprise
              or a start-up, we have the skills and experience to help you
              achieve your goals.
            </p>
            <div
              className="absolute -right-[18px] top-[35px] h-[66px] w-[7px] bg-[#0052D9]
                                        "
            />
          </div>
        </div>
      </section>

      <div className="mt-[120px]">
        <Description title="Why Choose US" className="text-xl">
          <div className="mt-[21px] grid grid-cols-3 gap-14">
            <div className="flex h-[400px] flex-col items-center space-y-[30px] border pt-[43px] transition-all duration-200 hover:scale-[1.03] hover:border-[#0052D9]">
              <Image
                src="/images/one_stop.png"
                alt="one stop"
                width={80}
                height={60}
                className="h-[60px] w-[60px]"
              />
              <button className="h-[40px] w-[200px] bg-[#0052D9] text-[18px] text-white outline-none">
                One stop solution
              </button>
              <p
                className="
                                          w-[280px] text-[13px] leading-[2em] text-[#2F2F2F] 
                                          "
              >
                Includes purchasing product(such as Alibaba), picking up cargo,
                inspection, temporary storage, FBA preparation, customs
                declaration and clearance, deliver to Amazon warehouse or other
                destination address.
              </p>
            </div>

            <div className="flex h-[400px] flex-col items-center space-y-[30px] border pt-[43px] transition-all duration-200 hover:scale-[1.03] hover:border-[#0052D9]">
              <Image
                src="/images/high_quality.png"
                alt="one stop"
                width={80}
                height={60}
                className="h-[60px] w-[60px]"
              />
              <button className="h-[40px] w-[200px] bg-[#0052D9] text-[18px] text-white outline-none">
                High quality service
              </button>
              <p className="w-[280px] text-[13px] leading-[2em] text-[#2F2F2F]">
                We will assign you a personal advisor who will communicate with
                you anytime to keep you updated on the progress of your cargo
                and answer any questions you may have.
              </p>
            </div>
            <div className="transtion-all flex h-[400px] flex-col items-center space-y-[30px] border pt-[43px] duration-200 hover:scale-[1.03] hover:border-[#0052D9]">
              <Image
                src="/images/hidden.png"
                alt="no hidden"
                width={80}
                height={60}
                className="h-[60px] w-[60px]"
              />
              <button className="h-[40px] w-[200px] bg-[#0052D9] text-[18px] text-white outline-none">
                No hidden charges
              </button>
              <p className="w-[280px] text-[13px] leading-[2em] text-[#2F2F2F]">
                All-inclusive pricing, once we have provided you a formal quote,
                the price will not change, you don’t have to worry about any
                additional fees after the shipment begins.
              </p>
            </div>
          </div>
        </Description>
      </div>

      {/* contact */}
      <div className="mt-[120px] pb-[50px]">
        <Description title="Contact us" className="text-[32px] font-semibold">
          <div className="mt-[57px] flex gap-[77px]">
            <Contact />
            <div className="w-[50%] text-[#333333]">
              <p className="pt-[text-[var(--blue)] text-xl">
                Send an email here to get free consulting and quote:
              </p>
              <div className="mb-[31px] mt-[25px] flex items-center space-x-[15px]">
                <Image
                  src="/images/message.png"
                  width={20}
                  height={20}
                  alt="message"
                  className="h-4 w-4"
                />
                <p className="text-[16px]">
                  Email：overseas@superunionlogistics.com
                </p>
              </div>
              <div className="mb-[32px] mt-[31px] flex items-center space-x-[15px]">
                <Image
                  src="/images/phone.png"
                  width={20}
                  height={20}
                  alt="message"
                  className="h-4 w-4"
                />
                <p className="text-[16px]">Telephone: +86 19159157982</p>
              </div>
              <div className="mb-[31px] mt-[25px] flex items-center space-x-[15px]">
                <Image
                  src="/images/phone.png"
                  width={20}
                  height={20}
                  alt="message"
                  className="h-4 w-4"
                />
                <p className="text-[16px]">Whatsapp/Wechat: +86 19159157982</p>
              </div>
              <div className="mb-[19px] mt-[25px] flex items-center space-x-[15px]">
                <Image
                  src="/images/scan.png"
                  width={20}
                  height={20}
                  alt="message"
                  className="h-4 w-4"
                />
                <p className="text-[16px] text-[var(--blue)]">
                  Mobile scan code to add friends
                </p>
              </div>
              <div className="inline-flex space-x-6 ">
                <Image
                  src="/images/code0.png"
                  alt="wechat code"
                  height={950}
                  width={1000}
                  className="h-[133px] w-[97px] object-cover"
                />
                <Image
                  src="/images/code1.png"
                  alt="wechat code"
                  height={950}
                  width={1000}
                  className="h-[133px]
                                        w-[97px] object-cover"
                />
              </div>
              <p className="py-[19px] text-[14px]">
                Contact us：We are excited to hear from you!
              </p>
              <Image
                src="/images/location.png"
                alt="location"
                className="
                                    h-[240px] w-[484px] object-cover"
                height={600}
                width={650}
              />
              <div className="mt-[16px] flex items-center space-x-[10px]">
                <Image
                  src="/images/lo.png"
                  width={20}
                  height={20}
                  alt="message"
                  className="h-4 w-4"
                />
                <p className="text-[14px]">公司地址：深圳市……</p>
              </div>
            </div>
          </div>
        </Description>
      </div>
      <div className="h-[88px] bg-gray-100" />
    </main>
  )
}
