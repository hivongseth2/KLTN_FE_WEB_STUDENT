import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import Layout from '@/layout';
import Login from '@/pages/Auth/Login';
import NotFoundView from '@/pages/page-not-found';
import Home from '@/pages/Home/Home';
import DocumentPage from '@/pages/Document/DocumentPage';
import ChatPage from '@/pages/Chat/ChatPage';
import NewsPage from '@/pages/Home/NewsPage';
import DetailStudent from '@/pages/DetailStudent/DetailStudent';
import ReportPage from '@/pages/Report/ReportPage';

function Routing() {
  const routes = useRoutes([
    {
      path: 'login',
      element: <Login />,
    },
    {
      element: <Layout />,
      children: [
        { element: <Home />, index: true },

        {
          path: '/document',
          element: <DocumentPage />,
        },
        {
          path: '/chat',
          element: <ChatPage />,
        },
        {
          path: '/report',
          element: <ReportPage />,
        },

        {
          path: '/news',
          element: <NewsPage />,
        },

        {
          path: '/detail-student',
          element: <DetailStudent />,
        },
      ],
    },
    {
      path: '404',
      element: <NotFoundView />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}

export default Routing;
