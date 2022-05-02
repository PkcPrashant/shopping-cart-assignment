import Button from 'react-bootstrap/Button';
import './product.css';

function Product({ product }) {

    const buyProduct = () => {
        fetch("http://localhost:5000/addToCart", {
            method: "POST",
            headers: {
              "Content-Type": "text/html",
            },
            body: JSON.stringify(product.id),
          })
            .then((res) => res.json())
            .then((message) => {
                if(message.response === 'Success') {
                    // Add cart count
                }
            });
    }

    return (
        <div className="w-20 p-3 m-2 shadow">
            <p className="bold">{product.name}</p>
            <img src={product.imageURL} alt={product.name} className="w-100" height="150px" />
            <p className="text">{product.description}</p>
            <div className="d-flex flex-row justify-content-between align-items-baseline">
                <p>MRP Rs.{product.price}</p>
                <Button onClick={buyProduct}>Buy Now</Button>
            </div>
        </div>
    )
}

export default Product;