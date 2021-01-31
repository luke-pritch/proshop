import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

interface Props {}

const Footer: React.FC<Props> = (props: Props) => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            Copyright &copy; Luke Pritchard 2021
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
