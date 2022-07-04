import React, {createContext, useState} from "react"

import backpack from "../assets/Backpack.jpg"
import blacktshirt from "../assets/Black T-Shirt.jpg"
import formalshoes from "../assets/Formal Shoes.jpg"
import jeanspack from "../assets/Jeans Pack.jpg"
import mateblack from "../assets/MateBlack Jean.jpg"
import sneaker from "../assets/Sneaker.jpg"
import stainlesssteel from "../assets/Stainless Steel.jpg"
import whiteshoes from "../assets/White Shoes.jpg"

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
    const [products] = useState([
        {id: 1, name: "Backpack Black", price: 1299, image: backpack, status: 'hot'},
        {id: 2, name: "Black T-Shirt", price: 650, image: blacktshirt, status: 'new'},
        {id: 3, name: "Formal Shoes", price: 2999, image: formalshoes, status: 'hot'},
        {id: 4, name: "Jeans Pack", price: 899, image: jeanspack, status: 'hot'},
        {id: 5, name: "MateBlack Jean", price: 999, image: mateblack, status: 'new'},
        {id: 6, name: "Sneaker", price: 2500, image: sneaker, status: 'hot'},
        {id: 7, name: "Stainless Steel Watch", price: 1999, image: stainlesssteel, status: 'hot'},
        {id: 8, name: "White Shoes", price: 3200, image: whiteshoes, status: 'new'}
    ])
    return(
        <ProductsContext.Provider value={{products: [...products]}}>
                {props.children}
        </ProductsContext.Provider>
    )     
}
export default ProductsContextProvider;