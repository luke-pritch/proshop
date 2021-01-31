import React from 'react';
import products from '../products';
import verify from '../utils';

interface Props {
  id: string;
}

const ProductScreen: React.FC<Props> = (props: Props) => {
  const { id } = props;
  const product = verify(products.find((p) => p.id === id));

  return <div />;
};

export default ProductScreen;
