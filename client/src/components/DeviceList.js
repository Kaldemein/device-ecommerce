import React from 'react';
import { Context } from '../index';
import DeviceItem from './DeviceItem/DeviceItem';
import { observer } from 'mobx-react-lite';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const DeviceList = observer(() => {
  const { device } = React.useContext(Context);
  const [types, setTypes] = React.useState([]);

  return (
    <Row style={{ height: 675 }} className="d-flex flex-wrap mt-3 ">
      {device.devices.length ? (
        device.devices.map((item) => (
          <Col className="mt-3" sm={3}>
            <DeviceItem key={item.id} item={item} />
          </Col>
        ))
      ) : (
        <span style={{ fontSize: 30, fontWeight: 600 }} className="text-center mt-5">
          Товаров не найдено 😢
        </span>
      )}
    </Row>
  );
});

export default DeviceList;
