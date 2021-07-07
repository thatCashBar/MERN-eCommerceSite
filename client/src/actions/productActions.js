import axios from "axios";


export const getAllProducts = () => dispatch => {

    dispatch({ type: 'GET_PRODUCTS_REQUEST' });

    axios.get('/api/products/getallproducts')
        .then(result => {
            dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: result.data });
        })
        .catch(error => {
            dispatch({ type: 'GET_PRODUCTS_FAILED', payload: error });
        });

}

export const getProductById = (productid) => dispatch => {

    dispatch({ type: 'GET_PRODUCTBYID_REQUEST' });

    axios.post('/api/products/getproductbyid/', { productid })
        .then(result => {
            dispatch({ type: 'GET_PRODUCTBYID_SUCCESS', payload: result.data });
        })
        .catch(error => {
            dispatch({ type: 'GET_PRODUCTBYID_FAILED', payload: error });
        });

}