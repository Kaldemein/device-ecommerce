import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import { Context } from '../../index';
import Dropdown from 'react-bootstrap/Dropdown';
import Col from 'react-bootstrap/esm/Col';

import Form from 'react-bootstrap/Form';

function CreateDevice() {
  const { device } = React.useContext(Context);
  const [info, setInfo] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter((item) => item.number !== number));
  };

  return (
    <>
      <Button variant="outline-dark" className="mt-2" onClick={handleShow}>
        Добавить устройство
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Добавить устройство</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="">
            <Dropdown>
              <Dropdown.Toggle className="btn-dark">Выберите тип</Dropdown.Toggle>
              <Dropdown.Menu>
                {device.types.map((type) => (
                  <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mt-3">
              <Dropdown.Toggle className="btn-dark">Выберите бренд</Dropdown.Toggle>
              <Dropdown.Menu>
                {device.brands.map((brand) => (
                  <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            <Form.Control className="mt-3" placeholder="Введите название устройства" />
            <Form.Control
              className="mt-3"
              placeholder="Введите стоимость устройства"
              type="number"
            />
            <Form.Control className="mt-3" type="file" />
            <Button className="mt-5" variant={'outline-dark'} onClick={addInfo}>
              Добавить новое свойство
            </Button>
            {info.map((item) => (
              <div className="d-flex" key={item.number}>
                <Col md={4}>
                  <Form.Control className="mt-3" placeholder="Введите название свойства" />
                </Col>
                <Col md={4}>
                  <Form.Control className="mt-3  ms-2" placeholder="Введите описание свойства" />
                </Col>
                <Col md={4}>
                  <Button
                    className="mt-3 ms-3"
                    variant={'outline-danger'}
                    onClick={() => removeInfo(item.number)}>
                    Удалить
                  </Button>
                </Col>
              </div>
            ))}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="outline-success" onClick={handleClose}>
            Добавить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateDevice;
