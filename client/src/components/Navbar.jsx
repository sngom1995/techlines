import {
  Box,
  Flex,
  HStack,
  Link,
  Icon,
  IconButton,
  Text,
  useDisclosure,
  Button,
  Stack,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { GiTechnoHeart } from "react-icons/gi";

const links = [
  { linkName: "Products", path: "/products" },
  { linkName: "ShoppingCart", path: "/cart" },
];
const Navlink = ({ path, children }) => (
  <Link
    as={ReactRouterLink}
    to={path}
    px={2}
    py={2}
    rounded="md"
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
  >
    {children}
  </Link>
);
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Toggle Color Mode"}
            onClick={isOpen ? onClose : onOpen}
            display={{ md: "none" }}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Link as={ReactRouterLink} to="/">
              <Flex alignItems="center">
                <Icon as={GiTechnoHeart} w={8} h={8} color={"orange.400"} />
                <Text fontWeight={"extraBold"}>Tech Lines</Text>
              </Flex>
            </Link>

            <HStack as="nav" display={{ base: "none", md: "flex" }}>
              {links.map((link) => (
                <Navlink key={link.linkName} path={link.path}>
                  {link.linkName}
                </Navlink>
              ))}
            </HStack>
          </HStack>

          <Flex alignItems={"center"}>
            <Navlink>
              <Icon
                as={colorMode === "light" ? MoonIcon : SunIcon}
                alignSelf="center"
                onClick={toggleColorMode}
              ></Icon>
            </Navlink>
            <Button
              as={ReactRouterLink}
              to="/login"
              fontSize="sm"
              p={2}
              fontWeight={400}
              variant="link"
            >
              Sign In
            </Button>
            <Button
              as={ReactRouterLink}
              to="/registration"
              fontSize="sm"
              p={2}
              fontWeight={600}
              bg={"orange.400"}
              color={"white"}
              _hover={{ bg: "orange.500" }}
              display={{ base: "none", md: "inline-flex" }}
            >
              Sign Up
            </Button>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {links.map((link) => (
                <Navlink key={link.linkName} path={link.path}>
                  {link.linkName}
                </Navlink>
              ))}
              <Navlink path="/registration" key="sign up">
                Sign Up
              </Navlink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </div>
  );
};

export default Navbar;
