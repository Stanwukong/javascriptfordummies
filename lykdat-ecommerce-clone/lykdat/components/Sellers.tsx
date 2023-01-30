import { SimpleGrid, Card } from "@chakra-ui/react";
const Sellers = () => {
	return ( 
		<div>
			<h2>Shop by Seller</h2>
			<SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
			<Card>
				<img src="https://1000logos.net/wp-content/uploads/2021/04/Asos-logo.png" alt="asos" />
			</Card>
			<Card>
				<img src="https://1000logos.net/wp-content/uploads/2021/04/Asos-logo.png" alt="asos" />
			</Card>
			<Card>
				<img src="https://1000logos.net/wp-content/uploads/2021/04/Asos-logo.png" alt="asos" />
			</Card>
			</SimpleGrid>
		</div>
	 );
}
 
export default Sellers;