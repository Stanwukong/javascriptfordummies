import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '<lykdat>/styles/Home.module.css'
import Navbar from '<lykdat>/components/Navbar'
import Banner from '<lykdat>/components/Banner'
import Landing from '<lykdat>/components/Landing'
import Product from '<lykdat>/components/Product'
import Discount from '<lykdat>/components/Discount'
import Sellers from '<lykdat>/components/Sellers'
import Searches from '<lykdat>/components/Searches'
import Feedback from '<lykdat>/components/Feedback'
import Footer from '<lykdat>/components/Footer'
import Profile from '<lykdat>/components/Profile'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>LykDat</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Profile/>
      <Navbar/>
      <Banner title="Be notified when items on your wishlist are on sale." buttonText="Get Price Alerts"/>
      <Landing/>
      <Product title = "Trending Products"/>
      <Discount/>
      <Product title="Vintage Pieces" />
      <Sellers/>
      <Product title="You May Also Like"/>
      <Searches/>
      <Feedback/>
      <Banner title="Visual product discovery for fashion e-commerce businesses" buttonText="Learn More"/>
      <Footer />
    </>
  )
}
