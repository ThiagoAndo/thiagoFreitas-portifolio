// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import Designation from "./designation";
import { DecoderText } from "../../decoder-text";
import { motion } from "framer-motion";
import UiLinks from "../../ui/Links";
const linkCont = [
  { data: personalData.github, ico: <BsGithub size={30} /> },
  { data: personalData.linkedIn, ico: <BsLinkedin size={30} /> },
  { data: personalData.facebook, ico: <FaFacebook size={30} /> },
  { data: personalData.leetcode, ico: <SiLeetcode size={30} /> },
  { data: personalData.twitter, ico: <FaTwitterSquare size={30} /> },
];

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-48  lg:py-48 2xl:py-48 h-full">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="order-2 lg:order-1 flex flex-col items-start justify-center pb-20 md:pb-10 lg:pt-10">
        <p className="text-2xl my-2 md:text-5xl text-neutral-700 !leading-snug text-center mx-auto font-[900] text-white mt-4">
          <span className={`text-[#00adf4] t-anime`}>
            <DecoderText text={"THIAGO FREITAS,"} delay={500} />
          </span>
        </p>
        <h1 className="text-2xl  my-2  md:text-6xl text-neutral-700 !leading-snug text-center mx-auto font-[900] text-white mt-6">
          <Designation />
        </h1>
        <div className="my-12 flex items-center gap-5 m-auto">
          {linkCont.map((cont) => (
            <UiLinks key={cont.data} http={cont.data}>
              {cont.ico}
            </UiLinks>
          ))}
        </div>

        <div className="flex items-center gap-6 m-auto">
          <Link href="#contact">
            <button
              id="anime-cont"
              className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1"
            >
              <span>Contact me</span>
              <RiContactsFill size={16} />
            </button>
          </Link>

          <Link href="#contact">
            <button
              id="anime-cont"
              className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1"
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
