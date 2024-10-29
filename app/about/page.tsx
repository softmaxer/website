"use client";

import ProfileBackdrop from "@/components/about-bg";
import { useIsVisible } from "@/hooks/element-boundary";
import React from "react";

export default function AboutMe() {
  const descriptionRef = React.useRef<HTMLDivElement>(null);
  const descriptionIsVisible = useIsVisible(descriptionRef);
  return (
    <div className="flex flex-col md:flex-row lg:flex-row justify-start items-start p-24 md:p-32 lg:p-44 gap-14">
      <ProfileBackdrop />
      <div
        ref={descriptionRef}
        className={`${descriptionIsVisible ? "opacity-80" : "opacity-0"} ease-in duration-1000 font-solanelLight flex flex-col gap-5 md:gap-10 lg:gap-12`}
      >
        <p className={`text-right text-xl md:text-3xl lg:text-3xl`}>
          I&apos;m Sriram Vadlamani, but you can call me Ram. I&apos;m primarily
          a guitar player, with influences ranging from blues, to garage rock /
          post punk and I&apos;m constantly on the lookout for a little
          &lsquo;raunch&rsquo; in my tone.
          <br />
        </p>

        <p
          className={`text-left text-xl md:text-3xl lg:text-3xl md:text-right lg:text-right`}
        >
          My songwriting journey began with the guitar as my main melody base.
          I&apos;ve been accused of writing `Alex Turner`ish lyrics with quirky
          imagery and internal rhyming schemes.
          <br />
        </p>
        <p
          className={`text-right text-xl md:text-3xl lg:text-3xl md:text-left lg:text-left`}
        >
          Adding to my repertoire, I&apos;ve also become adept at playing the
          harmonica, a move that&apos;s proven to be a great addition to my
          musical arsenal.
          <br />
        </p>
        <p
          className={`text-left text-xl md:text-3xl lg:text-3xl md:text-right lg:text-right`}
        >
          Driven by a relentless pursuit of capturing the perfect sound -
          whether it&apos;s punchy overhead drums, emotive clean guitar tones,
          or heartfelt, tear-jerking vocals.
          <br />
        </p>

        <p
          className={`text-right text-xl md:text-3xl lg:text-3xl md:text-left lg:text-left`}
        >
          I&apos;m confident in my abilities and my musical arnesal to put my
          vision into practice, and I&apos;m excited to share my creations and
          enable my fellow musicians to create a platform for their sound.
          <br />
        </p>
      </div>
    </div>
  );
}
