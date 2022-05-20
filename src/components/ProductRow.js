import { useState } from 'react';
import "./ProductRow.css";

function ProductRow(props){
    return(

        <tr>
            <td className = {!props.inStock && "unavailable"}>{props.name}</td>
            <td>{props.price}</td>
        </tr>
    )
}

export default ProductRow;