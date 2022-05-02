import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button'

function Categories() {

    const [categories, setCategories] = useState([{}]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
        .then((response) => response.json())
        .then((response) => setCategories(response))
        .catch((error) => console.log('Error ', error))
    }, []);
    
    return (
        categories.map((category, index) => {
            const style = `d-flex ${!index ? 'flex-row' : 'flex-row-reverse'}`
            return (
                // Order is pending {category.order}
                category.enabled && 
                <div className={style} key={`${category.id}${index}`}>
                    <img src={category.imageUrl} />
                    <div className="d-flex align-items-center justify-content-center">
                    <div className="d-flex flex-column">
                        <div>{category.name}</div>
                        <div>{category.description}</div>
                        <Button>Explore {category.key}</Button>
                    </div>
                    </div>
                </div>
            )
        })
    );
  }
  
export default Categories;
  