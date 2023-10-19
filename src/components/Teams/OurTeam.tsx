import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Team from "./Team";
import teams from "../../data/team";

const OurTeam = () => {
  return (
    <Box mt={10}>
      <Heading textAlign="center" color="blue.400">
        Our Team of Experts
      </Heading>
      <SimpleGrid
        marginTop={20}
        columns={{
          base: 1,
          md: 3,
        }}
        rowGap={10}
      >
        {teams.map((team) => (
          <Team {...team} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default OurTeam;
