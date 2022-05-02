import Button from 'react-bootstrap/Button'

function Product({ product }) {
    return (
        <div className="w-20 p-3 m-2 shadow">
            <h6>{product.name}</h6>
            <img src={product.imageURL} className="w-100" height="150px" />
            <p className="text">{product.description}</p>
            <div className="d-flex flex-row justify-content-between align-items-baseline">
                <p>MRP Rs.{product.price}</p>
                <Button>Buy Now</Button>
            </div>
        </div>
    )
}

export default Product;