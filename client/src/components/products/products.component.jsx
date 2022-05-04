import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/action/categories";
import { getProducts } from "../../redux/action/products";
import Product from "./product.component";
import './products.css';

function Products() {

    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories);
    const products = useSelector(state => state.products);

    const [filteredProducts, setFilteredProducts] = useState([{}]);
    const [activeCategory, setActiveCategory] = useState('');

    useEffect(() => {
        if (!categories.data.length) {
            dispatch(getCategories());
        }
    }, [dispatch, categories.data.length]);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    useEffect(() => {
        setFilteredProducts(products.data);
    }, [products]);

    const filterProducts = (selectedCategory) => {
        if (selectedCategory.id !== activeCategory) {
            const items = products.data.filter((product) => product.category === selectedCategory.id);
            setFilteredProducts(items);
            setActiveCategory(selectedCategory.id);
        } else {
            setFilteredProducts(products.data);
            setActiveCategory('');
        }
    }

    return (
        <div className="d-flex flex-row">
            <div className="sidebar w-20">
                {
                    categories.isLoading ?
                        <div>Loading</div> :
                        categories.error ?
                            <div>{categories.error.message}</div> :
                            categories.data.map((category) => {
                                return (
                                    category.enabled &&
                                    <button className={`sidebar-button ${activeCategory === category.id && 'selected'}`} onClick={() => filterProducts(category)} key={category.id}>{category.name}</button>
                                )
                            })
                }
            </div>
            <div className="w-80 d-flex flex-wrap justify-content-between">
                {
                    products.isLoading ?
                        <div>Loading</div> :
                        products.error ?
                            <div>{products.error.message}</div> :
                            filteredProducts.map((product, index) => {
                                return (
                                    <Product key={`${product.id}${index}`} product={product} />
                                )
                            })
                }
            </div>
        </div>
    );
}

export default Products;
