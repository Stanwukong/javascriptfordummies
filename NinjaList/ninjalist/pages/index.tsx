import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, adipisci quis? Debitis eveniet excepturi asperiores quam harum? Totam, enim expedita! Nostrum deleniti error pariatur consectetur ipsum laboriosam voluptates ratione sunt.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, adipisci quis? Debitis eveniet excepturi asperiores quam harum? Totam, enim expedita! Nostrum deleniti error pariatur consectetur ipsum laboriosam voluptates ratione sunt.</p>
        <Link legacyBehavior href='/ninjas'>
          <a className={styles.btn}> See Ninja Listing </a></Link>
      </div>
    </div>
  )
}
