import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
	return (
		<header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
			<motion.div
				initial={{
					x: -500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.5,
				}}
				className="flex flex-row items-center"
			>
				{/* Socials */}
				<SocialIcon
					url="https://www.linkedin.com/in/veanus-nathan-897235254/"
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://www.instagram.com/veanusnathan/"
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://github.com/veanusnathan"
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://open.spotify.com/user/hd5nwvge9a9c8c66dycqhmdwz?si=463b056b02794efb&nd=1"
					fgColor="gray"
					bgColor="transparent"
				/>
			</motion.div>
			<motion.div
				initial={{
					x: 500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.5,
				}}
				className="flex flex-row items-center text-gray-300"
			>
				<SocialIcon
					network="whatsapp"
					url="https://wa.me/+6282246704951"
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					network="email"
					url="mailto:veanusnathan.work@gmail.com"
					fgColor="gray"
					bgColor="transparent"
				/>
				<a
					href="https://drive.google.com/file/d/152lm80u6SzocyVcAI-i3lZQl9wbXfuvc/view?usp=sharing"
					className="uppercase cursor-pointer text-sm border-2 border-gray-500 rounded-full px-2 hover:bg-gray-700 hidden md:inline-flex text-gray-400"
				>
					RESUME
				</a>
			</motion.div>
		</header>
	);
}
