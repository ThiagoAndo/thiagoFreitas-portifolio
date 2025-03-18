// @flow strict
import Link from "next/link";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../../../utils/animation-lottie";
import GlowCard from "../../../utils/glow-card";
import js from "/public/lottie/js.json";
import Title from "../../ui/pageTitle";
import PageSection from "../../ui/section";
import TextAnime from "../../ui/anime-text";
import { useInView } from "react-intersection-observer";
import { AnimatePresence } from "framer-motion";
import Bg from "../../ui/section-bg";
import useMediaScreen from "@/app/hooks/useMediaScreen";

function Education() {
  let { match: size } = useMediaScreen(
    "only screen and (min-width : 369px) and (max-width : 500px)"
  );
  let threshold = 0.4;
  if (size) threshold = 0.5;
  const { ref: des, inView: desV } = useInView({
    threshold,
  });

  return (
    <PageSection
      ref={des}
      id={"education"}
      tailwind={"relative z-50 md:border-t md:border-[#25213b]"}
    >
      <Title>
        <TextAnime txt={"EDUCATION"} showTxt={desV} />
      </Title>
      <AnimatePresence>
        {desV === true ? <Bg time={500} animate={true} git={true} /> : null}
      </AnimatePresence>
      <div className="py-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex">
            <div className="w-3/4 h-3/4">
              <AnimationLottie
                animationPath={js}
                widthMax={"160%"}
                widthMin={"120%"}
                max={"-20px"}
                min={"-45px"}
              />
            </div>
          </div>

          <GlowCard>
            <Link
              href={"https://photos.app.goo.gl/HGWPM6T7jm5dja9y7"}
              target="blank_"
            >
              <div className="p-3 w-full h-full md:w-3/4 md:h-3/4 relative text-white cursor-pointer">
                <div className="flex justify-center">
                  <p className="text-base  xl:text-1xl text-[#16f2b3]">
                    Jan 2016 - Dec 2017
                  </p>
                </div>
                <div className="flex items-center gap-x-8 px-3 py-5">
                  <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                    <BsPersonWorkspace size={36} />
                  </div>
                  <div>
                    <p className="text-base  xl:text-1xl  mb-2 font-medium uppercase">
                      System Analysis and Development
                    </p>
                    <p className="text-base  xl:text-1xl">
                      University Cruzeiro do Sul/ SP Brazil
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </GlowCard>
        </div>
      </div>
    </PageSection>
  );
}

export default Education;
