'use client'

import Image from "next/image";
import { textVar } from "@/utils/variant";
import {motion} from 'framer-motion'

interface props {
  heading: string;
  content: string;
  img: string;
}

export default function TextCard({
  heading,
  content,
  img,
}: props) {
  return (
    <div className="bg-secondary text-primary p-10 w-[50rem] min-h-[15rem] rounded-xl">
      <h1 className="text-3xl flex items-center gap-4 mb-4">
        {heading}
        <Image
          src={"/assets/link.svg"}
          height={100}
          width={100}
          alt=""
          className="h-[1.5rem] w-auto"
        />
      </h1>
      <p className="text-md">{content}</p>
    <div
      className={`group uppercase relative text-primary`}
    >
      <div className="absolute bottom-0 left-0 p-5 z-[2]">
        <motion.h1 variants={textVar} initial="initial" whileInView="animate" viewport={{ once: true }} className="relative text-5xl font-bold leading-none flex items-center gap-4 mb-4">
          {heading}
        </motion.h1>
        <motion.p variants={textVar} initial="initial" whileInView="animate" viewport={{ once: true }} className="relative text-sm">{content}</motion.p>
      </div>
      <Image
        src={img}
        height={1080}
        width={1080}
        className="grayscale h-full w-auto object-cover group-hover:grayscale-0 transition-all"
        alt=""
      />
      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-[#000] to-[transparent] z-[1]"></div>
    </div>
  );
}
