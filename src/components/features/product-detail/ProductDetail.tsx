import React from 'react';

interface ProductDetailProps {
  product: {
    name: string;
    image: string;
    price: number;
    description: string;
  };
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <div className="p-6 text-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-64 h-64 mx-auto mb-4"
      />
      <h2 className="text-2xl font-bold text-primary">{product.name}</h2>
      <p className="text-lg font-semibold my-2">{`${product.price} KRE`}</p>
      <p className="text-sm text-neutral-600 mb-4">{product.description}</p>
      <button className="btn-primary w-full">Buy It!</button>
    </div>
  );
};

export default ProductDetail;
