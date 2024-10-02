"use client";

import Image from "next/image";
import { textVar } from "@/utils/variant";
import { motion } from "framer-motion";
import TextCard from "@/components/textCard";

export default function Home() {
  return (
    <div className="">
      <div className="w-screen leading-none tracking-tighter p-2 py-[4rem]">
        <div>
          <motion.h1
            variants={textVar}
            initial="initial"
            animate="animate"
            className="relative font-bold text-[200px]"
          >
            LEARN
          </motion.h1>
          <motion.h1
            variants={textVar}
            initial="initial"
            animate="animate"
            className="relative font-bold text-[200px]"
          >
            WITH
          </motion.h1>
          <motion.h1
            variants={textVar}
            initial="initial"
            animate="animate"
            className="relative font-bold text-[200px] flex items-center gap-4"
          >
            SOCRATES
            <Image
              src="/assets/vector1.svg"
              alt="Vector"
              height={150}
              width={150}
            />
          </motion.h1>
        </div>
      </div>

      <div className="w-screen py-[4rem] px-4">
        <motion.h1
          variants={textVar}
          initial="initial"
          animate="animate"
          className="relative font-bold text-7xl uppercase flex items-center gap-4 mb-4 tracking-tight"
        >
          The Problem of Modern Teaching
        </motion.h1>
        <div className="flex justify-evenly gap-10">
          <TextCard
            heading="Lack of Critical Thinking"
            content="
              Traditional teaching methods focus heavily on direct instruction,
              which limits students' ability to develop independent
              critical thinking skills."
          />
          <TextCard
            heading="Shallow Understanding"
            content="
              Many students rely on memorization rather than truly understanding
              concepts, leading to surface-level knowledge that doesn't
              promote deeper comprehension."
          />
          <TextCard
            heading="Dependence on Answers"
            content="
              Current educational tools often provide direct answers, preventing
              students from learning how to solve problems on their own, which
              hinders long-term learning and problem-solving abilities."
          />
        </div>
      </div>
    </div>
  );
}
