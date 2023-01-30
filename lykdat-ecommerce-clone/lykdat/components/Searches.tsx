import {Stack, Box, Button,} from '@chakra-ui/react';
import styles from './Searches.module.css';

const Searches = () => {
	return ( 
		<Box >
			<h1>Trending Searches</h1>
			<Stack direction='row' spacing={4}>
				<Button colorScheme='white' variant='outline'>
					Shoulder Pad
				</Button>
				<Button colorScheme='white' variant='outline'>
					Cut out top
				</Button>
			</Stack>
		</Box>
	 );
}
 
export default Searches;