import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { createBrand } from '../../http/deviceAPI';

function CreateBrand() {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onAdd = () => {
    createBrand({ name: value }).then((data) => {
      setValue('');
      setShow(false);
    });
  };

  return (
    <>
      <Button variant="outline-dark" className="mt-2" onClick={handleShow}>
        Добавить бренд
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Добавить бренд</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              value={value}
              onChange={(e) =>
                value ? setValue(e.target.value) : alert('Введите название бренда')
              }
              placeholder={'Введите название типа'}
            />
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
}

export default CreateBrand;
