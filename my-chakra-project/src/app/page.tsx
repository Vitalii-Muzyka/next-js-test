import { Box } from "@chakra-ui/react";
import ExampleBox from "@/components/test/Box";
import ExampleHeading from "@/components/test/Heading";
import ExampleText from "@/components/test/Text";
import ExampleButton from "@/components/test/Button";
import ExampleFlex from "@/components/test/Flex";
import ExampleImage from "@/components/test/Image";
import ExampleStack from "@/components/test/Stack";
import ExampleGrid from "@/components/test/Grid";
import ExampleAvatar from "@/components/test/Avatar";

export default function HomePage() {
  return (
    <Box textAlign="center" mt={4} p={4}>
      <ExampleBox />
      <ExampleHeading />
      <ExampleText />
      <ExampleButton />
      <ExampleFlex />
      <ExampleImage />
      <ExampleStack />
      <ExampleGrid />
      <ExampleAvatar />
    </Box>
  );
}