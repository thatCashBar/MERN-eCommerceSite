export const addToCartReducer = (state = { cartItems: [] }, action) => {

    switch (action.type) {
        case 'ADD_TO_CART': 
        
        const itemAlreadyExistsInCart = state.cartItems.find(item => item._id == action.payload._id);

        if (itemAlreadyExistsInCart)
        {
            // update existing
            return {
                ...state,
                cartItems: state.cartItems.map(item => item._id == action.payload._id ? action.payload : item)
            }
        }
        else
        {
            // add new
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        }
        default: return state
    }

}