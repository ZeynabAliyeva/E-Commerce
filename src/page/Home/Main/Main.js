import {Center, Flex } from '@chakra-ui/react'
import React from 'react'
import CarouselFn from './Carusel'
import Detail from './Detail'

function Main({count,setCount,items,setItems,openCard,setOpenCard}) {
  return (
    <>
    <Center>
        <Flex>
        <CarouselFn/>
        <Detail count={count} setCount={setCount} items={items} setItems={setItems} openCard={openCard} setOpenCard={setOpenCard}/>
        </Flex>
    </Center>
    </>
      
  )
}

export default Main