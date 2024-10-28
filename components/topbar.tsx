"use client";
import Link from "next/link";
import GoBack from "./buttons/back";

export interface TopBarProps {
  pageTitle: string;
  navTo: string;
}

export default function TopBar({ pageTitle, navTo }: TopBarProps) {
  return (
    <div className="flex flex-row mt-12 ml-5 md:ml-14 lg:ml-16 gap-10">
      <Link href={navTo}>
        <GoBack />
      </Link>
      <p className="text-4xl text-left font-solanelBold">{pageTitle}</p>
    </div>
  );
}
