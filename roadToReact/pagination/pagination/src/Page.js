import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Page.css';

function Page() {
  const [products, setProducts] = useState([]);
  const [page,setPages] = useState(2)

  const url = 'https://dummyjson.com/products?limit=100';

  const getProducts = async () => {
    const res = await axios.get(url).then((response) => response.data);
    setProducts(res.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const pageHandler = (pageIndex)=>{

    setPages(pageIndex)
  }

  return (
    <div className="page">
      <h1 className="page-title">Welcome to our Online Store</h1>
      <div className="product-list">
        {products.length > 0 &&
          products.slice(page*12 - 12,page * 12).map((product, index) => (
            <div className="product" key={index}>
              <img className="product-image" src={product.thumbnail} alt={product.title} />
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">{product.description}</p>
              <span className="product-price">${product.price}</span>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          ))}
      </div>
      <div className='pagination'>
          {[...Array(products.length / 10 -1)].map((_,pageIndex)=>{

            return <span onClick={()=>pageHandler(pageIndex+1)} className={page === pageIndex+1 ? 'pageIndexHover':'pageIndex'} key={pageIndex}>{pageIndex + 1}</span>

          })}
          </div>
    </div>
  );
}

export default Page;
