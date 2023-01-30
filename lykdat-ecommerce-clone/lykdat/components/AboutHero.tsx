import { Button, ButtonGroup, Box, Container } from "@chakra-ui/react";


const AboutHero = () => {
	return ( 
		<Box>
			<Container>
				<h2>Personalised Shopping Experience With Image Search</h2>
				<p>Our cutting edge visual AI makes it easy for customers to find the right products even when they don’t have the right words.</p>
			<ButtonGroup>
				<Button colorScheme='blackAlpha' variant='outline'>
					Image Search
				</Button>
				<Button colorScheme='teal' variant='outline'>
						LykDat for Business
				</Button>
			</ButtonGroup>
			</Container>
			<Container>
				<img src="./hero-image.png" alt="hero-image" />
			</Container>
		</Box>
	 );
}
 
export default AboutHero;