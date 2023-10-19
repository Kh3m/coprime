import { Box, Heading, Text, Stack, Image } from "@chakra-ui/react";

import IMAGE from "../../assets/team-3.jpg";

interface Props {
  name: string;
  ach: string;
  pos: string;
  desc: string;
  current: string;
}

export default function Team({ name, ach, pos, desc, current }: Props) {
  return (
    <Box
      role={"group"}
      p={6}
      maxW={{ base: "full", md: "330px" }}
      w={"full"}
      // bg={useColorModeValue("white", "gray.800")}
      // boxShadow={"2xl"}
      rounded={"lg"}
      pos={"relative"}
      zIndex={1}
    >
      <Box
        rounded={"lg"}
        mt={-12}
        pos={"relative"}
        height={"230px"}
        //   _after={{
        //     transition: "all .3s ease",
        //     content: '""',
        //     w: "full",
        //     h: "full",
        //     pos: "absolute",
        //     top: 5,
        //     left: 0,
        //     backgroundImage: `url(${IMAGE})`,
        //     filter: "blur(15px)",
        //     zIndex: -1,
        //   }}
        _groupHover={{
          _after: {
            filter: "blur(20px)",
          },
        }}
      >
        <Image
          rounded={"lg"}
          height={230}
          width={282}
          objectFit={"cover"}
          src={IMAGE}
          alt="#"
        />
      </Box>
      <Stack pt={10} align={"center"}>
        <Text
          textAlign="center"
          color={"gray.500"}
          fontSize={"10px"}
          textTransform={"uppercase"}
        >
          {pos}
        </Text>
        <Heading
          textAlign="center"
          fontSize={"2xl"}
          fontFamily={"body"}
          fontWeight={500}
        >
          <Box as={"span"} fontWeight="bold">
            {name}
          </Box>
          <Box as={"span"} fontSize="sm">
            / {ach}
          </Box>
        </Heading>
        <Stack direction={"column"} align={"center"}>
          <Text textAlign="center">{desc}</Text>
          <Text fontWeight={800} fontSize={"sm"}>
            {current}
          </Text>
          {/*
            <Text textDecoration={"line-through"} color={"gray.600"}>
              $199
            </Text> */}
        </Stack>
      </Stack>
    </Box>
  );
}
