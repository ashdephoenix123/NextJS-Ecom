import React from 'react'
import { useRouter } from 'next/router'

const Product = () => {
    const router = useRouter();
    const { product } = router.query;

    return (
        <>
            <h1>Product: {product}</h1>
        </>
    )
}

export default Product
