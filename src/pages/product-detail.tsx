import React from 'react';
import Wrapper from 'components/layout/Wrapper';
import Body from 'components/layout/Body';
import { Header } from 'components/layout/Header';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/features/product-detail/ProductDetail.tsx';
import { mockProducts } from '../states/mock-products.data.ts';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = mockProducts.find((p) => p.id === Number(id));

  if (!product) return <p>Product not found</p>;

  return (
    <Wrapper>
      <Header title={product.name} />
      <Body>
        <ProductDetail product={product} />
      </Body>
    </Wrapper>
  );
};

export default ProductDetailPage;
