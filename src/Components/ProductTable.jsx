import React from 'react'

import ProductRow from './ProductRow'

export default function ProductTable(props) {
    return (
        <div>
            <tr>
                <th>Name</th>
                <th>Price</th>
                </tr>
               <ProductRow products={props.products}/> 
            
           
        </div>
    )
}
