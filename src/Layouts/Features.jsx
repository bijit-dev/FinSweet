import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import CardFeatures from '../components/CardFeatures'
import Icon1 from '../assets/Icon/1.png'
import Icon2 from '../assets/Icon/2.png'
import Icon3 from '../assets/Icon/3.png'
import Icon4 from '../assets/Icon/4.png'
import Icon5 from '../assets/Icon/5.png'
import Icon6 from '../assets/Icon/6.png'

const Features = () => {
    return (
        <section className='py-p128 bg-[#F4F6FC]'>
            <Container>
                <div className='text-center'>
                <h3 className='font-pop font-medium text-base text-b2'>Features</h3>
                <h2 className='font-pop font-semibold text-5xl leading-64 text-b2 w-520 mx-auto pt-3 pb-12'>Design that solves problems, one product at a time</h2>
                </div>
                <Flex className='gap-8 flex-wrap'>
                    <CardFeatures icon={Icon1} title="Uses Client First" dec="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."/>
                    <CardFeatures icon={Icon2} title="Two Free Revision Round" dec="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."/>
                    <CardFeatures icon={Icon3} title="Template Customization" dec="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."/>
                    <CardFeatures icon={Icon4} title="24/7 Support" dec="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."/>
                    <CardFeatures icon={Icon5} title="Quick Delivery" dec="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."/>
                    <CardFeatures icon={Icon6} title="Hands-on approach" dec="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."/>
                </Flex>
            </Container>
        </section>
    )
}

export default Features