import React from 'react';
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import logoPng from '../assets/logo.png';

const NavBar = observer(() => {
  const navigate = useNavigate();
  const { user } = React.useContext(Context);

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.removeItem('token');
  };

  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href={SHOP_ROUTE}>
          <img width={45} src={logoPng} />
          lectron
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {user.isAuth ? (
            <Nav>
              <Button onClick={() => navigate(ADMIN_ROUTE)} variant={'outline-dark'}>
                Админ панель
              </Button>
              <Button onClick={() => logOut()} variant={'dark'} className="ms-2">
                Выйти
              </Button>
            </Nav>
          ) : (
            <Nav>
              <Button className="me-2" variant={'dark'} onClick={() => navigate('/registration')}>
                Зарегестрироваться
              </Button>
              <Button variant={'outline-dark'} onClick={() => navigate('/login')}>
                Войти
              </Button>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
});

export default NavBar;
