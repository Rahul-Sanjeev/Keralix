import React from 'react';
import { useCart } from '../Cart/CartContext';

function CreamProducts() {
    const { addToCart } = useCart();

    const products = [
        { id: 1, name: 'Cream Product 1', price: 20, description: 'A great cream product', image: 'cream1.jpg' },
        { id: 2, name: 'Cream Product 2', price: 15, description: 'A fantastic cream product', image: 'cream2.jpg' },
    ];

    return (
        <div className="container my-4">
            <h2>Keralix Face & Body Cream</h2>
            <div className="row">
                {products.map((product) => (
                    <div key={product.id} className="col-md-4 mb-3">
                        <div className="card h-100">
                            <img src={product.image} className="card-img-top" alt={product.name} />
                            <div className="card-body text-center">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <p className="card-text">${product.price}</p>
                                <button className="btn btn-primary" onClick={() => addToCart(product)}>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CreamProducts;
