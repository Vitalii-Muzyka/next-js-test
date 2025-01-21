import { Stack, StackSeparator, Box } from "@chakra-ui/react";

export default function ExampleStack() {
  return (
    <Stack gap="4"  p={4} separator={<StackSeparator /> }>
      <Box bg="red.100" p={2}>
        Елемент 1
      </Box>
      <Box bg="green.100" p={2}>
        Елемент 2
      </Box>
      <Box bg="blue.100" p={2}>
        Елемент 3
      </Box>
    </Stack>
  );
}