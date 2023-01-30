import { Button, 
		 Card, 
		 CardHeader, 
		 CardBody, 
		 CardFooter, 
		 Heading, 
		 IconButton,
		 Text, 
		 SimpleGrid  } from '@chakra-ui/react'
import Image from 'next/image';
import styles from '../styles/Product.module.css';
import {MdOutlineFavoriteBorder} from 'react-icons/md';
const Product = ({ title }) => {

	const product = {
		name: 'Knotted Tank Top',
		price: 'NGN 11955.40',
		seller: 'na-kd'
	}

	return ( 
		<div>
		<h1 className={styles.title}>{title}</h1>
		<SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
		<Card className={styles.container}>
				<div>
				<img src='https://images.unsplash.com/photo-1613005798967-632017e477c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60'
				alt='Green double couch with wooden legsg'
				className={styles.photo}
				/>
				<IconButton
				variant='outline'
				colorScheme='teal'
				aria-label='Send email'
				icon={<MdOutlineFavoriteBorder />}
				/>
				</div>
				<p className={styles.name}>{product.name}</p>
				<p className={styles.price}>{product.price}</p>
				<p>{product.seller}</p>
				<a href="#">See more like this</a>
			</Card>
			<Card className={styles.container}>
				<div>
				<img src='https://images.unsplash.com/photo-1613005798967-632017e477c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60'
				alt='Green double couch with wooden legsg'
				className={styles.photo}
				/>
				<IconButton
				variant='outline'
				colorScheme='teal'
				aria-label='Send email'
				icon={<MdOutlineFavoriteBorder />}
				/>
				</div>
				<p className={styles.name}>{product.name}</p>
				<p className={styles.price}>{product.price}</p>
				<p>{product.seller}</p>
				<a href="#">See more like this</a>
			</Card>
			<Card className={styles.container}>
				<div>
				<img src='https://images.unsplash.com/photo-1613005798967-632017e477c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60'
				alt='Green double couch with wooden legsg'
				className={styles.photo}
				/>
				<IconButton
				variant='outline'
				colorScheme='teal'
				aria-label='Send email'
				icon={<MdOutlineFavoriteBorder />}
				/>
				</div>
				<p className={styles.name}>{product.name}</p>
				<p className={styles.price}>{product.price}</p>
				<p>{product.seller}</p>
				<a href="#">See more like this</a>
			</Card>
			<Card className={styles.container}>
				<div>
				<img src='https://images.unsplash.com/photo-1613005798967-632017e477c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60'
				alt='Green double couch with wooden legsg'
				className={styles.photo}
				/>
				<IconButton
				variant='outline'
				colorScheme='teal'
				aria-label='Send email'
				icon={<MdOutlineFavoriteBorder />}
				/>
				</div>
				<p className={styles.name}>{product.name}</p>
				<p className={styles.price}>{product.price}</p>
				<p>{product.seller}</p>
				<a href="#">See more like this</a>
			</Card>
		</SimpleGrid>
		<button className={styles.see}>See more</button>
		</div>
	 );
}
 
export default Product;