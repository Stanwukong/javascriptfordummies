import styles from '../styles/Navbar.module.css';
const Navbar = () => {
	return ( 
		<div className={styles.container}>
			<div className={styles.logo}>
				<img src="./lykdat-logo.svg" alt="logo" />
			</div>
			<div className={styles.inputs}>
				<input type="file"  />
				<input type="text" />
			</div>
			<div>
				<button>NGN{}</button>
			</div>
			<div>
				<a href="/inspiration">INSPIRATIONS</a>
				<a href="#">PROFILE</a>
			</div>
		</div>
	 );
}
 
export default Navbar;