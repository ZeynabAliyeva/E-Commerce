import React, { useState } from "react";
import {
  Card,
  Container,
  Divider,
  Heading,
  Text,
  CardBody,
  CardFooter,
  CardHeader,
  Button,
  MenuDescendantsProvider,
  HStack,
  VStack,
  Link,
} from "@chakra-ui/react";
import { UnorderedList, ListItem, Flex } from "@chakra-ui/react";
import { Image, Box } from "@chakra-ui/react";
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import trash from "../images/icon-delete.svg";
import img1 from "../images/image-product-1.jpg";
import burger from "../images/icon-menu.svg";
import burgerClose from "../images/icon-close.svg";

function Header({ count, items, setItems, openCard, setOpenCard }) {
  console.log(openCard);
  const [display, setDisplay] = useState("none");
  return (
    <Container mt="40px" maxW="container.xl">
      <Flex justifyContent={"space-between"}>
        <Box>
          <Flex>
            <Image maxW="350px" maxH="20px" src={logo}></Image>
            <UnorderedList listStyleType="none">
              <Flex
                flexDirection="row"
                display={["none", "none", "flex", "flex"]}
              >
                <ListItem
                  ml="10px"
                  _hover={{
                    color: "#9b9b9b",
                    paddingBottom: "20px",
                    cursor: "pointer",
                    borderBottom: "3px solid hsl(26, 100%, 55%)",
                  }}
                >
                  Collections
                </ListItem>
                <ListItem
                  ml="10px"
                  _hover={{
                    color: "#9b9b9b",
                    paddingBottom: "20px",
                    cursor: "pointer",
                    borderBottom: "3px solid hsl(26, 100%, 55%)",
                  }}
                >
                  Men
                </ListItem>
                <ListItem
                  ml="10px"
                  _hover={{
                    color: "#9b9b9b",
                    paddingBottom: "20px",
                    cursor: "pointer",
                    borderBottom: "3px solid hsl(26, 100%, 55%)",
                  }}
                >
                  Women
                </ListItem>
                <ListItem
                  ml="10px"
                  _hover={{
                    color: "#9b9b9b",
                    paddingBottom: "20px",
                    cursor: "pointer",
                    borderBottom: "3px solid hsl(26, 100%, 55%)",
                  }}
                >
                  About
                </ListItem>
                <ListItem
                  ml="10px"
                  _hover={{
                    color: "#9b9b9b",
                    paddingBottom: "20px",
                    cursor: "pointer",
                    borderBottom: "3px solid hsl(26, 100%, 55%)",
                  }}
                >
                  Contact
                </ListItem>
              </Flex>
            </UnorderedList>
          </Flex>
          <Button
            position="relative"
            top="-7px"
            zIndex={22}
            display={["flex", "flex", "none", "none"]}
            onClick={() => setDisplay(display === "flex" ? "none" : "flex")}
          >
            <Image
              boxSize="20px"
              src={display === "flex" ? burgerClose : burger}
              alt="burger"
            />
          </Button>
          <Flex
            pt="30px"
            position={"fixed"}
            top="0px"
            left="0"
            bgColor="gray.50"
            zIndex={20}
            h="100vh"
            w="40vw"
            flexDirection="column"
            display={[`${display}`, `${display}`, "none", "none"]}
          >
            <Link
              fontSize="30px"
              color={"black"}
              ml="12px"
              mt="12px"
              _hover={{
                color: "hsl(26, 100%, 55%)",
                cursor: "pointer",
              }}
              href="#Collection"
            >
              Collection
            </Link>
            <Link
              fontSize="30px"
              mt="12px"
              color={"black"}
              ml="12px"
              _hover={{
                color: "hsl(26, 100%, 55%)",
                cursor: "pointer",
              }}
              href="#Men"
            >
              Men
            </Link>
            <Link
              fontSize="30px"
              mt="12px"
              color={"black"}
              ml="12px"
              _hover={{
                color: "hsl(26, 100%, 55%)",
                cursor: "pointer",
              }}
              href="#Women"
            >
              Women
            </Link>
            <Link
              fontSize="30px"
              mt="12px"
              color={"black"}
              ml="12px"
              _hover={{
                color: "hsl(26, 100%, 55%)",
                cursor: "pointer",
              }}
              href="#About"
            >
              About
            </Link>
            <Link
              fontSize="30px"
              mt="12px"
              color={"black"}
              ml="12px"
              _hover={{
                color: "hsl(26, 100%, 55%)",
                cursor: "pointer",
              }}
              href="#Contact"
            >
              Contact
            </Link>
          </Flex>
        </Box>

        <Box>
          <Flex>
            <Image
              cursor={"pointer"}
              ml="30px"
              boxSize="20px"
              src={cart}
              alt="cart"
              onClick={() => setOpenCard((prev) => !prev)}
            />
            <Image
              position={"relative"}
              top="-11px"
              ml="30px"
              borderRadius="full"
              boxSize="48px"
              src={avatar}
              alt="this is photo"
			   _hover={{
                  cursor: "pointer",
                  border: "2.5px solid orange",
                }}
            />
            {openCard && (
              <Card align="center">
                <CardHeader>
                  <Heading size="md"> Cart</Heading>
                  <Divider w="200px" />
                </CardHeader>
                <CardBody>
                  <Box position={"relative"} p={5}>
                    <Flex>
                      <Image
                        borderRadius={"10px"}
                        boxSize={"70px"}
                        src={img1}
                      />
                      <Flex ml="10px" flexDirection={"column"}>
                        <Text> Fall Limited Edition Sneakers</Text>

                        <Text as={"span"}>{`${count} *  $125`}</Text>
                        <Text fontWeight={700}>{`$${count * 125}`}</Text>
                      </Flex>
                      <Image
                        position="relative"
                        top="15px"
                        ml="10px"
                        cursor={"pointer"}
                        src={trash}
                        h="18px"
                        w="12px"
                        display="inline-block"
                      />
                    </Flex>
                  </Box>
                </CardBody>
                <CardFooter>
                  <Button
                    p={"15px 40px"}
                    color={"white"}
                    backgroundColor={"hsl(26, 100%, 55%)"}
                    ml="10px"
                    onClick={() => setOpenCard((prev) => !prev)}
                  >
                    Checkout
                  </Button>
                </CardFooter>
              </Card>
            )}
          </Flex>
        </Box>
      </Flex>
      <Divider />
    </Container>
  );
}

export default Header;
