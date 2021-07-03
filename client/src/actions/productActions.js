import axios from "axios";

export const getAllProducts = () => dispatch => {

    dispatch({ type: 'GET_PRODUCTS_REQUEST' });

    axios.get('/api/products/getallproducts').then(result => {
        console.log(result);
        dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: result.data });
    }).catch(error => {
        console.log(error);
        dispatch({ type: 'GET_PRODUCTS_FAILED', payload: error });
    });

}