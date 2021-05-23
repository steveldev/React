import React, { useState } from 'react';

const Products = () => {
    
    let productsData = [
        {name: 'produit1', price: 50},
        {name: 'produit2', price: 150},
        {name: 'produit3', price: 250},
    ];
    
    const [items, setItems] = useState(productsData);

    const handleSubmit = (e) => {
        e.preventDefault();

        let form = document.querySelector('.ProductForm form');
        if(form) {
            // convert formdata to object
            let item = new FormData(form);
            item = Object.fromEntries(item.entries());

            // update items content
            setItems([...items,item]);              
        }
    };

    const ProductForm = () => {

        return (
            <div className="ProductForm">            
                <h2>Gestion des produits</h2>
                <form method="post" className="ProductForm">                
                    <div className="form-group">
                        <label htmlFor="">Nom</label>
                        <input type="text" name="name" className="form-control" placeholder="" value="test" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Price</label>
                        <input type="text" name="price" className="form-control" placeholder=""/>
                    </div>               
                    <button onClick={handleSubmit}>Ajouter</button>
                </form>
            </div>
        );
    };

    const ProductList = ({items}) => {

        const productItems = [];
        items.forEach(item => {
            productItems.push(<ProductItem key={item.name} item={item} />)
        })
        
        return (
            <div className="product-list">
                <h2>Produits enregistrés ()</h2>
                <ul className="products-items">
                    {productItems}
                </ul>
            </div>
        );
    };

    const ProductItem = ({item}) => {
        return (
            <li className="d-flex justify-content-between">
                <span>{item.name}</span>        
                <span>{item.price} &euro;</span>
            </li>
        );
    };



    return (        
        <section className="products">
            <ProductForm />
            <ProductList items={items} /> 
        </section>
    );
};

export default Products;