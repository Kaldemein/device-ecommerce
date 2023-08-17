import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/Image';
import star from '../../assets/star.svg';
import Card from 'react-bootstrap/esm/Card';
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../../utils/consts';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import style from './DeviceItem.scss';

const DeviceItem = observer(({ item }) => {
  const { device } = React.useContext(Context);
  const navigate = useNavigate();
  const type = device.types.find((type) => item.typeId === type.id);

  return (
    <Col
      md={3}
      style={{ width: 100, cursor: 'pointer' }}
      border={'light'}
      className="me-4 deviceItem">
      <Card
        className={style.card}
        onClick={() => navigate(DEVICE_ROUTE + '/' + item.id)}
        style={{ width: 250, cursor: 'pointer' }}
        border={'light'}>
        <Image width={200} height={200} src={process.env.REACT_APP_API_URL + item.img} />
        <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
          <div>{type && type.name}</div>
          <div className="d-flex align-items-center">
            <Image className="me-1" width={18} height={18} src={star} />
            <div className="me-3">{item.rating}</div>
          </div>
        </div>
        <div>{item.name.length > 20 ? item.name.substring(0, 17) + '...' : item.name}</div>
        <div style={{ fontSize: 25, fontWeight: 600 }}>
          {item.price} <span style={{ color: 'grey' }}>₽</span>
        </div>
      </Card>
    </Col>
  );
});

export default DeviceItem;
