import React from "react";
import {
  AspectRatio,
  Badge,
  Box,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";

const RequestCardComponent = () => {
  const posting = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Random Image 1",
    isNewPosting: true,
    title: "Coffee to DC",
    description: "A Tim Double Double to DC seat A30",
    formattedPrice: "$5.00",
    timeLimit: "30 min",
  };

  return (
    <Box
      backgroundColor="white"
      maxW="sm"
      borderWidth="2px"
      borderRadius="lg"
      overflow="hidden"
    >
      <AspectRatio maxH="25vh" ratio={4 / 3}>
        <Image src={posting.imageUrl} alt={posting.imageAlt} />
      </AspectRatio>
      
      <Grid templateColumns="repeat(10, 1fr)">
        <GridItem colSpan={8}>
          <Box id="left" p="4">
            <Box display="flex" alignItems="center">
              {posting.isNewPosting && (
                <Badge borderRadius="10" px="2" backgroundColor="#d1e8da">
                  New
                </Badge>
              )}
              <Box
                color="gray.800"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="s"
                textTransform="uppercase"
                ml="2"
              >
                {posting.title}
              </Box>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={2}
            >
              {posting.description}
            </Box>

            <Box display="flex" mt="3" alignItems="center">
              <Box as="span" color="gray.500" fontSize="sm">
                Time Limit: {posting.timeLimit}
              </Box>
            </Box>
          </Box>
        </GridItem>
        <GridItem
          colSpan={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            display="flex"
            justifyContent="center"
            p="1"
            borderRadius={8}
            backgroundColor="#d1e8da"
            fontSize="xl"
          >
            {posting.formattedPrice}
          </Box>
        </GridItem>
      </Grid>
      <Box display="flex" direction="column"></Box>
    </Box>
  );
};

export default RequestCardComponent;
