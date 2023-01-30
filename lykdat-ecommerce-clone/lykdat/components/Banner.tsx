import styles from '../styles/Banner.module.css';

const Banner = () => {

	const title = "Be notified when items on your wishlist are on sale.";


	return ( 
		<div className={styles.container}>
			<h1>{title}</h1>
			<button className={styles.button}>Get Price Alerts</button>
		</div>
	 );
}
 
export default Banner;