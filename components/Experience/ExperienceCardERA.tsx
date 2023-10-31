import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCardERA({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-28 h-28 rounded-md xl:[200] object-contain object-center bg-white"
        src="https://eraindonesia.com/images/logo.png"
        alt="Company pic"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">Marketing Associate</h4>
        <p className="font-bold text-xl mt-1">ERA</p>
        <p className="my-4">March 2018 - September 2022 </p>

        <ul className="list-disc space-y-2 ml-5 text-md">
          <li>Managing client real estate whether its selling or renting </li>
          <li>
            Giving financial input on buying, selling, renting or refinancing a
            real estate
          </li>
          <li>
            Making sure transaction run smoothly on either end, buyer or seller
          </li>
          <li>After sales service</li>
        </ul>
      </div>
    </article>
  );
}
