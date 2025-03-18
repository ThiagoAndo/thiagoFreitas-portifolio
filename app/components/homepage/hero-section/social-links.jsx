"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RiContactsFill } from "react-icons/ri";
import { linkChildrens } from "../../../utils/childrens";
import { MdDownload } from "react-icons/md";
import UiLinks from "./UiLinks";
import Btns from "./btn-hero";
import { staggerChildren } from "@/app/utils/motion-variants";

export default function SocialLinks() {
  const [isVis, setIsVis] = useState(false);
  useEffect(() => {
    const time = setTimeout(() => {
      setIsVis(true);
    }, 2300);

    return () => clearTimeout(time);
  }, []);

  return (
    <AnimatePresence>
      {isVis && (
        <>
          <motion.div
            variants={staggerChildren.framer}
            initial="hidden"
            animate="visible"
            className="my-12 flex items-center gap-5 m-auto"
          >
            {linkChildrens.map((cont) => (
              <motion.span
                variants={staggerChildren.items}
                transition={{ type: "spring" }}
                key={cont.data}
              >
                <UiLinks http={cont.data}>{cont.ico}</UiLinks>
              </motion.span>
            ))}
          </motion.div>
          <div className="flex items-center gap-6 m-auto">
            <Btns link={"#contact"} trgt={""}>
              <span>Contact me</span>
              <RiContactsFill size={16} />
            </Btns>
            <Btns
              link={
                "https://drive.google.com/file/d/1Awrfpcmxe77olenswhtdWkmYUgWeeahq/view?usp=drive_link"
              }
              trgt={"_blank"}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Btns>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
