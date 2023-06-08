import Image from 'next/image'
export default function Footer() {
    return (
        <footer className="bg-[rgba(49,108,206,0.86)] h-[86px] xl:h-[228px] grid grid-cols-3 mt-auto">
            <div className="flex items-center justify-center space-y-[22px] flex-col">
                <Image src="/images/logo_white.png" alt="logo white" height={50} width={50} className='h-[56.41px] w-[263.54px]' />
                <p className='text-[10px] text-white'>
                    @2023-2024 Superunion Corp Limited Shenzhen China
                </p>
            </div>
            <div className="grid place-items-center">
                <div className="text-white">
                    <div className='flex xl:space-x-[15px] space-x-[6px] items-center mt-[9px] mb-3 xl:mt-[25px] xl:mb-[31px]'>
                        <Image src="/images/white_email.png" className='xl:w-[16.09px] xl:h-[13.16px] h-[6px] w-[6px]' width={30} height={30} alt="ins" />
                        <p className='text-[6px] xl:text-[16px] whitespace-nowrap'>Email：overseas@superunionlogistics.com</p>
                    </div>

                    <div className='flex xl:space-x-[15px] space-x-[6px] items-center mt-[9px] mb-3 xl:mt-[31px] xl:mb-[32px]'>
                        <Image src="/images/white_phone.png" className='xl:w-[16.09px] xl:h-[13.16px] h-[6px] w-[6px]' width={30} height={30} alt="phone" />
                        <p className='text-[6px] xl:text-[16px]'>Telephone: +86 19159157982</p>
                    </div>
                    <div className='flex xl:space-x-[15px] space-x-[6px] items-center mt-[9px] mb-3 xl:mt-[25px] xl:mb-[31px]'>
                        <Image src="/images/white_phone.png" className='xl:w-[16.09px] xl:h-[13.16px] h-[6px] w-[6px]' width={30} height={30} alt="phone" />

                        <p className='text-[6px] xl:text-[16px]'>Whatsapp/Wechat: +86 19159157982</p>
                    </div>
                </div>
            </div>
            <div className="grid place-items-center">
                <div className='flex flex-col items-center space-y-2 xl:space-y-4'>
                    <p className='text-[8px] xl:text-xl text-white'>Follow Us</p>
                    {/* Icons */}
                    <div className='flex xl:space-x-[17px] space-x-[6px]'>
                        <Image src="/images/ins.png" alt="ins" className='xl:w-[46.24px] xl:h-[46.24px] w-[17px] h-[17px]' width={50} height={50} />
                        <Image src="/images/twitter.png" alt="ins" className='w-[17px] h-[17px] xl:w-[46.24px] xl:h-[46.24px]' width={50} height={50} />
                        <Image src="/images/facebook.png" alt="ins" className='w-[17px] h-[17px] xl:w-[46.24px] xl:h-[46.24px]' width={50} height={50} />
                        <Image src="/images/linkedin.png" alt="ins" className='w-[17px] h-[17px] xl:w-[46.24px] xl:h-[46.24px]' width={50} height={50} />
                    </div>
                </div>
            </div>
        </footer>
    )
}
