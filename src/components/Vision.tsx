import { Box } from "@chakra-ui/react";
import WeContent from "./WeContent";

const Vision = () => {
  return (
    <Box marginTop={{ md: 10 }}>
      <WeContent
        title="Our Mission"
        heading="Vision Statement"
        body="To be continuously growing company, a leader in the
          market that offer innovative solutions to the society,
          and continuously introduce fresh ideas to keep pace
          with the emerging trends of the 21st Century"
        imgOrder={1}
        img="https://www.pcerror-fix.com/wp-content/uploads/2021/03/cyver-security-scaled.jpeg"
      />
    </Box>
  );
};

export default Vision;
