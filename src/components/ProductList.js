import { useState } from "react";

const ProductList = (items) => {  
    
    console.log(items);

    return (
        <div className="product-list">
            <h2>Produits enregistrés ()</h2>
            <ul className="products-items">
           
            </ul>
        </div>
    );
}

export default ProductList;