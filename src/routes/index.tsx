import {useEffect} from 'react';

import AppRoutes from './app.routes';
import React from 'react';

export default function Routes() {
  // const { signed } = useAuth();
  useEffect(() => {
    // console.log('signed rotas effects: ', signed)
  }, []);

  // console.log('signed rotas: ', signed)

  return <AppRoutes />;

  // return signed ? <AuthRoutes /> : <AppRoutes />
}
