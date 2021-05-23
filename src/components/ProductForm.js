import { useState } from "react";
import Alert from './Alert';
import ProductList from './ProductList';

const ProductForm = () => {

    let [alertType, setAlertType] = useState();
    let [alertText, setAlertText] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        let form = document.querySelector('.ProductForm form');
        if(form) {
            register(new FormData(form));
        }
    };

    const register = (data) => { 
        // doc : https://developer.mozilla.org/fr/docs/Web/API/FormData/Using_FormData_Objects
        //console.log(data.get('titre'));

        // update productList component
        ProductList.items = [data.get('titre')];


        let item = '';
        item += '<li style="display:flex;justify-content:space-between;">';
        item += '<span>'+data.get('titre')+'</span>' ;
       // item += '<br>' + data.get('description');
        item += '<a className="btn btn-delete-product">X</a>'
        item += '</li>';  
        document.querySelector('.products-items').innerHTML += item;

        // notification
        document.querySelector('.alert').classList.remove('d-none');
        setAlertText('Produit ajouté !');
        setAlertType('success');



    };

    return (
        <div className="ProductForm">
            
            <h2>Gestion des produits</h2>

            <Alert className="alert d-none" type={alertType} message={alertText} />

            <form method="post" className="ProductForm">
                
                <div className="form-group">
                    <label htmlFor="">Titre</label>
                    <input type="text" name="titre" className="form-control" placeholder="" value="test" />
                </div>

                <div className="form-group">
                    <label htmlFor="">Description</label>
                    <input type="text" name="description" className="form-control" placeholder=""/>
                </div>

                <div className="form-group">
                    <label htmlFor="">Message</label>
                    <textarea className="form-control" placeholder=""></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="">Image</label>
                    <input type="file" className="form-control" placeholder=""/>
                </div>
                
                <button onClick={handleSubmit}>Ajouter</button>

            </form>

        </div>
    );
};

export default ProductForm;