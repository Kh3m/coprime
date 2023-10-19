"use client";

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  Button,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import services from "../data/services";
import { useState } from "react";

function GridListWithHeading() {
  const [sliceTo, setSliceTo] = useState(8);
  console.log(sliceTo, services.length, sliceTo >= services.length);
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"} color="blue.400" marginTop={10}>
          Our Services
        </Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          We also do procurement, supplies and deployment for our solutions’
          facilities and offer an orientations and professional training
          services that should assist the organization to achieve their optimal
          result in their investments
        </Text>
      </Stack>

      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {services.slice(0, sliceTo).map((service) => (
            <HStack key={service.id} align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>{service.title}</Text>
                <Text color={"gray.600"}>{service.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
        {!(sliceTo >= services.length) && (
          <Button mt={10} onClick={() => setSliceTo(sliceTo + 4)}>
            Load More
          </Button>
        )}
      </Container>
    </Box>
  );
}

const Services = () => GridListWithHeading();
export default Services;
