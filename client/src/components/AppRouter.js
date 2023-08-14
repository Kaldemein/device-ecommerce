import React, { useContext } from 'react';
import { Routes, Route, Redirect } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { ADMIN_ROUTE, BASKET_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import Admin from '../pages/Admin';
import Basket from '../pages/Basket';

const AppRouter = () => {
  const { user } = useContext(Context);

  return (
    <Routes>
      {/* {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={Component} exact />
        ))} */}
      <Route key={ADMIN_ROUTE} path={ADMIN_ROUTE} element={<Admin />} exact />
      <Route key={BASKET_ROUTE} path={BASKET_ROUTE} element={<Basket />} exact />

      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component} exact />
      ))}
    </Routes>
  );
};

export default AppRouter;
