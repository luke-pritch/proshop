import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

interface Props {
  product: {
    id: string;
    name: string;
    image: string;
    description: string;
    brand: string;
    category: string;
    price: number;
    countInStock: number;
    rating: number;
    numReviews: number;
  };
}

const Product: React.FC<Props> = (props: Props) => {
  const { product } = props;
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product.id}`}>
        <Card.Img src={product.image} variant='top' />
      </a>

      <Card.Body>
        <a href={`/product/${product.id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as='div' className='my-3'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
            color='gold'
          />
        </Card.Text>
        <Card.Text className='py-1' as='h3'>
          {product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
