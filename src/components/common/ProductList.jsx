import React from 'react';
import ProductCard from './ProductCard';
import Products from '../../assets/data/Product';

const ProductList = () => {
    const products = Products();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-[20px] items-center justify-center">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
