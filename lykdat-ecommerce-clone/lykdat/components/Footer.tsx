import {Stack, Box, Button,} from '@chakra-ui/react';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';

const Footer = () => {
	return ( 
		<Box>
			<img src="./lykdat-logo.svg" alt="logo" />
			<div>
				<a href="/about">About us</a>
				<a href="#">Blog</a>
				<a href="#">LykDat for Business</a>
				<a href="#">Contact</a>
			</div>
			<div>
				<a href="#">Privacy Policy</a>
				<a href="#">Terms of Service</a>
				<p>© 2023 lykdat.com</p>
			</div>
			
		</Box>
	 );
}
 
export default Footer;