import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  Heading,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { Image, Box } from "@chakra-ui/react";

function Ecommerce() {
  return (
    <div>
      <Heading>Sneakers</Heading>
      <UnorderedList display="flex" listStyleType="none">
        <ListItem>Collections</ListItem>
        <ListItem>Men</ListItem>
        <ListItem>Women</ListItem>
        <ListItem>About</ListItem>
        <ListItem>Contact</ListItem>
      </UnorderedList>

      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
      <Box boxSize="sm">
        <Image
          borderRadius="full"
          boxSize="70px"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
          objectFit="cover"
        />
      </Box>
    </div>
  );
}

export default Ecommerce;
