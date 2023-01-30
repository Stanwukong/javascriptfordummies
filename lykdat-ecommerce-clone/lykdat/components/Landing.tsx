import styles from '../styles/Landing.module.css';

const Landing = () => {
	return ( 
		<div className={styles.container}>
			<div>
				<h3>Shop for Items You Like</h3>
			</div>
			<div>
				<ul className={styles.sort}>
					<li>Neutral Fashion</li>
					<li>Women Fashion</li>
					<li>Men Fashion</li>
				</ul>
			</div>
			<div>
				<input type="file" />
				<ul>
					{/* Content to be Mapped */}
				</ul>
			</div>
		</div>
	 );
}
 
export default Landing;