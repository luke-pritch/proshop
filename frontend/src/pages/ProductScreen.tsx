import React, { useEffect, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import Rating from '../components/Rating';

type RouteParams = { id: string };
interface Product {
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
}

const ProductScreen = ({ match }: RouteComponentProps<RouteParams>) => {
  const dummyProduct: Product = {
    id: '0',
    name: 'null',
    image: '/',
    description: 'null',
    brand: 'null',
    category: 'null',
    price: 0,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  };
  const [product, setProduct] = useState<Product>(dummyProduct);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get<Product>(
        `/api/products/${match.params.id}`,
      );
      setProduct(data);
    };
    fetchProduct();
  }, []);
  const currentStock = product.countInStock > 0 ? 'In Stock' : 'Out of Stock';

  return (
    <div>
      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color='gold'
              />
            </ListGroup.Item>
            <ListGroup.Item>{`Price: ${product.price}`}</ListGroup.Item>
            <ListGroup.Item>{`Description: ${product.description}`}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>{`${product.price}`}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>{currentStock}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={product.countInStock === 0}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductScreen;
