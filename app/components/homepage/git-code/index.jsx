// @flow strict
"use client";
import GitHubCalendar from "react-github-calendar";
import BdAnime from "../../../utils/border-animation";
import Title from "../../ui/pageTitle";
import PageSection from "../../ui/section";
import AnimationLottie from "../../../utils/animation-lottie";
// import experience from "/public/lottie/code.json";
// import coding from "/public/lottie/coding.json";
// import contact from "/public/lottie/contact.json";
import development from "/public/lottie/development.json";
// import education from "/public/lottie/education.json";
// import js from "/public/lottie/js.json";
// import lotti from "/public/lottie/lotti.json";
// import study from "/public/lottie/study.json";
import { useInView } from "react-intersection-observer";
import useMediaScreen from "@/app/hooks/useMediaScreen";
import TextAnime from "../../ui/anime-text";
import Bg from "../../ui/section-bg";
import {  AnimatePresence } from "framer-motion";

function GitCode() {
  let { match: size } = useMediaScreen(
    "only screen and (min-width : 369px) and (max-width : 500px)"
  );
  let threshold = 0.4;
  if (size) threshold = 0.5;
  const { ref: des, inView: desV } = useInView({
    threshold,
  });

  return (
    <PageSection ref={des} id="experience">
      <div className="w-[100px] h-[100px] bg-violet-100 ounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20 "></div>
      <>
        <Title>
          <TextAnime txt={"DAYS I CODE"} showTxt={desV} />
        </Title>
        <AnimatePresence>
          {true === true ? <Bg time={500} animate={desV} /> : null}
        </AnimatePresence>
      </>
      <div className="md:mt-12 md:py-8">
        <div className="grid mt-12 md:pb-8 2xl:mt-0 grid-cols-1 lg:grid-cols-3">
          <div className="flex flex-col justify-center md:mt-16 col-span-2">
            <BdAnime>
              <GitHubCalendar
                username="ThiagoAndo"
                blockSize={12}
                blockMargin={5}
                colorScheme="dark"
                fontSize={12}
                color="#008aff"
              />
            </BdAnime>
          </div>
          <div className="flex  mt-24 md:ml-12  md:mt-0 items-start">
            <div className="w-full h-full">
              <AnimationLottie
                animationPath={development}
                width={"95%"}
                min={"0"}
                max={"0"}
              />
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
}

export default GitCode;
