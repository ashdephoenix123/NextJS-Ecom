import React from 'react'
import Link from 'next/link'
import styles from '../styles/tshirts.module.scss'
import connectDB from "@/middleware/conn";
import Product from '../models/Product'

const Hoodies = ({products }) => {
    return (
        <>
            <section className="container">
                <h2 className={styles.productTitle}>Trending Tshirt Collection</h2>
                <div className={styles.test}>
                    <div className={styles.left}>
                        filters
                    </div>
                    <div className={styles.allCards}>
                        {products.map((item) => {
                           return <Link key={item._id} href={`/products/${item.productId}`}>
                            <div className={styles.card}>
                                <div className={styles.cardImageDiv}>
                                    <img className={styles.cardImage} src={item.img} alt={item.title + "image"} />
                                </div>
                                <div className={styles.cardContent}>
                                    <h3>{item.category}</h3>
                                    <h2>{item.title}</h2>
                                    <span>₹{item.price}</span>
                                    <p>{item.size}</p>
                                </div>
                            </div>
                        </Link>
                        })}

                    </div>
                </div>
            </section>
        </>
    )
}

export async function getServerSideProps(context) {
    await connectDB();
    const products = await Product.find({category: "Hoodies"})

    return {
        props: { products: JSON.parse(JSON.stringify(products)) }, // will be passed to the page component as props
    }
}

export default Hoodies
