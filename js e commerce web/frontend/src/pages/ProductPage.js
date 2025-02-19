import React from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Product Details for {id}</h1>
      {/* Add product details component here */}
    </div>
  );
};

export default ProductPage;