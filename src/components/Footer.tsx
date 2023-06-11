import Image from 'next/image'
export default function Footer() {
  return (
    <footer
      className="
                       mt-auto flex h-[228px] items-center justify-between bg-[rgba(49,108,206,0.86)] px-10"
    >
      <div className="items- flex flex-col justify-center space-y-4">
        <Image
          src="/images/logo.png"
          alt="logo white"
          height={500}
          width={500}
          className="
                            h-[60px] w-[260px]"
        />
        <p className="text-sm text-white">
          @2023-2024 Superunion Corp Limited Shenzhen China
        </p>
      </div>
      <div className="hidden text-white md:block">
        <div className="mb-3 mt-[9px] flex items-center space-x-[15px] ">
          <Image
            src="/images/white_email.png"
            className="h-4 w-4"
            width={30}
            height={30}
            alt="ins"
          />
          <p className="whitespace-nowrap text-[16px]">
            Email：overseas@superunionlogistics.com
          </p>
        </div>

        <div className="mb-[32px] mt-[31px] flex items-center space-x-[15px]">
          <Image
            src="/images/white_phone.png"
            className="h-4 w-4"
            width={30}
            height={30}
            alt="phone"
          />
          <p className="text-[16px]">Telephone: +86 19159157982</p>
        </div>
        <div className="mb-[31px] mt-[25px] mt-[9px] flex items-center space-x-[15px]">
          <Image
            src="/images/white_phone.png"
            className="h-4 w-4"
            width={30}
            height={30}
            alt="phone"
          />

          <p className="text-[16px]">Whatsapp/Wechat: +86 19159157982</p>
        </div>
      </div>

      <div className="grid place-items-center">
        <div className="flex flex-col items-center space-y-4">
          <p className="whitespace-nowrap text-xl text-white">Follow Us</p>
          {/* Icons */}
          <div className="flex space-x-[17px]">
            <Image
              src="/images/ins.png"
              alt="ins"
              className="h-[46px] w-[46px]"
              width={50}
              height={50}
            />
            <Image
              src="/images/twitter.png"
              alt="ins"
              className="h-[46px] w-[46px]"
              width={50}
              height={50}
            />
            <Image
              src="/images/facebook.png"
              alt="ins"
              className="h-[46px] w-[46px]"
              width={50}
              height={50}
            />
            <Image
              src="/images/linkedin.png"
              alt="ins"
              className="h-[46px] w-[46px]"
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
