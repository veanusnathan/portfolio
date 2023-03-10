import Head from "next/head";
import About from "../components/About";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll scroll-smooth z-0">
			<Head>
				<title>Veanus Nathan Portfolio</title>
			</Head>
			<Header />
			<section id="hero" className="snap-start scroll-smooth">
				<Hero />
			</section>
			<section id="about" className="snap-center scroll-smooth">
				<About />
			</section>
			<section id="experience" className="snap-center">
				<Experience />
			</section>
			<section className="snap-start">
				<Skills />
			</section>

			{/* Projects */}

			{/* Contact Me */}
		</div>
	);
}
