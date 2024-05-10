'use client';
import React from 'react';

import ProductList from '@/components/Lists/ProductList';
import { Product } from '@/shared/interfaces';

const YouMightLikeContainer = ({ products }: { products: Product[] }) => {
  return <ProductList products={products} />;
};

export default YouMightLikeContainer;
