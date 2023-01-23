import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 1.2,
			}}
			className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">about</h3>
			<motion.img
				initial={{
					x: -200,
					opacity: 0,
				}}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
				transition={{
					duration: 1.5,
				}}
				src="/line_129625878263564.jpg"
				className="-mb-28 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
			/>
			<div className="space-y-10 px-0 md:px-10">
				<h4 className="text-4xl font-semibold">Here&apos;s my background</h4>
				<p className="text-sm">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis impedit quo facere.
					Adipisci vero quasi dolorem quae quo distinctio iure corporis illo suscipit architecto
					voluptatem odio reprehenderit nesciunt, perspiciatis ut debitis nulla nobis, nisi
					voluptates, quis explicabo quos voluptas! Sit, cumque reprehenderit asperiores facere
					illum, accusamus vel nisi quod repudiandae itaque laudantium fuga corrupti officiis veniam
					eum fugit non odio eveniet esse impedit velit architecto dolorem. Veniam esse, dolores
					suscipit obcaecati amet blanditiis assumenda corporis voluptatum quidem et, aspernatur
					nesciunt qui numquam expedita adipisci fuga vitae perspiciatis. Labore mollitia cupiditate
					suscipit itaque numquam quae, incidunt laborum reprehenderit adipisci ad? Asperiores.
				</p>
			</div>
		</motion.div>
	);
}
