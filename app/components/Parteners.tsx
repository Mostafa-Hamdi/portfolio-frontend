"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import veda from "@/public/veda.png";
import tavan from "@/public/tavan.webp";
import newtoptrade from "@/public/newtoptrade.png";
import ecomarketing from "@/public/ecomarketing.webp";
import aura from "@/public/aura.png";
import kreaz from "@/public/kreaz.webp";
import saqr from "@/public/saqr.webp";
import zeiia from "@/public/zeiia.png";
import fasttracks from "@/public/fasttracks.webp";
import kion from "@/public/kionlogo.webp";
import almatbakh from "@/public/almatbakhlogo.webp";
import babel from "@/public/babellogo.webp";
import ruqyah from "@/public/ruqyahlogo.webp";
import info from "@/public/info.webp";

const PARTNERS = [
  { src: kion, name: "Kion Electric" },
  { src: babel, name: "Babel" },
  { src: info, name: "Info Magazine" },
  { src: almatbakh, name: "Al-Matbakh" },
  { src: ruqyah, name: "Al-Ruqyah" },
  { src: aura, name: "Aura CRM" },
  { src: kreaz, name: "Kreaz Desserts" },
  { src: zeiia, name: "Zeiia" },
  { src: saqr, name: "Saqr Sahraan Store" },
  { src: veda, name: "Veda" },
  { src: newtoptrade, name: "New Top Trade" },
  { src: tavan, name: "Tavan Gallery" },
  { src: ecomarketing, name: "ECO Performance Marketing" },
  { src: fasttracks, name: "Fasttracks" },
];

const Partners = () => {
  return (
    <div
      dir="ltr"
      className="relative rotate-[-1deg] py-6 bg-gradient-to-b from-transparent via-brand-cyan/5 to-transparent border-y border-brand-cyan/10"
    >
      <Marquee speed={50} gradient={false}>
        <div className="flex items-center gap-16 mx-8 text-text-faint">
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="text-xl font-semibold hover:text-brand-cyan transition-colors"
            >
              <Image src={partner.src} alt={partner.name} className="w-[150px]" />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Partners;
