"use client";
import { useIsVisible } from "@/hooks/element-boundary";
import Link from "next/link";
import React from "react";

export default function MusicHome() {
  const latestReleaseRef = React.useRef<HTMLDivElement>(null);
  const latestReleaseIsVisible = useIsVisible(latestReleaseRef);

  const comingSoonRef = React.useRef<HTMLDivElement>(null);
  const comingSoonIsVisible = useIsVisible(comingSoonRef);

  const streamingLinksref = React.useRef<HTMLParagraphElement>(null);
  const isStreamingVisible = useIsVisible(streamingLinksref);
  return (
    <div className="flex flex-col justify-start items-start p-12 md:p-24 lg:p-24 gap-12">
      <p className="text-2xl">Latest releases </p>
      <div className="flex flex-col md:flex-row lg:flex-row justify-start items-start w-full gap-12 font-solanelRegular">
        <div
          ref={latestReleaseRef}
          className={`flex flex-col w-full ${latestReleaseIsVisible ? "opacity-100" : "opacity-0"} ease-in duration-500`}
        >
          <iframe
            style={{ borderRadius: "12px", border: "0px" }}
            src="https://open.spotify.com/embed/track/1rYlef5ybNAps3cxGVKW4k?utm_source=generator"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>

        <div
          ref={comingSoonRef}
          className={`flex flex-col w-full ${comingSoonIsVisible ? "opacity-100" : "opacity-0"} ease-in duration-700`}
        >
          <iframe
            style={{ borderRadius: "12px", border: "0px" }}
            src="https://open.spotify.com/embed/track/6s7Tv5Gqf1hURygPnKBBH8?utm_source=generator&theme=0"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <p
        ref={streamingLinksref}
        className={`font-solanelLight text-2xl md:text-4xl lg:text-4xl ${isStreamingVisible ? "opacity-100" : "opacity-0"} ease-in duration-500`}
      >
        Listen to my music{" "}
        <span className="text-2xl md:text-4xl lg:text-4xl hover:text-pink-500 transition-all ease-in-out duration-300 font-solanelLight">
          <Link
            href={"https://hyperfollow.com/softmaxer"}
            className="underline decoration-pink-500 hover:no-underline transition-all ease-in-out duration-300"
          >
            on all streaming platforms.
          </Link>
        </span>
      </p>
    </div>
  );
}
