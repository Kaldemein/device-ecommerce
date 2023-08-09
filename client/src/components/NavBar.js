import React from 'react';
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
  const { user } = React.useContext(Context);
  return (
    <Navbar data-bs-theme="dark" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href={SHOP_ROUTE}>Electro</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {user.isAuth ? (
            <Nav>
              <Button variant={'outline-light'}>Админ панель</Button>
              <Button variant={'outline-light'} className="ms-2">
                Войти
              </Button>
            </Nav>
          ) : (
            <Nav>
              <Button onClick={() => user.setIsAuth(true)} variant={'outline-light'}>
                Зарегестрироваться
              </Button>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
});

export default NavBar;
