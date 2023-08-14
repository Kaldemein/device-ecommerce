import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import { Context } from '../../index';
import Dropdown from 'react-bootstrap/Dropdown';
import Col from 'react-bootstrap/esm/Col';
import { fetchTypes } from '../../http/deviceAPI';
import { fetchBrands } from '../../http/deviceAPI';
import { createDevice } from '../../http/deviceAPI';

import Form from 'react-bootstrap/Form';
import { observer } from 'mobx-react-lite';

const CreateDevice = observer(() => {
  const { device } = React.useContext(Context);
  const [show, setShow] = useState(false);

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };

  const onAdd = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', `${price}`);
    formData.append('img', file);
    formData.append('brandId', device.selectedBrand.id);
    formData.append('typeId', device.selectedType.id);
    formData.append('info', JSON.stringify(info));
    createDevice(formData).then((data) => setShow(false));
  };

  const removeInfo = (number) => {
    setInfo(info.filter((item) => item.number !== number));
  };

  const selectedFile = (e) => {
    setFile(e.target.files[0]);
  };

  const changeInfo = (key, value, number) => {
    setInfo(info.map((i) => (i.number === number ? { ...i, [key]: value } : i)));
  };

  React.useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
  }, []);

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
            <Dropdown className="mt-2 mb-2">
              <Dropdown.Toggle>{device.selectedType.name || 'Выберите тип'}</Dropdown.Toggle>
              <Dropdown.Menu>
                {device.types.map((type) => (
                  <Dropdown.Item onClick={() => device.setSelectedType(type)} key={type.id}>
                    {type.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mt-2 mb-2">
              <Dropdown.Toggle>{device.selectedBrand.name || 'Выберите тип'}</Dropdown.Toggle>
              <Dropdown.Menu>
                {device.brands.map((brand) => (
                  <Dropdown.Item onClick={() => device.setSelectedBrand(brand)} key={brand.id}>
                    {brand.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            <Form.Control
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-3"
              placeholder="Введите название устройства"
            />
            <Form.Control
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="mt-3"
              placeholder="Введите стоимость устройства"
              type="number"
            />
            <Form.Control className="mt-3" type="file" onChange={selectedFile} />
            <Button className="mt-5" variant={'outline-dark'} onClick={addInfo}>
              Добавить новое свойство
            </Button>
            {info.map((item) => (
              <div className="d-flex" key={item.number}>
                <Col md={4}>
                  <Form.Control
                    value={item.title}
                    onChange={(e) => changeInfo('title', e.target.value, item.number)}
                    className="mt-3"
                    placeholder="Введите название свойства"
                  />
                </Col>
                <Col md={4}>
                  <Form.Control
                    value={item.description}
                    onChange={(e) => changeInfo('description', e.target.value, item.number)}
                    className="mt-3  ms-2"
                    placeholder="Введите описание свойства"
                  />
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
          <Button variant="outline-success" onClick={onAdd}>
            Добавить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
});

export default CreateDevice;
