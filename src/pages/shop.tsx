import React from 'react';
import Wrapper from 'components/layout/Wrapper';
import Body from 'components/layout/Body';
import { Header } from 'components/layout/Header';
import ProductView from 'components/features/shop/ProductView';
import { mockProducts } from '../states/mock-products.data.ts';

const ShopPage: React.FC = () => {
  return (
    <Wrapper>
      <Header title="Shop Home" />
      <Body>
        <div className="grid grid-cols-2 gap-4">
          {mockProducts.map((product) => (
            <ProductView
              key={product.id}
              product={product}
              to={`/shop/${product.id}`}
            />
          ))}
        </div>
      </Body>
    </Wrapper>
  );
};

export default ShopPage;
