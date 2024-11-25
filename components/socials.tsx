import Link from "next/link";
import IconInstagram from "./icons/instagram";
import IconBxlSpotify from "./icons/spotify";
import IconApplemusic from "./icons/apple-music";
import IconTwitter from "./icons/twitter";
import IconYoutubemusic from "./icons/yt-music";
import IconBxlDeezer from "./icons/deezer";
import IconTidal from "./icons/tidal";

export default function Socials() {
  return (
    <div className="grid grid-cols-7 md:grid-cols-7 lg:grid-cols-7 gap-4">
      <Link
        href={"https://www.instagram.com/srir4mvad/"}
        className="hover:scale-125 translate-y-3 transition-all hover:text-pink-500"
      >
        <IconInstagram />
      </Link>
      <Link
        href={"https://x.com/sriram_vad"}
        className="hover:scale-125 translate-y-3 transition-all hover:text-pink-500"
      >
        <IconTwitter />
      </Link>
      <Link
        href={
          "https://open.spotify.com/artist/1N5RKj0XnPIM7A8K9vczQT?si=taBGjx-nRtaXTEilX_3Cwg"
        }
        className="hover:scale-125 translate-y-3 transition-all hover:text-pink-500"
      >
        <IconBxlSpotify />
      </Link>
      <Link
        href={""}
        className="hover:scale-125 translate-y-3 transition-all hover:text-pink-500"
      >
        <IconYoutubemusic />
      </Link>
      <Link
        href={"https://music.apple.com/fr/artist/ram/1776501483?l=en-GB"}
        className="hover:scale-125 translate-y-3 transition-all hover:text-pink-500"
      >
        <IconApplemusic />
      </Link>
      <Link
        href={"https://www.deezer.com/en/artist/289607931"}
        className="hover:scale-125 translate-y-3 transition-all hover:text-pink-500"
      >
        <IconBxlDeezer />
      </Link>
      <Link
        href={"https://tidal.com/browse/artist/51418733?u"}
        className="hover:scale-125 translate-y-3 transition-all hover:text-pink-500"
      >
        <IconTidal />
      </Link>
    </div>
  );
}
