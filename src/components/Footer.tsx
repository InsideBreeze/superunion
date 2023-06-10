import Image from 'next/image'
export default function Footer() {

    return (
        <footer className="items-center bg-[rgba(49,108,206,0.86)] px-10 lg:h-[228px] h-[180px]  flex justify-between mt-auto">
            <div className="flex items- justify-center space-y-4 flex-col">
                <Image src="/images/logo_white.png" alt="logo white" height={50} width={50} className='md:h-[60px] md:w-[260px] h-[50px] w-[200px]' />
                <p className='text-white text-sm'>
                    @2023-2024 Superunion Corp Limited Shenzhen China
                </p>
            </div>
                <div className="text-white hidden md:block">
                    <div className='flex lg:space-x-[15px] space-x-[6px] items-center mt-[9px] mb-3 '>
                        <Image src="/images/white_email.png" className='lg:w-4 lg:h-4  md:w-3 md:h-3 h-2 w-2' width={30} height={30} alt="ins" />
                        <p className='lg:text-[16px] md:text-sm whitespace-nowrap'>Email：overseas@superunionlogistics.com</p>
                    </div>

                    <div className='flex lg:space-x-[15px] space-x-[6px] items-center mt-[9px] mb-3 xl:mt-[31px] xl:mb-[32px]'>
                        <Image src="/images/white_phone.png" className='lg:w-4 lg:h-4 md:w-3 md:h-3 h-2 w-2' width={30} height={30} alt="phone" />
                        <p className='md:text-sm text-xs lg:text-[16px]'>Telephone: +86 19159157982</p>
                    </div>
                    <div className='flex lg:space-x-[15px] space-x-[6px] items-center mt-[9px] mb-3 xl:mt-[25px] xl:mb-[31px]'>
                        <Image src="/images/white_phone.png" className='xl:w-4 lg:h-3 md:w-3 md:h-3 h-2 w-2' width={30} height={30} alt="phone" />

                        <p className='md:text-sm lg:text-[16px]'>Whatsapp/Wechat: +86 19159157982</p>
                    </div>
                </div>

            <div className="grid place-items-center">
                <div className='flex flex-col items-center space-y-2 xl:space-y-4'>
                    <p className='text-white text-sm whitespace-nowrap sm:text-base lg:text-xl'>Follow Us</p>
                    {/* Icons */}
                    <div className='flex xl:space-x-[17px] space-x-[6px]'>
                        <Image src="/images/ins.png" alt="ins" className='xl:w-[46px] xl:h-[46px] lg:w-8 lg:h-8 md:w-5 md:h-5 sm:w-8 sm:h-8 w-4 h-4' width={50} height={50} />
                        <Image src="/images/twitter.png" alt="ins" className='xl:w-[46px] xl:h-[46px] lg:w-8 lg:h-8 md:w-5 md:h-5 sm:w-8 sm:h-8 w-4 h-4' width={50} height={50} />
                        <Image src="/images/facebook.png" alt="ins" className='xl:w-[46px] xl:h-[46px] lg:w-8 lg:h-8 md:w-5 md:h-5 sm:w-8 sm:h-8 w-4 h-4' width={50} height={50} />
                        <Image src="/images/linkedin.png" alt="ins" className='xl:w-[46px] xl:h-[46px] lg:w-8 lg:h-8 md:w-5 md:h-5 sm:w-8 sm:h-8 w-4 h-4' width={50} height={50} />
                    </div>
                </div>
            </div>
        </footer>
    )
}
