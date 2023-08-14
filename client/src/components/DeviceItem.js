import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/Image';
import star from '../assets/star.svg';
import Card from 'react-bootstrap/esm/Card';
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({ device }) => {
  const navigate = useNavigate();
  return (
    <Col md={3} style={{ width: 250, cursor: 'pointer' }} border={'light'} className="me-1">
      <Card
        onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}
        style={{ width: 250, cursor: 'pointer' }}
        border={'light'}>
        <Image width={250} height={250} src={process.env.REACT_APP_API_URL + device.img} />
        <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
          <div>Samsung...</div>
          <div className="d-flex align-items-center">
            <div>{device.rating}</div>
            <Image width={18} height={18} src={star} />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
