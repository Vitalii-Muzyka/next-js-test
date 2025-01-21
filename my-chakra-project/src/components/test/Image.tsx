import { Flex, Image } from "@chakra-ui/react";

export default function ExampleImage() {
  return (
    <Flex justify="center" align="center" p="4">
      <Image
        src="/images/fantasy-book.jpg"
        alt="Fantasy book"
        borderRadius="full"
        boxSize="200px"
      />
    </Flex>
  );
}
