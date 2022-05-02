import Button from 'react-bootstrap/Button';
import './product.css';

function Product({ product }) {
    return (
        <div className="w-20 p-3 m-2 shadow">
            <p className="bold">{product.name}</p>
            <img src={product.imageURL} alt={product.name} className="w-100" height="150px" />
            <p className="text">{product.description}</p>
            <div className="d-flex flex-row justify-content-between align-items-baseline">
                <p>MRP Rs.{product.price}</p>
                <Button>Buy Now</Button>
            </div>
        </div>
    )
}

export default Product;