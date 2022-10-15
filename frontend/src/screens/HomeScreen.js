import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import data from '../data'; is no longer used because it is static

function HomeScreen() {
  /*useState allows us to update an array of two variables
  with statements that are local to this component/function*/
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      /* this uses axios to send a request to the api and then
      store the returned value*/
      const result = await axios.get('/api/products');
      setProducts(result.data); //result.data has the products from the backend.
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {/* the following is a JSX (javascript xml) */}
        {products.map((product) => (
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
        ))}
      </div>
    </div>
  );
}
export default HomeScreen;
