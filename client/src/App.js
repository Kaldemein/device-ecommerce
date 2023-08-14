import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import React, { useContext } from 'react';
import { Context } from '.';
import { observer } from 'mobx-react-lite';
import { check } from './http/userAPI';

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      user.setUser(true);
      user.setIsAuth(true);
    }
    check()
      .then((data) => {
        user.setUser(true);
        user.setIsAuth(true);
      })
      .finally(() => setLoading(true));
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
