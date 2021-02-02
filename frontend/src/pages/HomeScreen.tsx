import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import Product from '../components/Product';

const HomeScreen: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={uuidv4()}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
