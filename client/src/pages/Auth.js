import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/esm/Form';
import Card from 'react-bootstrap/esm/Card';
import Button from 'react-bootstrap/esm/Button';
import { NavLink, useLocation } from 'react-router-dom';

import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userAPI';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const click = async (event) => {
    if (isLogin) {
      const response = await login(email, password);
    } else {
      const response = await registration(email, password);
    }
  };
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}>
      <Card style={{ width: 400 }} className="p-5">
        <h2 className="m-auto"> {isLogin ? 'Авторизация' : 'Регистрация'} </h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Введите email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <div className="d-flex justify-content-between mt-3">
            {isLogin ? (
              <NavLink
                style={{ textDecoration: 'underline', color: 'Blue' }}
                to={REGISTRATION_ROUTE}>
                Зарегестрироваться
              </NavLink>
            ) : (
              <NavLink style={{ textDecoration: 'underline', color: 'Blue' }} to={LOGIN_ROUTE}>
                Войти
              </NavLink>
            )}

            <Button onClick={click} className="align-self-end" variant="outline-success">
              {isLogin ? 'Войти' : 'Зарегестрироваться'}
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
