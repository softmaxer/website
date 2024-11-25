"use client";
import ProfileButton from "@/components/buttons/profile-button";
import Socials from "@/components/socials";
import { useIsVisible } from "@/hooks/element-boundary";
import Link from "next/link";
import React from "react";

export default function Home() {
  const titleRef = React.useRef<HTMLDivElement>(null);
  const titleIsVisible = useIsVisible(titleRef);

  const taglineRef = React.useRef<HTMLParagraphElement>(null);
  const taglineIsVisible = useIsVisible(taglineRef);
  return (
    <div className="flex flex-col md:flex-row lg:flex-row justify-start items-start p-24 md:p-32 lg:p-44 gap-14">
      <div
        ref={titleRef}
        className={`flex flex-col gap-5 justify-start items-start ${titleIsVisible ? "opacity-100" : "opacity-0"} ease-in duration-300`}
      >
        <p className="text-7xl md:text-9xl lg:text-9xl text-left font-solanelBold">
          Ram
        </p>
        <p className="text-2xl md:text-4xl lg:text-4xl text-left opacity-40 font-solanelBold">
          Music Producer
        </p>
        <Socials />
        <div className="flex flex-col justify-start rounded-md p-2 gap-5 font-solanelRegular">
          <ProfileButton action="My work" path="/music" />
          <ProfileButton action="More about me" path="/about" />
          <ProfileButton action="Pricing" path="/price" />
          <ProfileButton action="Contact me" path="/contact" />
        </div>
      </div>
      <div
        ref={taglineRef}
        className={`${taglineIsVisible ? "opacity-70" : "opacity-0"} ease-in duration-1000 font-solanelLight flex flex-col gap-5 md:gap-10 lg:gap-12`}
      >
        <p className={`text-right text-2xl md:text-4xl lg:text-4xl`}>
          Hello👋! I&apos;m Ram, a music producer and a mixing engineer based in
          Paris, France. I like listening to blues, rock, punk and pretty much
          anything and everything with a guitar in it!
          <br />
        </p>
        <br />
        <p className={`text-right text-2xl md:text-4xl lg:text-4xl`}>
          I&apos;d love to see what you have to play for me, even if it&apos;s
          just a voice memo.{" "}
          <span className="text-2xl md:text-4xl lg:text-4xl hover:text-pink-500 transition-all ease-in-out duration-300 font-solanelLight">
            <Link
              href={"/contact"}
              className="underline decoration-pink-500 hover:no-underline transition-all ease-in-out duration-300"
            >
              Hit me up
            </Link>
          </span>{" "}
          and send me your next big hit!
        </p>
      </div>
    </div>
  );
}
