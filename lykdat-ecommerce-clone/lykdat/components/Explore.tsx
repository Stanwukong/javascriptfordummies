import { Box, Card, Image, Stack, Text } from "@chakra-ui/react";
const Explore = () => {
	return ( 
		<Box>
			<Stack spacing={5}>
				<Text>Explore</Text>
				<Text>Shop for items by these pictures from around the world</Text>
				<Text>Fashion inspiration from other shoppers</Text>
			</Stack>
			<p>Map Images Below Here:</p>
			<Card>
				<Image
					src="https://cms-beta-app-001.lykdat.com/media/inspo--dj629CH5ZHgAIM9VGS4Mj8lfCcj2.png"
					alt="Example Image"
					borderRadius="10px"
					maxW="300px"
					>
				</Image>
				<Text>Shop this look</Text>
			</Card>
		</Box>
	 );
}
 
export default Explore;