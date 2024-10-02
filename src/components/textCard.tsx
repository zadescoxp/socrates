interface props {
  heading: string;
  content: string;
}

import Image from "next/image";

export default function TextCard({ heading, content }: props) {
  return (
    <div className="bg-secondary text-primary p-10 w-[50rem] h-[15rem] rounded-xl">
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
    </div>
  );
}
