import '@/styles/globals.scss'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TopMargin from '@/components/TopMargin'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {

  const [cart, setCart] = useState({});
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    try {
      const savedCart = JSON.parse(localStorage.getItem('cart'));
      if (savedCart) {
        setCart(savedCart);
      }
    } catch (error) {
      console.error(error);
      localStorage.clear()
    }
  }, [])
  const saveCart = (myCart) => {
    let subt = 0;
    localStorage.setItem('cart', JSON.stringify(myCart));
    for (let key in myCart) {
      subt += myCart[key].price * myCart[key].quantity;
    }
    setSubtotal(subtotal);
  }

  const addToCart = (itemcode, quantity, price, name, size, variant) => {
    let newCart = { ...cart };
    if (newCart[itemcode]) {
      newCart[itemcode].quantity += 1;
    } else {
      newCart[itemcode] = { quantity, price, name, size, variant };
    }
    setCart(newCart);
    saveCart(newCart);
  }

  const updateCartItem = (itemcode, quantity, price, name, size, variant) => {
    let newCart = { ...cart };
    if (newCart[itemcode]) {
      newCart[itemcode].quantity -= 1;
    }
    if (newCart[itemcode].quantity <= 0) {
      delete newCart[itemcode];
    }
    setCart(newCart);
    saveCart(newCart);
  }

  const removeItem = (itemcode)=> {
    let newCart = { ...cart };
    delete newCart[itemcode];
    setCart(newCart);
    saveCart(newCart);
  }

  const clearCart = () => {
    setCart({});
    saveCart({});
  }

  return <>
    <Head>
      <title>The Sharkk Co. - Your Online Shoppers Stop</title>
      <meta name="description" content="Your Online Shoppers Stop!" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/fav.png" />
    </Head>
    <Navbar cart={cart} addToCart={addToCart} updateCartItem={updateCartItem} clearCart={clearCart} removeItem={removeItem} subtotal={subtotal} />
    <TopMargin />
    <Component cart={cart} addToCart={addToCart} updateCartItem={updateCartItem} clearCart={clearCart} removeItem={removeItem} subtotal={subtotal} {...pageProps} />
    <Footer />
  </>
}
