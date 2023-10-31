import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import vitePic from "../../public/vite.webp";
import mikroOrmPic from "../../public/mikroorm.jpg";
import nestjsPic from "../../public/nestjs.png";
import gatsbyPic from "../../public/gatsby.png";
import reactNativePic from "../../public/react-native.png";

type Props = {};

export default function ExperienceCardIcx({}: Props) {
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
        className="w-28 h-28 xl:[200] object-contain"
        src="/icx-logo-black.png"
        alt="Company pic"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">Full stack web development</h4>
        <p className="font-bold text-xl mt-1">
          ICX (Indonesia Crowdfunding Exchange)
        </p>
        <div className="flex space-x-4 my-2">
          <Image
            className="h-10 w-10 rounded-full object-cover"
            src={vitePic}
            alt="viteJs"
          />
          <Image
            className="h-10 w-10 rounded-full"
            src={mikroOrmPic}
            alt="mikroORM"
          />
          <Image
            className="h-10 w-10 rounded-full"
            src={nestjsPic}
            alt="NestJs"
          />
          <Image
            className="h-10 w-10 rounded-full"
            src={gatsbyPic}
            alt="GatsbyJS"
          />
          <Image
            className="h-10 w-10 rounded-full object-cover"
            src={reactNativePic}
            alt="react-native"
          />
        </div>
        <p className="my-4">June 2023 - Present</p>

        <ul className="list-disc space-y-2 ml-5 text-md">
          <li>Make a responsive front end with Mantine UI, Vite</li>
          <li>Maintaining ICX native app IOS and Android</li>
          <li>Make REST API with Nest.js</li>
          <li>Make RDBMS using Mikro ORM, and PostgreSQL</li>
          <li>Implement AGILE workflow using JIRA</li>
          <li>Deploying both front end and back end side of a CMS web app</li>
        </ul>
      </div>
    </article>
  );
}
