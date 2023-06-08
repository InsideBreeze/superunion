import React from 'react';
import Image from 'next/image'

interface WorkPropTypes {
    seq: number;
    contentImage: string;
    arrowImage?: string;
    children: React.ReactNode;

}

const Work = ({ seq = 1, contentImage = "/images/cargo.png", arrowImage, children }: WorkPropTypes) => {

    return (
        <div className="relative flex pb-[111px] border-b border-b-[var(--blue)] index-100">
            <div className=' items-center justify-start'>
                <p className='text-center text-[var(--blue)] text-[40px]'>{seq}</p>
                <div className='grid place-items-center w-[200px] h-[155px] bg-white shadow-xl '>
                    <Image src={contentImage} alt='workflow' width={108} height={108} className='w-[108px] h-[108px]' />
                </div>
                <p className='absolute bottom-[10px] w-[187px] text-[16px] text-[#333333] pt-[22px] text-center'>
                    {children}
                </p>
            </div>

        </div>
    )

};

export default Work
