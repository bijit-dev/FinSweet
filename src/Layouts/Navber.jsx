import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Logo from '../assets/logo.png'
import List from '../components/List'
import Button from '../components/Button'

const Navber = () => {
    return (
        <nav className='bg-[#1C1E53] py-4'>
            <Container>
                <Flex className='items-center'>
                    <div className='w-5/12'>
                        <img src={Logo} alt="" />
                    </div>
                    <div className='w-5/12'>
                        <List/>
                    </div>
                    <div className='w-2/12'>
                        <Button text="Contact us"/>
                    </div>
                </Flex>
            </Container>
        </nav>
    )
}

export default Navber