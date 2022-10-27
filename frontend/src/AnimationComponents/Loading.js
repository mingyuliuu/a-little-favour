import React from "react";
import Lottie from "react-lottie";

import loadingAnimation from "../assets/Lottie/paperplaneLoading.json";

const Loading = ({ height, width }) => {
  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={animationOptions} height={height} width={width} />;
};

export default Loading;
