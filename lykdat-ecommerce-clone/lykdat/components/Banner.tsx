import styles from '../styles/Banner.module.css';
import { Button, ButtonGroup } from '@chakra-ui/react'

const Banner = ({ title, buttonText }) => {

	return ( 
		<div className={styles.container}>
			<h1>{title}</h1>
			<Button colorScheme='black' className={styles.button}>{buttonText}</Button>
		</div>
	 );
}
 
export default Banner;