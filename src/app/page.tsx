"use client";

import Image from "next/image";
import { textVar } from "@/utils/variant";
import { motion } from "framer-motion";
import TextCard from "@/components/textCard";
import Footer from "@/components/footer";

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
      <motion.h1 variants={textVar} initial="initial" animate="animate" viewport={{ once: true }} className="relative flex items-center gap-4 tracking-tight uppercase px-5 font-bold text-7xl py-10">Problems in Modern Education <Image src={"/assets/link-dark.svg"} height={50} width={50} alt="" /></motion.h1>
      <div className="flex items-center justify-center gap-5 px-5">
        <TextCard
          heading="Lack of Critical Thinking"
          content="Traditional teaching methods focus heavily on direct instruction, which limits students' ability to develop independent critical thinking skills."
          img="/assets/LOCT1.jpg"
        />
        <TextCard
          heading="Shallow Understanding"
          content="
              Many students rely on memorization rather than truly understanding concepts, leading to surface-level knowledge that doesn't promote deeper comprehension."
          img="/assets/SU.jpg"
        />
        <TextCard
          heading="Dependence on Answers"
          content="
              Current educational tools often provide direct answers, preventing students from learning how to solve problems on their own, which hinders long-term learning and problem-solving abilities."
          img="/assets/DOA.jpg"
        />
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
      <motion.h1 variants={textVar} initial="initial" animate="animate" viewport={{ once: true }} className="flex items-center gap-4 relative tracking-tight uppercase px-5 font-bold text-7xl py-10">How we solve the problem <Image src={"/assets/link-dark.svg"} height={50} width={50} alt="" /></motion.h1>
      <div className="flex items-center justify-center gap-5 px-5">
        <TextCard
          heading="Age Specific Learning"
          content="Socrates is designed to cater to the unique learning needs of students across different age groups. It tailors its approach by adjusting the complexity of questions, examples, and topics based on the student’s age and cognitive development."
          img="/assets/SAC.jpg"
        />
        <TextCard
          heading="Imagination to Reality"
          content="
              Socrates goes beyond traditional learning by encouraging students to transform their imagination into tangible understanding. Through thought-provoking questions, it helps learners visualize abstract concepts and apply them in real-world contexts."
          img="/assets/ITV.jpg"
        />
        <TextCard
          heading="Researched Resources"
          content="
              Socrates leverages a vast pool of carefully curated, research-based resources to provide students with accurate and reliable information."
          img="/assets/RRI.jpg"
        />
      </div>
      <Footer />
    </div>
  );
}
