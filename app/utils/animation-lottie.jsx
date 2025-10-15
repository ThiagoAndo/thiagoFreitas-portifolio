"use client";
import Lottie from "lottie-react";
import useMediaScreen from "@/app/hooks/useMediaScreen";

const AnimationLottie = ({
  animationPath,
  widthMax = "100%",
  widthMin = "100%",
  min,
  max,
}) => {
  // const { match: medium } = useMediaScreen(
  //   "(min-width : 500px) and (max-width : 992px)"
  // );
  // const { match: large } = useMediaScreen(
  //   "(min-width : 993px) and (max-width : 1200px)"
  // );
  // const { match: extraLarge } = useMediaScreen(
  //   "(min-width : 1201px) and (max-width : 1700px)"
  // );

  // const isBig = medium || large || extraLarge;
 
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: true === true ?widthMin: widthMax  ,
      marginLeft: true === true ? max : min,
    },
  };

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;
