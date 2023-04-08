import React, { useRef } from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'
import { IoMdArrowDropup } from 'react-icons/io'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import {HiPlusCircle, HiMinusCircle} from 'react-icons/hi'
import {BsFillBagFill} from 'react-icons/bs'

const Navbar = () => {
    const cartCheckboxRef = useRef();

    function unCheck() {
        if (cartCheckboxRef.current) {
            cartCheckboxRef.current.checked = false;
        }
    }

    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.navigation}>
                    <input type="checkbox" className={styles.navigation__checkbox} id="navi-toggle" />

                    <label htmlFor="navi-toggle" className={styles.navigation__button}>
                        <span className={styles.navigation__icon}>&nbsp;</span>
                    </label>

                    <div className={styles.navigation__background}>&nbsp;</div>

                    <div className={styles.navigation__nav}>
                        <ul className={styles.navigation__list}>
                            <li className={styles.navigation__item}><a href="#" className={styles.navigation__link}>Men</a></li>
                            <li className={styles.navigation__item}><a href="#" className={styles.navigation__link}>Women</a></li>
                            <li className={styles.navigation__item}><a href="#" className={styles.navigation__link}>Kids</a></li>
                            <li className={styles.navigation__item}><a href="#" className={styles.navigation__link}>Home & Living</a></li>
                            <li className={styles.navigation__item}><a href="#" className={styles.navigation__link}>Beauty</a></li>
                            <li className={styles.navigation__item}><a href="#" className={styles.navigation__link}>More</a></li>
                        </ul>
                    </div>
                </div>
                <Link href="/">
                    <img className={styles.logo} src="/6.png" alt="company logo" />
                </Link>
                <form className={styles.search}>
                    <input type="text" className={styles.search__input} placeholder="Search for products, brands and more" />
                    <button className={styles.search__button}>
                        <svg className={styles.search__icon}>
                            <use xlinkHref="sprite.svg#icon-magnifying-glass"></use>
                        </svg>
                    </button>
                </form>
                <ul className={styles.list}>
                    <li className={`${styles.list__item} ${styles.dropdown}`}>
                        <div className={styles.list__itemLink}>All Products<IoMdArrowDropup className={styles.upIcon} size={15} /></div>
                        <div className={`${styles.list__item} ${styles.dropdownContent}`} >
                            <Link className={styles.list__itemLink3} href='/tshirts'>T-Shirts</Link>
                            <Link className={styles.list__itemLink3} href='/hoodies'>Hoodies</Link>
                            <Link className={styles.list__itemLink3} href='/mugs'>Mugs</Link>
                            <Link className={styles.list__itemLink3} href='/stickers'>Stickers</Link>
                        </div>
                    </li>

                    <li className={`${styles.list__item} ${styles.dropdown}`}>
                        <Link className={styles.list__itemLink} href="/login">LogIn<IoMdArrowDropup className={styles.upIcon} size={15} /></Link>
                        <div className={`${styles.list__item} ${styles.dropdownContent}`} >
                            <span>New User?</span>
                            <Link className={styles.list__itemLink2} href='/signup'>SignUp</Link>
                        </div>
                    </li>
                    <li className={styles.list__item}>
                        <div className={styles.list__itemLink}>
                            <img width={100} height={100} className={styles.darkMode} src="/darkMode.png" alt="" />
                        </div>
                    </li>
                </ul>
                {/* <div className={`${styles.list__itemLink} ${styles.list__itemLinkCartIcon}`} ><AiOutlineShoppingCart size={30} /></div> */}

                <div className={styles.cart}>
                    <input type="checkbox" name="cart" id="cartSidebar" className={styles.cart__checkbox} ref={cartCheckboxRef} />
                    <label htmlFor="cartSidebar" className={styles.cart__label}>
                        <div className={`${styles.list__itemLink} ${styles.list__itemLinkCartIcon}`} ><AiOutlineShoppingCart size={30} /></div>
                    </label>
                    <div className={styles.cart__background}>
                        <div className={styles.cart__nav}>
                            <span className={styles.cart__close} onClick={unCheck}>&#9587;</span>
                            <h2>Shopping Cart</h2>
                            <ol className={styles.cart__List}>
                                <li>
                                   1. Boston - Cool Tshirt
                                    <div>
                                       <HiMinusCircle  size={20}/><span> 1</span> <HiPlusCircle size={20}/>
                                    </div>
                                </li>
                                <li>
                                   2. Sparx - Mens Running Shoe
                                    <div>
                                       <HiMinusCircle  size={20}/><span> 1</span> <HiPlusCircle size={20}/>
                                    </div>
                                </li>
                                <li>
                                   3. Adidas - Uniflow Running Shoes for both men & women
                                    <div>
                                       <HiMinusCircle  size={20}/><span> 1</span> <HiPlusCircle size={20}/>
                                    </div>
                                </li>
                            </ol>
                            <button className={styles.btn}><BsFillBagFill size={20}/>Checkout</button>
                        </div>
                    </div>


                </div>

            </nav>


        </>
    )
}

export default Navbar
