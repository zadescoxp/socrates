"use client";

import Image from "next/image";


export default function Chat() {
  return (
    <div className="h-[80dvh] flex justify-center items-center w-screen bg-primary">
      <div className="flex-col h-full w-3/4 relative">
        <div className="h-[95%] w-full"></div>
        <form className="flex mt-2 items-center justify-center gap-2">
          <input
            className="border-2 border-secondary bg-[transparent] px-6 outline-none w-full py-3 rounded-full"
            type="text"
            placeholder="Let's Chat"
          />
          <button><Image src={"/assets/mic.svg"} height={40} width={40} alt="Mic" /></button>
          <button><Image src={"/assets/gallery.svg"} height={45} width={45} alt="Gallery" /></button>
        </form>
        <p className="text-sm py-2 pl-6 uppercase">Press enter to send</p>
      </div>
    </div>
  );
}
