import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/esm/Form';
import Card from 'react-bootstrap/esm/Card';
import Button from 'react-bootstrap/esm/Button';
import { NavLink, useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userAPI';
import { Context } from '..';
import { useNavigate } from 'react-router-dom';

const Auth = observer(() => {
  const { user } = React.useContext(Context);
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  const click = async (event) => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      user.setUser(user);
      user.setIsAuth(true);
      navigate('/');
    } catch (error) {
      alert(error);
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
              <Button
                style={{
                  textDecoration: 'underline',
                  backgroundColor: 'transparent',
                  color: 'Blue',
                  border: 'none',
                  padding: 0,
                }}
                onClick={() => navigate(REGISTRATION_ROUTE)}>
                Зарегестрироваться
              </Button>
            ) : (
              <Button
                style={{
                  textDecoration: 'underline',
                  backgroundColor: 'transparent',
                  color: 'Blue',
                  border: 'none',
                  padding: 0,
                }}
                onClick={() => navigate(LOGIN_ROUTE)}>
                Войти
              </Button>
            )}

            <Button onClick={click} className="align-self-end" variant="outline-success">
              {isLogin ? 'Войти' : 'Зарегестрироваться'}
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
