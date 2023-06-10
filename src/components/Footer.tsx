import Image from 'next/image'
export default function Footer() {

    return (
        <footer
            className="
                       items-center bg-[rgba(49,108,206,0.86)] px-10 h-[228px] flex justify-between mt-auto">
            <div className="flex items- justify-center space-y-4 flex-col">
                <Image src="/images/logo.png" alt="logo white" height={500} width={500} className='
                            h-[60px] w-[260px]' />
                <p className='text-white text-sm'>
                    @2023-2024 Superunion Corp Limited Shenzhen China
                </p>
            </div>
                <div className="text-white hidden md:block">
                    <div className='flex space-x-[15px] items-center mt-[9px] mb-3 '>
                        <Image src="/images/white_email.png" className='w-4 h-4' width={30} height={30} alt="ins" />
                        <p className='text-[16px] whitespace-nowrap'>Email：overseas@superunionlogistics.com</p>
                    </div>

                    <div className='flex space-x-[15px] items-center mt-[31px] mb-[32px]'>
                        <Image src="/images/white_phone.png" className='w-4 h-4' width={30} height={30} alt="phone" />
                        <p className='text-[16px]'>Telephone: +86 19159157982</p>
                    </div>
                    <div className='flex space-x-[15px] items-center mt-[9px] mt-[25px] mb-[31px]'>
                        <Image src="/images/white_phone.png" className='w-4 h-4' width={30} height={30} alt="phone" />

                        <p className='text-[16px]'>Whatsapp/Wechat: +86 19159157982</p>
                    </div>
                </div>

            <div className="grid place-items-center">
                <div className='flex flex-col items-center space-y-4'>
                    <p className='text-white whitespace-nowrap text-xl'>Follow Us</p>
                    {/* Icons */}
                    <div className='flex space-x-[17px]'>
                        <Image src="/images/ins.png" alt="ins"
                               className='w-[46px] h-[46px]'
                               width={50} height={50} />
                        <Image src="/images/twitter.png" alt="ins" className='w-[46px] h-[46px]'

                               width={50} height={50} />
                        <Image src="/images/facebook.png" alt="ins" className='w-[46px] h-[46px]'

                               width={50} height={50} />
                        <Image src="/images/linkedin.png" alt="ins" className='w-[46px] h-[46px]'
                               width={50} height={50} />
                    </div>
                </div>
            </div>
        </footer>
    )
}
