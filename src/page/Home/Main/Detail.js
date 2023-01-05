import { Button,Text,Heading,Box,Container, Flex, Image,Badge} from "@chakra-ui/react";
import cart from "../images/icon-cart.svg";
import React from "react";

function Detail({count,setCount,items,setItems,openCard,setOpenCard}) {

  return (
    <Container mt={"100px"} ml='40px'>
    <Box>
      <Flex display={"inline-block"} flexDirection={"column"} gap="100px">
      <Text color={"hsl(26, 100%, 55%)"}>Sneaker Company</Text>
      <Heading>Fall Limited Edution Sneakers</Heading>
      <Text color={"hsl(219, 9%, 45%)"}>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </Text>
     
      <Heading display="inline-block">$125.00</Heading>
      <Text display="inline-block" padding={"0px 8px"} ml="10px" mt={""}
      bgColor={"hsl(25, 100%, 94%)"} color={"hsl(26, 100%, 55%)"}
      >50%</Text>
      </Flex>
      <Text color={"hsl(220, 14%, 75%)"}>$250.00</Text>
    </Box>

    <Box>
      <Flex>
      <Button _hover={{color:"hsl(26, 100%, 55%)"}} onClick={()=>setCount((prev)=>prev>0? prev-1 : 0)}>-</Button>
        <Text ml="10px">{count}</Text>
        <Button _hover={{color:"hsl(26, 100%, 55%)"}} ml="10px" onClick={()=>setCount((prev)=>prev+1)}>+</Button>
        <Button 
            p={"15px 40px"}
            color={"white"}
            backgroundColor={"hsl(26, 100%, 55%)"}
            ml="10px"
            onClick={()=>{
              if(count === 0 ){
              }else{
                setItems([...items,count])
                setCount(0)
                setOpenCard(true)
              }
            }}
            >    
        <Image
              cursor={"pointer"}
              boxSize="20px"
              src={cart}
              alt="cart"
        
            />
          Add to cart</Button>
      </Flex>
    </Box>
    </Container>
  );
}

export default Detail;
