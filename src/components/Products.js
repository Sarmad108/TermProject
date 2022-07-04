import React, {useContext} from "react"
import {ProductsContext} from "../Global/ProductsContext"
import {CartContext} from "../Global/CartContext"
import Banner from "./Banner"

const Products = () => {
    const {products} = useContext(ProductsContext);
    const {dispatch} = useContext(CartContext);
    return(
        <div className="container">
        <Banner />
        <div className="products">
            {/* call back */}
            {products.map((product) => (
                <div className="product" key={product.id}>
                    <div className="product-image">
                        <img src={product.image} alt="not found" />
                    </div>
                    <div className="product-details">
                        <div className="product-name">
                            {product.name}
                        </div>
                        <div className="product-price">
                            PKR {product.price}
                        </div>
                    </div>
                    <div className="add-to-cart" onClick={() => dispatch({type: 'ADD_TO_CART',id: product.id, products})}>
                    add to cart</div>
                    {products.status === 'hot'? <div className='hot'>Hot</div> : ''}
                    {products.status === 'new'? <div className='new'>New</div> : ''}
                </div>
            ))}
        </div>
        </div>
    )
}
export default Products;