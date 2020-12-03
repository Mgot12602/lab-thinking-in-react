 import React from 'react'
 
 export default function ProductRow(props) {
     return (
         <div>

             {props.products.map((el) => (
                 <tr>
                     <td>{el.name}</td>
                     <td>{el.price}</td>
                 </tr>))}
         </div>
     )
 }
 