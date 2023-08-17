import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/esm/Button';
import { useParams } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { fetchOneDevice } from '../http/deviceAPI';

const DevicePage = () => {
  const { id } = useParams();
  const [device, setDevice] = React.useState({ info: [] });

  React.useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data));
  }, []);
  return (
    <Container className="d-flex mt-3">
      <Col md={4}>
        <div>
          <h2>
            {device.type} {device.name}
          </h2>
          <div>Рейтинг: {device.rating}</div>
        </div>

        <Image
          className="mt-3"
          width={400}
          height={350}
          src={process.env.REACT_APP_API_URL + device.img}
        />
        <div className="d-flex flex-column align-items-center"></div>
      </Col>
      <Col md={4} className="d-flex flex-column m-3 align-content-center align-self-center">
        <div className="d-flex flex-column m-3 align-content-center ">
          {device.info.map((info, index) => (
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
