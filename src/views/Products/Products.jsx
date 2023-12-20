import React from 'react'
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu'
import Search from '../../components/Search/Search'
import ProductDetail from '../../components/ProductsDatail/ProductsDatail'
import { useParams } from 'react-router-dom'


const Products = ({data}) => {
    const {productId} = useParams();
    const selectedProduct = data.find((product) => product.id == productId)

    return (
        <section className='product'>
            <HeaderMenu />
            <Search />
            <ProductDetail data={selectedProduct} /> 
        </section>
    )
}

export default Products