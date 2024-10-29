"use client";
import Image from "next/image";
import { motion } from "framer-motion";
export default function ProfileBackdrop() {
  return (
    <div className="md:-space-x-24 lg:-space-x-24 -space-y-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 opacity-45">
      <motion.div
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        className="w-64 h-64 text-right rounded-full"
      >
        <Image
          src={"/solo1.png"}
          width={700}
          height={700}
          alt="solo1"
          className="rounded-full"
        />
      </motion.div>

      <motion.div
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        className="w-64 h-64 text-right rounded-full"
      >
        <Image
          src={"/solo2.png"}
          width={500}
          height={500}
          alt="solo2"
          className="rounded-full"
        />
      </motion.div>

      <motion.div
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        className="w-64 h-64 text-right rounded-full"
      >
        <Image
          src={"/band.jpg"}
          width={500}
          height={500}
          alt="band"
          className="rounded-full"
        />
      </motion.div>
    </div>
  );
}
