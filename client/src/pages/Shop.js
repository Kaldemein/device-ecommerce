import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';

const Shop = () => {
  return (
    <Container>
      <div className="d-flex mt-4">
        <Col md={2}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
        </Col>
      </div>
    </Container>
  );
};

export default Shop;
