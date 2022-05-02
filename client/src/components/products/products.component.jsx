import { useEffect, useState } from "react";
import Product from "./product.component";
import './products.css';

function Products() {

    const [categories, setCategories] = useState([{}]);
    const [products, setProducts] = useState([{}]);
    const [filteredProducts, setFilteredProducts] = useState([{}]);
    const [activeCategory, setActiveCategory] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/categories')
        .then((response) => response.json())
        .then((response) => setCategories(response))
        .catch((error) => console.log('Error ', error))

        fetch('http://localhost:5000/products')
        .then((response) => response.json())
        .then((response) => {
            setProducts(response);
            setFilteredProducts(response);
        })
        .catch((error) => console.log('Error ', error))
    }, []);

    const filterProducts = (selectedCategory) => {
        console.log('COMING')
        if (selectedCategory.id !== activeCategory) {
            const items = products.filter((product) => product.category === selectedCategory.id);
            setFilteredProducts(items);
            setActiveCategory(selectedCategory.id);
        } else {
            setFilteredProducts(products);
            setActiveCategory('');
        }
    }
    
    return (
        <div className="d-flex flex-row products">
            <div className="sidebar">
                {categories.map((category) => {
                    return (
                        category.enabled &&
                        <button className={`sidebar-button ${activeCategory === category.id && 'selected'}`} onClick={() => filterProducts(category)} key={category.id}>{category.name}</button>
                    )
                })}
            </div>
            <div className="d-flex flex-wrap">
                {filteredProducts.map((product, index) => {
                    return (
                        <Product key={`${product.id}${index}`} product={product} />
                    )
                })}
            </div>
        </div>
    );
  }
  
export default Products;
  