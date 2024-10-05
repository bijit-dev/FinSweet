import React from 'react'
import Image from './Image'


const CardFeatures = ({icon,title,dec}) => {
    return (
        <div className='w-[405px] pl-14 h-80 bg-white'>
            <Image src={icon} className='pt-14 pb-3 '/>
            <h3 className='text-b2 font-medium text-3xl font-pop pt-6 pb-3'>{title}</h3>
            <p className='text-[#696a74] font-pop font-normal text-lg w-80'>{dec}</p>
            
        </div>
    )
}

export default CardFeatures