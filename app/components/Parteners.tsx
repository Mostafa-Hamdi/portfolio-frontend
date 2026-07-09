"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import asia from "@/public/asia.png";
import veda from "@/public/veda.png";
import tavan from "@/public/tavan.webp";
import newtoptrade from "@/public/newtoptrade.png";
import ecomarketing from "@/public/ecomarketing.webp";
import drmahmoud from "@/public/drmahmoud.png";
import aura from "@/public/aura.png";
import kreaz from "@/public/kreaz.webp";
import saqr from "@/public/saqr.webp";
import zeiia from "@/public/zeiia.png";
import fasttracks from "@/public/fasttracks.webp";
import kion from "@/public/kionlogo.webp";
import almatbakh from "@/public/almatbakhlogo.webp";
import babel from "@/public/babellogo.webp";
import ruqyah from "@/public/ruqyahlogo.webp";
import info from "@/public/infologo.webp";
const Partners = () => {
  return (
    <div className="relative rotate-[-1deg] py-6 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent border-y border-cyan-400/10">
      <Marquee speed={50} gradient={false}>
        <div className="flex items-center gap-16 mx-8 text-gray-400">
             <div className="text-xl font-semibold hover:text-cyan-400 transition-colors">
            <Image src={kion} alt="" className="w-[150px]" />
          </div>
          <div className="text-xl font-semibold hover:text-cyan-400 transition-colors">
            <Image src={babel} alt="" className="w-[150px]" />
          </div>
          <div className="text-xl font-semibold hover:text-cyan-400 transition-colors">
            <Image src={info} alt="" className="w-[150px]" />
          </div>
          <div className="text-xl font-semibold hover:text-cyan-400 transition-colors">
            <Image src={almatbakh} alt="" className="w-[150px]" />
          </div>
          <div className="text-xl font-semibold hover:text-cyan-400 transition-colors">
            <Image src={ruqyah} alt="" className="w-[150px]" />
          </div>
          <div className="w-1 h-1 bg-cyan-400/50 rounded-full"></div>
          <div className="text-xl font-semibold hover:text-cyan-400 transition-colors">
            <Image src={aura} alt="" className="w-[150px]" />
          </div>
          <div className="text-xl font-semibold hover:text-cyan-400 transition-colors">
            <Image src={kreaz} alt="" className="w-[150px]" />
          </div>
          <div className="text-xl font-semibold hover:text-cyan-400 transition-colors">
            <Image src={zeiia} alt="" className="w-[150px]" />
          </div>
          <div className="text-xl font-semibold hover:text-cyan-400 transition-colors">
            <Image src={saqr} alt="" className="w-[150px]" />
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
          <div className="w-1 h-1 bg-cyan-400/50 rounded-full"></div>
          <div className="text-xl font-semibold hover:text-cyan-400 transition-colors">
            <Image src={ecomarketing} alt="" className="w-[150px]" />
          </div>
          <div className="w-1 h-1 bg-cyan-400/50 rounded-full"></div>
          <div className="text-xl font-semibold hover:text-cyan-400 transition-colors">
            <Image src={fasttracks} alt="" className="w-[150px]" />
          </div>
       
        </div>
      </Marquee>
    </div>
  );
};

export default Partners;
