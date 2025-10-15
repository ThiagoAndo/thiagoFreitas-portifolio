// @flow strict

import Image from "next/image";
import SocialLinks from "./social-links";
import Designation from "./designation";
import { DecoderText } from "../../decoder-text";
import Container from "../../ui/Container";
import Navbar from "../../navbar";
import useMediaScreen from "@/app/hooks/useMediaScreen";
import { useInView } from "react-intersection-observer";

function HeroSection() {

  let { match: size } = useMediaScreen(
    "only screen and (min-width : 369px) and (max-width : 500px)"
  );
  let threshold = 0.1;
  if (size) threshold = 0.4;
  const { ref: des, inView: desV } = useInView({
    threshold,
  });

  return (
    <div ref={des}>
      <Container tailwind="relative flex flex-col items-center justify-between pt-56 pb-36 md:py-16 2xl:py-40 md:h-full">
      
        <Image
          src="/hero.svg"
          alt="Hero"
          width={1572}
          height={795}
          className="hero-color absolute top-0 z-[-2000]"
        />
        <Navbar />
        <div className="relative order-2 lg:order-1 flex flex-col items-start justify-center pb-20 md:pb-10 lg:pt-10">
          <p className="text-3xl  md:my-6 md:text-5xl text-neutral-700 !leading-snug text-center mx-auto font-[900] text-white mt-4 center">
            <span className={`text-[#00adf4] t-anime`}>
              <DecoderText text={"THIAGO FREITAS,"} delay={500} />
            </span>
          </p>
          <h1 className="text-3xl my-16 md:my-2  md:text-6xl text-neutral-700 !leading-snug text-center mx-auto font-[900] text-white mt-6">
            <Designation />
          </h1>
          <SocialLinks />
        </div>
      </Container>
    </div>
  );
}

export default HeroSection;
