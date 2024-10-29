"use client";
import ComingSoon from "@/components/coming-soon";
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
      <div className="flex flex-col md:flex-row lg:flex-row justify-start items-start w-full gap-12 font-solanelRegular">
        <div
          ref={latestReleaseRef}
          className={`flex flex-col w-full ${latestReleaseIsVisible ? "opacity-100" : "opacity-0"} ease-in duration-500`}
        >
          <p className="text-2xl">Latest release </p>
          <div className="flex flex-col md:flex-row lg:flex-row gap-6 bg-gray-200 dark:bg-gray-700 rounded-lg justify-center items-center">
            <iframe
              style={{ borderRadius: "12px", border: "0px" }}
              src="https://open.spotify.com/embed/track/6s7Tv5Gqf1hURygPnKBBH8?utm_source=generator&theme=0"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            <dl className="text-gray-900 dark:text-white w-full">
              <div className="flex flex-col pb-3 justify-center items-center">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Written and Procuded by
                </dt>
                <dd className="text-lg font-solanelBold">RAM</dd>
              </div>
              <div className="flex flex-col py-3 justify-center items-center">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Artwork by
                </dt>
                <dd className="text-lg font-solanelBold">
                  <span className="hover:text-pink-500 transition-all ease-in-out duration-300 font-solanelLight">
                    <Link
                      href={"https://sairamved.com"}
                      className="underline decoration-pink-500 hover:no-underline transition-all ease-in-out duration-300"
                    >
                      @sairamved
                    </Link>
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div
          ref={comingSoonRef}
          className={`flex flex-col w-full ${comingSoonIsVisible ? "opacity-100" : "opacity-0"} ease-in duration-700`}
        >
          <p className="text-2xl">Coming soon</p>
          <ComingSoon artistName="RAM" songName="When's tomorrow" />
        </div>
      </div>

      <p
        ref={streamingLinksref}
        className={`font-solanelLight text-2xl md:text-4xl lg:text-4xl ${isStreamingVisible ? "opacity-100" : "opacity-0"} ease-in duration-500`}
      >
        Listen to my music{" "}
        <span className="text-2xl md:text-4xl lg:text-4xl hover:text-pink-500 transition-all ease-in-out duration-300 font-solanelLight">
          <Link
            href={"https://distrokid.com/hyperfollow/ram46/rolling"}
            className="underline decoration-pink-500 hover:no-underline transition-all ease-in-out duration-300"
          >
            on all streaming platforms.
          </Link>
        </span>
      </p>
    </div>
  );
}
