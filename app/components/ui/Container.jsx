// @flow strict

"use client";
import useMediaScreen from "@/app/hooks/useMediaScreen";

export default function Container({
  children,
  tailwind,
  minVh = "70vh",
  maxVh = "80vh",
}) {
  let size = useMediaScreen(
    "only screen and (min-width : 369px) and (max-width : 500px)"
  );

  return (
    <>
      <section
        className={tailwind}
        style={{ height: size === true ? minVh : maxVh }}
      >
        {children}
      </section>
    </>
  );
}
