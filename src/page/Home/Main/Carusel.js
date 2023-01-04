import { Box,Flex } from '@chakra-ui/react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import img1 from  "../images/image-product-1.jpg"
import img2 from "../images/image-product-2.jpg"
import img3 from "../images/image-product-3.jpg"
import img4 from "../images/image-product-4.jpg"
function CarouselFn() {
  return ( 
          <Box maxWidth={"1040px"} mt={"50px"}>
            <Flex
            h={"600px"}
            maxWidth={"410px"}
              px={3}
              gap={"80px"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Carousel >
               <div>
                <img src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
                <div>
                    <img src={img4} />
                </div> 
            </Carousel>
            </Flex>
          </Box>
    
  )
}

export default CarouselFn