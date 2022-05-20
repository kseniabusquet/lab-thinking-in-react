import { useState } from 'react';
import ProductRow from './ProductRow'

function ProductTable(props) {

    //table - th, tr, td
    return (
     <table>
         <thead>
         <th>Name</th>
         <th>Price</th>
         </thead>
        {props.products.map((product) =><ProductRow key = {product.id} name = {product.name} price = {product.price} inStock = {product.inStock}/> )}
     </table>

    )
}

export default ProductTable;

