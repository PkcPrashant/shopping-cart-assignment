import { useEffect, useState } from "react";
import Product from "./product.component";
import './product.css';

function Products() {

    const [categories, setCategories] = useState([{}]);
    const [products, setProducts] = useState([{}]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
        .then((response) => response.json())
        .then((response) => setCategories(response))
        .catch((error) => console.log('Error ', error))

        fetch('http://localhost:5000/products')
        .then((response) => response.json())
        .then((response) => setProducts(response))
        .catch((error) => console.log('Error ', error))
    }, []);
    
    return (
        <div className="d-flex flex-row">
            <div className="side-bar">
                {categories.map((category) => {
                    return (
                        category.enabled &&
                        <div key={category.id}>
                            {category.name}
                        </div>
                    )
                })}
            </div>
            <div className="products d-flex flex-wrap">
                {products.map((product, index) => {
                    return (
                        <Product key={`${product.id}${index}`} product={product} />
                    )
                })}
            </div>
        </div>
    );
  }
  
export default Products;
  