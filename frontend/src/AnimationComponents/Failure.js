import React from "react";
import Lottie from "react-lottie";
import { Text } from "@chakra-ui/react";

import failureAnimation from "../assets/Lottie/sad_face_failure.json";

const Failure = ({ message, height, width }) => {
  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: failureAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={animationOptions} height={height} width={width} />
      <Text fontSize="xl">{message}</Text>
    </div>
  );
};

export default Failure;
