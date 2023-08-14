import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { createType } from '../../http/deviceAPI';

function CreateType() {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onAdd = () => {
    if (value) {
      createType({ name: value }).then((data) => {
        setValue('');
        setShow(false);
      });
    } else {
      alert('Введите название бренда');
    }
  };

  return (
    <>
      <Button variant="outline-dark" className="mt-2" onClick={handleShow}>
        Добавить тип
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Добавить тип</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              value={value}
              onChange={(e) => setValue(e.target.value)}
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

export default CreateType;
