import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  //   Icon,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
// import {
//   IoAnalyticsSharp,
//   IoLogoBitcoin,
//   IoSearchSharp,
// } from "react-icons/io5";
// import { ReactElement } from "react";

// interface FeatureProps {
//   text: string;
//   iconBg: string;
//   icon?: ReactElement;
//   imgOrder?: number;
// }

// const Feature = ({ text, icon, iconBg, imgOrder = 1 }: FeatureProps) => {
//   return (
//     <Stack direction={"row"} align={"center"}>
//       <Flex
//         w={8}
//         h={8}
//         align={"center"}
//         justify={"center"}
//         rounded={"full"}
//         bg={iconBg}
//       >
//         {icon}
//       </Flex>
//       <Text fontWeight={600}>{text}</Text>
//     </Stack>
//   );
// };

interface Props {
  title: string;
  heading: string;
  img: string;
  body: string;
  isMore?: boolean;
  imgOrder?: number;
}

const WeContent = ({
  title,
  heading,
  body,
  img,
  isMore = false,
  imgOrder = 1,
}: Props) => {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            {title}
          </Text>
          <Heading>{heading}</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            {body}
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            {isMore && <Button>Learn More</Button>}
            {/* <Feature
                  icon={
                    <Icon as={IoAnalyticsSharp} color={"yellow.500"} w={5} h={5} />
                  }
                  iconBg={useColorModeValue("yellow.100", "yellow.900")}
                  text={"Business Planning"}
                />
                <Feature
                  icon={<Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />}
                  iconBg={useColorModeValue("green.100", "green.900")}
                  text={"Financial Planning"}
                />
                <Feature
                  icon={
                    <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
                  }
                  iconBg={useColorModeValue("purple.100", "purple.900")}
                  text={"Market Analysis"}
                /> */}
          </Stack>
        </Stack>
        <Flex order={imgOrder}>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={img}
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
};

export default WeContent;
