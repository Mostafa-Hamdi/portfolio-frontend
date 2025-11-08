"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import asia from "@/public/asia.png";
import veda from "@/public/veda.png";
import tavan from "@/public/tavan.avif";
import newtoptrade from "@/public/newtoptrade.png";
import ecomarketing from "@/public/ecomarketing.webp";
import drmahmoud from "@/public/drmahmoud.png";
const Partners = () => {
  return (
    <div className="relative rotate-[-1deg] py-6 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent border-y border-cyan-400/10">
      <Marquee speed={50} gradient={false}>
        <div className="flex items-center gap-16 mx-8 text-gray-400">
          <div className="w-1 h-1 bg-cyan-400/50 rounded-full"></div>
          <div className="text-xl font-semibold hover:text-cyan-400 transition-colors">
            <Image src={asia} alt="" className="w-[150px]" />
          </div>
          <div className="w-1 h-1 bg-cyan-400/50 rounded-full"></div>
          <div className="text-xl font-semibold hover:text-cyan-400 transition-colors">
            <Image src={veda} alt="" className="w-[150px]" />
          </div>
          <div className="w-1 h-1 bg-cyan-400/50 rounded-full"></div>
          <div className="text-xl font-semibold hover:text-cyan-400 transition-colors">
            <Image src={newtoptrade} alt="" className="w-[150px]" />
          </div>
          <div className="w-1 h-1 bg-cyan-400/50 rounded-full"></div>
          <div className="text-xl font-semibold hover:text-cyan-400 transition-colors">
            <Image src={tavan} alt="" className="w-[150px]" />
          </div>
          <div className="w-1 h-1 bg-cyan-400/50 rounded-full"></div>
          <div className="text-xl font-semibold hover:text-cyan-400 transition-colors">
            <Image src={drmahmoud} alt="" className="w-[100px]" />
          </div>
          <div className="w-1 h-1 bg-cyan-400/50 rounded-full"></div>
          <div className="text-xl font-semibold hover:text-cyan-400 transition-colors">
            <Image src={ecomarketing} alt="" className="w-[150px]" />
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Partners;
