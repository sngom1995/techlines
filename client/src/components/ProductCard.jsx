import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  Button,
  Tooltip,
  Text,
  Stack,
  HStack,
  Link,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { Link as ReactRouterLink } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Rating = ({ rating, numReviews }) => {
  const { iconSize, setIconSize } = useState("14px");
  return (
    <Flex>
      <HStack spacing="2px">
        <StarIcon color="orange.400" boxSize={iconSize} w="14px" />
        <StarIcon
          color={rating >= 2 ? "orange.400" : "gray.200"}
          boxSize={iconSize}
          w="14px"
        />
        <StarIcon
          color={rating >= 3 ? "orange.400" : "gray.200"}
          boxSize={iconSize}
          w="14px"
        />
        <StarIcon
          color={rating >= 4 ? "orange.400" : "gray.200"}
          boxSize={iconSize}
          w="14px"
        />
        <StarIcon
          color={rating >= 5 ? "orange.400" : "gray.200"}
          boxSize={iconSize}
          w="14px"
        />
      </HStack>
      <Text fontSize="sm" color="gray.500" ml="2">
        {`${numReviews} ${numReviews === 1 ? "reviews" : "review"}`}
      </Text>
    </Flex>
  );
};
const ProductCard = ({ product }) => {
  return (
    <Stack
      p="2"
      spacing="3px"
      bg={useColorModeValue("white", "gray.800")}
      minW="240px"
      h="450px"
      borerWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
    >
      {product.isNew && (
        <Circle
          size="10px"
          position="absolute"
          top={2}
          right={2}
          bg="green.300"
        />
      )}
      {product.stock <= 0 && (
        <Circle
          size="10px"
          position="absolute"
          top={2}
          right={2}
          bg="red.300"
        />
      )}
      <Image
        src={product.image}
        alt={product.name}
        h="200px"
        w="100%"
        roundedTop="lg"
      />
      <Box flex="1" maxH="5" alignItems="baseline">
        {product.stock <= 0 && (
          <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
            Sold Out
          </Badge>
        )}
        {product.isNew && (
          <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="green">
            New
          </Badge>
        )}
      </Box>
      <Flex mt="1" justifyContent="space-between" alignContent="center">
        <Link
          as={ReactRouterLink}
          to={`/product/${product._id}`}
          pt="2"
          cursor="pointer"
        >
          <Box fontSize="2xl" fontWeight="semibold" lineHeight="tight">
            {product.name}
          </Box>
        </Link>
      </Flex>
      <Flex justifyContent="space-between" alignContent="center" py="2">
        <Rating rating={product.rating} numReviews={product.numReviews} />
      </Flex>
      <Flex justify="space-between">
        <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
          <Box
            as="span"
            fontSize="lg"
            color={useColorModeValue("gray.800", "white")}
          >
            $
          </Box>
          {product.price.toFixed(2)}
        </Box>
        <Tooltip
          label="Add to cart"
          bg="white"
          color="gray.800"
          placement="top"
          fontSize="1.2em"
        >
          <Button variant="ghost" disabled={product.stock <= 0}>
            <Icon as={FiShoppingCart} w={6} h={6} alignSelf="center" />
          </Button>
        </Tooltip>
      </Flex>
    </Stack>
  );
};

export default ProductCard;
