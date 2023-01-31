import { Box, Text, SimpleGrid, Card } from "@chakra-ui/react";
const Team = () => {
	return ( 
		<Box>
			<Text as='b' fontSize='2xl'>Our Team</Text>
			<SimpleGrid columns={4} spacing={10}>
				<Card>
					<img src="https://lykdat.com/our-team/ifedapo@2x.jpg" alt="Ifedapo" />
				</Card>
				<Card>
					<img src="https://lykdat.com/our-team/adeyemi@2x.jpg" alt="Adeyemi" />
				</Card>
				<Card>
					<img src="https://lykdat.com/our-team/rabiat@2x.jpg" alt="Rabiat" />
				</Card>
				<Card>
					<img src="https://lykdat.com/our-team/olayinka@2x.jpg" alt="Olayinka" />
				</Card>
				<Card>
					<img src="https://lykdat.com/our-team/usman@2x.jpg" alt="Usman" />
				</Card>
			</SimpleGrid>
		</Box>
	 );
}
 
export default Team;