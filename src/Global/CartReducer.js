export const CartReducer = (state, action) => {
    let {shoppingCart, totalPrice, qty} = state;
    let product;
    let index;
    let updatedPrice;
    let updatedQty;
    switch(action.type) {

        case "ADD_TO_CART":
            const check = shoppingCart.find(product => product.id === action.id);
            if(check){
                // return state;
                return {shoppingCart: [...shoppingCart], totalPrice, message: 'This is product is already in the cart!', qty};
            } else {
                product = action.products;
                // .find(product => product.id === action.id);
                product['qty'] = 1;
                updatedQty = qty + 1;
                updatedPrice = totalPrice + product.price;
                return {shoppingCart: [product,...shoppingCart], totalPrice: updatedPrice, qty: updatedQty};
            }
            break;

            default:
                return state;
    }
}