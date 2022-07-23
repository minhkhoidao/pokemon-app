import React from 'react';
import type { RouteObject } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';

const Router = () => {
  let routes: RouteObject[] = [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    }
  ];
  let element = useRoutes(routes);
  return <div>{element}</div>;
};

export default Router;
