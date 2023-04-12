import React, { useRef } from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'
import { IoMdArrowDropup } from 'react-icons/io'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { HiPlusCircle, HiMinusCircle } from 'react-icons/hi'
import { BsFillBagFill } from 'react-icons/bs'
import { MdDelete, MdAccountCircle } from 'react-icons/md'

const Navbar = ({ cart, addToCart, updateCartItem, clearCart, removeItem, subtotal }) => {
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

                    <li className={styles.list__item}>
                        <div className={styles.list__itemLink}>
                            <img width={100} height={100} className={styles.darkMode} src="/darkMode.png" alt="" />
                        </div>
                    </li>
                    <li className={`${styles.list__item} ${styles.dropdown}`}>
                        <Link className={styles.list__itemLink} href="/login"><MdAccountCircle size={25} /><IoMdArrowDropup className={styles.upIcon} size={15} /></Link>
                        <div className={`${styles.list__item} ${styles.dropdownContent}`} >
                            <Link className={`${styles.list__itemLink2} w-full mb-2 text-center`} href='/login'>LogIn</Link>
                            <div className="relative flex items-center w-full">
                                <div className="flex-grow border-t border-gray-400"></div>
                                <span className="flex-shrink mx-4 text-gray-400">Or</span>
                                <div className="flex-grow border-t border-gray-400"></div>
                            </div>
                            <Link className={`${styles.list__itemLink2} w-full text-center`} href='/signup'>SignUp</Link>
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
                                {Object.keys(cart).length === 0 && <li className='text-2xl mx-auto'>Uh oh! Your Cart is Empty!</li>}
                                {Object.keys(cart).map((item, index) => {
                                    return <li key={item}>
                                        {index + 1 + '. ' + cart[item].name + " - (" + cart[item].size + " / " + cart[item].variant  + ")" + " - ₹" +cart[item].price}
                                        <div>
                                            <HiMinusCircle onClick={() => { updateCartItem(item, cart[item].quantity, cart[item].price, cart[item].name, cart[item].size, cart[item].variant) }} size={20} />
                                            <span>{cart[item].quantity}</span>
                                            <HiPlusCircle onClick={() => { addToCart(item, cart[item].quantity, cart[item].price, cart[item].name, cart[item].size, cart[item].variant) }} size={20} />
                                            <MdDelete onClick={() => { removeItem(item) }} size={20} />
                                        </div>
                                    </li>
                                }
                                )}
                            </ol>
                            <div className='py-2 px-8 my-5'>
                                {subtotal !==0 && <div>SubTotal - ₹{subtotal}</div>}
                            </div>
                            <Link onClick={unCheck} href={`/checkout`}><button className={`${styles.btn} mb-1`}><BsFillBagFill size={20} />Checkout</button></Link>
                            <button className={styles.btn} onClick={clearCart}>Clear Cart</button>
                        </div>
                    </div>


                </div>

            </nav>


        </>
    )
}

export default Navbar
