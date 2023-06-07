import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai'
import { BsTelephoneFill, BsInstagram } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import Image from 'next/image'
export default function Footer() {
    return (
        <footer className="bg-[rgba(49,108,206,0.86)] h-[86px] xl:h-[228px] grid grid-cols-3 w-full">
            <div className="grid place-items-center">
                superunion
            </div>
            <div className="grid place-items-center">
                <div className="text-white">
                    <div className='flex xl:space-x-[15px] space-x-[6px] items-center mt-[9px] mb-3 xl:mt-[25px] xl:mb-[31px]'>
                        <MdEmail
                            className='text-white xl:h-5 xl:w-5 h-[6px] w-[6px]'
                        />

                        <p className='text-[6px] xl:text-[16px] whitespace-nowrap'>Email：overseas@superunionlogistics.com</p>
                    </div>

                    <div className='flex xl:space-x-[15px] space-x-[6px] items-center mt-[9px] mb-3 xl:mt-[31px] xl:mb-[32px]'>
                        <BsTelephoneFill
                            className='xl:h-5 xl:w-5 h-[6px] w-[6px] text-white'
                        />
                        <p className='text-[6px] xl:text-[16px]'>Telephone: +86 19159157982</p>
                    </div>
                    <div className='flex xl:space-x-[15px] space-x-[6px] items-center mt-[9px] mb-3 xl:mt-[25px] xl:mb-[31px]'>
                        <BsTelephoneFill
                            className='text-white xl:h-5 xl:w-5 h-[6px] w-[6px]'
                        />
                        <p className='text-[6px] xl:text-[16px]'>Whatsapp/Wechat: +86 19159157982</p>
                    </div>
                </div>
            </div>
            <div className="grid place-items-center">
                <div className='flex flex-col items-center space-y-2 xl:space-y-4'>
                    <p className='text-[8px] xl:text-xl text-white'>Follow Us</p>
                    {/* Icons */}
                    <div className='flex xl:space-x-[17px]'>
                        <AiFillInstagram className='text-white xl:w-11 xl:h-11     hover:cursor-pointer' />
                        <AiFillTwitterSquare className='text-white xl:w-11 xl:h-11 hover:cursor-pointer' />
                        <AiFillFacebook className='text-white xl:w-11 xl:h-11      hover:cursor-pointer' />
                        <AiFillLinkedin className='text-white xl:w-11 xl:h-11      hover:cursor-pointer' />

                    </div>
                </div>
            </div>
        </footer>
    )
}
