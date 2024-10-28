import Image from "next/image";
import Link from "next/link";

export interface ProjectCardProps {
  projectName: string;
  imagePath: string;
  link: string;
}

export default function ProjectCard({
  projectName,
  imagePath,
  link,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <Link href={link}>
        <Image
          src={imagePath}
          width={300}
          height={300}
          alt={projectName}
          className="rounded-3xl"
        />
      </Link>
    </div>
  );
}
