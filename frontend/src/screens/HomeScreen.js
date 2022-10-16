import { useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import logger from 'use-reducer-logger';
//import data from '../data'; is no longer used because it is static

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  /*The react documentation states that useReducer is preferable
  to useState when managing states.*/
  //dispatch is the funciton that will call/perform an action and update the state
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: '',
  });

  /*useState allows us to update an array of two variables
  with statements that are local to this component/function*/
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      /*We will have a loading message and we might need to catch an error state
      depending on what the AJAX request receives*/
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        /* this uses axios to send a request to the api and then
        store the returned value*/
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data }); //result.data has the products from the backend.
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {/* the following is a JSX (javascript xml) */}
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          products.map((product) => (
            <div className="product" key={product.slug}>
              <Link to={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </Link>
              <div className="product-info">
                <Link to={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </Link>
                <p>
                  <strong>${product.price}</strong>
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
export default HomeScreen;
