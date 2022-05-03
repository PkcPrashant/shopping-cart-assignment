import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import './categories.css';

function Categories() {

    const [categories, setCategories] = useState([{}]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
        .then((response) => response.json())
        .then((response) => setCategories(response))
        .catch((error) => console.log('Error ', error))
    }, []);
    
    return (
        categories.filter((category) => category.enabled)
        .map((category, index) => {
            return (
                // Order is pending {category.order}
                <div className={`d-flex ${!(index%2) ? 'flex-row' : 'flex-row-reverse'} mb-2 shadow`} key={`${category.id}${index}`}>
                    <img className="w-25" src={category.imageUrl} alt={category.name} />
                        <div className="d-flex flex-column align-items-center align-self-center mx-auto">
                            <div>{category.name}</div>
                            <div>{category.description}</div>
                            <Button className="w-fit-content">Explore {category.key}</Button>
                        </div>
                </div>
            )
        })
    );
  }
  
export default Categories;
  