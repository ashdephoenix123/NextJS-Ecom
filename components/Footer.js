import React from 'react'
import styles from '@/styles/Footer.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {

    const year = new Date().getFullYear();
    
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footer__links}>
                    <div className={styles.footer__links1}>
                        <Link href="/"><Image className={styles.footer__logo} src="/fav.png" alt="logo" width={100} height={100}/></Link>
                        <p className={styles.footer__links1}>Entrusting everyone by delivering happiness along with the orders. </p>
                    </div>
                    <div className={styles.footer__links1}>
                        <h3>Shop</h3>
                        <ul className={styles.footer__links1}>
                            <li className={`${styles.footer__linksLists} ${styles.adjusting}`}><Link href="/tshirts">T-Shirts</Link></li>
                            <li className={`${styles.footer__linksLists} ${styles.adjusting}`}><Link href="/sweatshirts">Sweatshirts</Link></li>
                            <li className={`${styles.footer__linksLists} ${styles.adjusting}`}><Link href="/hoodies">Hoodies</Link></li>
                            <li className={`${styles.footer__linksLists} ${styles.adjusting}`}><Link href="/stickers">Stickers</Link></li>
                            <li className={`${styles.footer__linksLists} ${styles.adjusting}`}><Link href="/mugs">Mugs</Link></li>
                        </ul>
                    </div>
                    <div className={styles.footer__links1}>
                        <h3>Customer Service</h3>
                        <ul className={styles.footer__links1}>
                            <li className={styles.footer__linksLists}><Link href="/contact">Contact Us</Link></li>
                            <li className={styles.footer__linksLists}><Link href="/about">About Us</Link></li>
                            <li className={styles.footer__linksLists}><Link href="/returnpolicy">Return Policy</Link></li>
                        </ul>
                    </div>
                    <div className={styles.footer__links1}>
                        <h3>Policy</h3>
                        <ul className={styles.footer__links1}>
                            <li className={styles.footer__linksLists}><Link href="/privacypolicy">Privacy Policy</Link></li>
                            <li className={styles.footer__linksLists}><Link href="/terms">Terms & Conditions</Link></li>
                            <li className={styles.footer__linksLists}><Link href="/sources">Sources</Link></li>
                        </ul>
                    </div>
                    <div className={styles.footer__links1}>
                        <Image className={styles.footer__pay} src="/pay.png" alt="logo"  width={100} height={100}/>
                    </div>
                </div>
                <div className={styles.footer__branding}>
                    <h3>Follow me on</h3>
                    <Link target='_blank' rel='noopener' href="https://twitter.com/akashsarki_"><Image className={styles.socials} src="/twitter.png" alt="twi"  width={20} height={20}/></Link>
                    <Link target='_blank' rel='noopener' href="https://www.instagram.com/akashsarki_/"><Image className={styles.socials} src="/instagram.png" alt="ins"  width={20} height={20}/></Link>
                </div>
                <div className={styles.footer__last}>
                    <span>Copyright &copy; {year} The Sharkk Co. All Rights Reserved.</span>
                    <span>Made with ❤️</span>
                </div>
            </footer>
        </>
    )
}

export default Footer
