import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/esm/Button';

import Image from 'react-bootstrap/Image';

const DevicePage = () => {
  const device = {
    id: 1,
    name: 'Iphone 12 pro',
    price: 24999,
    rating: 5,
    img: 'https://apple-com.ru/image/cache/catalog/product/iphone%2012%20pro%20max/825ba5c5f35acea402daa6cd3833b2c6-800x700h.jpg.webp',
  };
  const info = [
    { id: 1, title: 'Экран', description: 'TFT HD+, 6.6" (1612x720)' },
    { id: 2, title: 'Процессор', description: 'SC9863A1' },
    { id: 3, title: 'Память', description: 'оперативная 4 ГБ, встроенная 128 ГБ' },
    { id: 4, title: 'Аккумулятор', description: '6000 мAч' },
    { id: 5, title: 'Поддержка сетей', description: '2G/3G/4G (LTE)' },
    { id: 6, title: 'Сканер отпечатка пальцев', description: 'задняя панель' },
  ];
  return (
    <Container className="d-flex mt-3">
      <Col md={4}>
        <div>
          <h2>
            {device.type} {device.name}
          </h2>
          <div>Рейтинг: {device.rating}</div>
        </div>

        <Image className="mt-3" width={500} height={450} src={device.img} />
        <div className="d-flex flex-column align-items-center"></div>
      </Col>
      <Col md={4} className="d-flex flex-column m-3 align-content-center align-self-center">
        <div className="d-flex flex-column m-3 align-content-center ">
          {info.map((info, index) => (
            <div className="d-flex" key={info.id} style={{ padding: 10 }}>
              <span style={{ color: 'grey' }}>{info.title}</span>: {info.description}
            </div>
          ))}
        </div>
      </Col>
      <Col md={4} className="d-flex flex-column m-3 align-content-center align-self-center">
        <h3 style={{ fontSize: 40 }}>
          {device.price} <span style={{ color: 'grey' }}>₽</span>
        </h3>
        <Button style={{ width: '90%', height: '60px' }} variant={'outline-dark'}>
          Добавить в корзину
        </Button>
      </Col>
    </Container>
  );
};

export default DevicePage;
