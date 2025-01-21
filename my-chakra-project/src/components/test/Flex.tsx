import { Flex, Box } from "@chakra-ui/react";

export default function ExampleFlex() {
  return (
    <Flex justify="space-around" align="center" p="4" bg="gray.50">
      <Box bg="red.300" w="100px" h="100px" />
      <Box bg="green.300" w="100px" h="100px" />
      <Box bg="blue.300" w="100px" h="100px" />
    </Flex>
  );
}