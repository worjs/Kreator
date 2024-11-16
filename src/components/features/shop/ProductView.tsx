import React from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

interface ProductViewProps {
  product: Product;
  to: string;
}

const ProductView: React.FC<ProductViewProps> = ({ product, to }) => {
  return (
    <Link
      to={to}
      className="rounded-2xl overflow-hidden bg-white shadow-sm cursor-pointer"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-32 object-cover"
      />
      <div className="p-4">
        <p className="text-sm font-semibold text-primary">{product.name}</p>
        <p className="text-xs text-neutral-600">{`${product.price} KRE`}</p>
      </div>
    </Link>
  );
};

export default ProductView;
