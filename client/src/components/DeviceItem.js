import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/Image';
import star from '../assets/star.svg';
import Card from 'react-bootstrap/esm/Card';
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';
import { Context } from '..';
import { observer } from 'mobx-react-lite';

const DeviceItem = observer(({ item }) => {
  const { device } = React.useContext(Context);
  const navigate = useNavigate();
  const type = device.types.find((type) => item.typeId === type.id);
  console.log(type);

  return (
    <Col md={3} style={{ width: 250, cursor: 'pointer' }} border={'light'} className="me-1">
      <Card
        onClick={() => navigate(DEVICE_ROUTE + '/' + item.id)}
        style={{ width: 250, cursor: 'pointer' }}
        border={'light'}>
        <Image width={250} height={250} src={process.env.REACT_APP_API_URL + item.img} />
        <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
          <div>{type && type.name}</div>
          <div className="d-flex align-items-center">
            <div>{item.rating}</div>
            <Image width={18} height={18} src={star} />
          </div>
        </div>
        <div>{item.name}</div>
      </Card>
    </Col>
  );
});

export default DeviceItem;
