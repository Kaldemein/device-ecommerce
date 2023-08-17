import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import Pages from '../components/Pages';

import { observer } from 'mobx-react-lite';
import { fetchTypes } from '../http/deviceAPI';
import { fetchBrands } from '../http/deviceAPI';
import { fetchDevices } from '../http/deviceAPI';

import { Context } from '../index';

const Shop = observer(() => {
  const { device } = React.useContext(Context);

  React.useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
    fetchDevices(null, null, 1, 8).then((data) => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
    });
  }, []);

  React.useEffect(() => {
    fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 8).then((data) => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
    });
  }, [device.page, device.selectedType, device.selectedBrand]);

  return (
    <Container>
      <div className="d-flex mt-4">
        <Col md={2}>
          <TypeBar />
          <BrandBar />
        </Col>
        <Col md={9}>
          <DeviceList />
          <Pages />
        </Col>
      </div>
    </Container>
  );
});

export default Shop;
