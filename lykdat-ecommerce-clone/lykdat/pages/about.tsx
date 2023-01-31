import AboutHero from "<lykdat>/components/AboutHero";
import Feedback from "<lykdat>/components/Feedback";
import Footer from "<lykdat>/components/Footer";
import Navbar from "<lykdat>/components/Navbar";
import Partners from "<lykdat>/components/Partners";
import Story from "<lykdat>/components/Story";
import Team from "<lykdat>/components/Team";
import { Box } from "@chakra-ui/react";
import Head from "next/head";
const About = () => {
	return ( 
		<>
		<Head>
        <title>LykDat | About</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      	</Head>
		<Box>
		<Navbar/>
		<AboutHero/>
		<Story/>
		<Team/>
		<Partners/>
		<Feedback/>
		<Footer/>
		</Box>
		</>
	 );
}
 
export default About;