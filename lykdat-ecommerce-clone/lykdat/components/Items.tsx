import { Box, Button } from "@chakra-ui/react";
import { VscHome } from 'react-icons/vsc';

const Items = () => {
	return ( 
		<Box>
			<p>You have no saved items</p>
			<Button leftIcon={<VscHome />} colorScheme='teal' variant='solid'>
				<a href="/">Click Here to return home</a>
			</Button>
		</Box>
	 );
}
 
export default Items;