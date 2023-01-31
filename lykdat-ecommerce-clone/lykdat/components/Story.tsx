import { AspectRatio, Box, Button, Stack, Text } from "@chakra-ui/react";
import { FiCamera } from "react-icons/fi";


const Story = () => {
	return ( 
		<Box>
			<Stack spacing={8}>
				<Text as='b' fontSize='2xl'>Our Story</Text>
				<Text fontSize='md'>Lykdat launched in 2019 as a Fashion Search Engine that helps shoppers find and compare fashion products across all stores on the web. Users can search with anything: text, image, or even social media posts. Beyond search, users are able to compare prices of visually similar fashion products across the web.</Text>
				<Text fontSize='md'>Driven by the desire to help more people discover fashion easily, we have been able to grow from offering our technology to end users directly to making it possible for fashion brands to add an image search feature to their ecommerce website, offer smart recommendations and provide styling options.</Text>
				<Text fontSize='md'>We are small team of people that are passionate about fashion and technology. We believe that shopping online can be easier and more rewarding if you can search for what you want without having to figure out a way to describe it.</Text>
				<AspectRatio maxW='400px' ratio={0.8}>
				<iframe
					title='lykdat'
					src='https://storage.googleapis.com/amoeba-bucket-prod/lykdat_assets/about_us/text-search-demo.MP4'
					allowFullScreen
				/>
				</AspectRatio>
				<Text as='b' fontSize='2xl'>Our Mission</Text>
				<Text fontSize='md'>Lykdat launched in 2019 as a Fashion Search Engine that helps shoppers find and compare fashion products across all stores on the web. Users can search with anything: text, image, or even social media posts. Beyond search, users are able to compare prices of visually similar fashion products across the web.</Text>
				<Box padding='4' bg='blackAlpha.900' borderRadius='6'>
					<Stack spacing={7}>
						<Text as='b' fontSize='2xl' color='white'>A Picture is Worth More Than A Thousand Words</Text>
						<Text fontSize='md' color='white'>Fashion is visual. The colors, the textures, the cuts, the symmetry or lack of it, the shiny buttons and tiny little embellishments. You can easily capture all these as details in a single image. With our reverse image search feature, you can search with images to find the fashion items you are looking for. You can think of us as Shazam for clothes.</Text>
					</Stack>
					<Button leftIcon={<FiCamera/>} colorScheme='blue' variant='solid'>Image Search</Button>
				</Box>
			</Stack>
		</Box>
	 );
}
 
export default Story;