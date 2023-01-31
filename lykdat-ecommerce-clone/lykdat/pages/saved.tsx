import Feedback from "<lykdat>/components/Feedback";
import Footer from "<lykdat>/components/Footer";
import Items from "<lykdat>/components/Items";
import Navbar from "<lykdat>/components/Navbar";
import Product from "<lykdat>/components/Product";
import { Box } from "@chakra-ui/react";
import Head from "next/head";

const Saved = () => {
	return ( 
		<Box>
			<Head>
			<title>LykDat | Explore</title>
			<meta name="description" content="Generated by create next app" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar/>
			<Items/>
			<Product title="Try it out"/>
			<Feedback/>
			<Footer/>
		</Box>
	 );
}
 
export default Saved;