import { Box } from "@chakra-ui/react";
import WeContent from "./WeContent";

const Mission = () => {
  return (
    <Box marginTop={{ md: 10 }}>
      <WeContent
        title="Our Mission"
        heading="Mission Statement"
        body="To provide exceptional and a quality service delivery with
          latest trends that will increase productivity at affordable
          investment
          "
        imgOrder={-1}
        img="https://www.fbk.eu/wp-content/uploads/2020/12/Cover-Cyber-Security-1-1600x600.jpg"
      />
    </Box>
  );
};

export default Mission;
