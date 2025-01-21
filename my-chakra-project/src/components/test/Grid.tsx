import { Grid, Box } from "@chakra-ui/react";

export default function ExampleGrid() {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={4} p="4">
      <Box bg="blue.300" p={4}>Box 1</Box>
      <Box bg="green.300" p={4}>Box 2</Box>
      <Box bg="red.300" p={4}>Box 3</Box>
      <Box bg="pink.300" p={4}>Box 4</Box>
      <Box bg="gray.300" p={4}>Box 5</Box>
      <Box bg="yellow.300" p={4}>Box 6</Box>
    </Grid>
  );
}