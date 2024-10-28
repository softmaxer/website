import Link from "next/link";
import IconInstagram from "./icons/instagram";
import IconBxlSpotify from "./icons/spotify";
import IconApplemusic from "./icons/apple-music";
import IconTwitter from "./icons/twitter";
import IconYoutubemusic from "./icons/yt-music";
import IconBxlDeezer from "./icons/deezer";

export default function Socials() {
  return (
    <div className="grid grid-cols-6 md:grid-cols-6 lg:grid-cols-6 gap-4">
      <Link
        href={""}
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
        href={""}
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
        href={""}
        className="hover:scale-125 translate-y-3 transition-all hover:text-pink-500"
      >
        <IconApplemusic />
      </Link>
      <Link
        href={""}
        className="hover:scale-125 translate-y-3 transition-all hover:text-pink-500"
      >
        <IconBxlDeezer />
      </Link>
    </div>
  );
}
