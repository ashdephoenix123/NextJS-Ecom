import Head from 'next/head'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import styles from '../styles/Home.module.scss'


export default function Home() {
  return (
    <>
      <img src='/homeImage2.png' alt='hero' className={styles.homeImage1}/>
    </>
  )
}
