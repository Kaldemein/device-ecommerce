import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import { observer } from 'mobx-react-lite';
import { fetchTypes } from '../http/deviceAPI';
import { fetchBrands } from '../http/deviceAPI';
import { fetchDevices } from '../http/deviceAPI';

import { Context } from '../index';

const Shop = observer(() => {
  const { device } = React.useContext(Context);

  React.useEffect(() => {
    fetchDevices().then((data) => device.setDevices(data.rows));
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
  }, []);

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
});

export default Shop;
