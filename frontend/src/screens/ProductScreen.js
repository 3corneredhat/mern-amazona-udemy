import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useReducer } from 'react';
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, product: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
function ProductScreen() {
  const params = useParams();
  const { slug } = params;
  /*The react documentation states that useReducer is preferable
  to useState when managing states.*/
  //dispatch is the funciton that will call/perform an action and update the state
  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
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
        const result = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data }); //result.data has the products from the backend.
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, [slug]);
  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div>{product.name}</div>
  );
}

export default ProductScreen;
