import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import CreateType from '../components/modals/CreateType';
import CreateDevice from '../components/modals/CreateDevice';
import CreateBrand from '../components/modals/CreateBrand';

const Admin = () => {
  return (
    <Container className="d-flex flex-column">
      <CreateBrand />
      <CreateType show={true} />
      <CreateDevice />
    </Container>
  );
};

export default Admin;
