import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
      <Link to={`/product/${product.id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product.id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
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
