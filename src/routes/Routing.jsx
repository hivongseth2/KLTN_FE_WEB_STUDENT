import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import Layout from '@/layout';
import Login from '@/pages/Auth/Login';
import NotFoundView from '@/pages/page-not-found';
import Home from '@/pages/Home/Home';
import TeacherPage from '@/pages/Teacher/TeacherPage';
import DocumentPage from '@/pages/Document/DocumentPage';
import ChatPage from '@/pages/Chat/ChatPage';
import DepartmentPage from '@/pages/Department/DepartmentPage';
import InternShipPage from '@/pages/InternShip/IntentShipPage';
import SpecPage from '@/pages/Spec/SpecPage';
import NewsPage from '@/pages/Home/NewsPage';
import DetailStudent from '@/pages/DetailStudent/DetailStudent';
import InternsGenPage from '@/pages/InternShip';

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
          path: '/teacher',
          element: <TeacherPage />,
        },

        {
          path: '/document',
          element: <DocumentPage />,
        },
        {
          path: '/chat',
          element: <ChatPage />,
        },
        {
          path: '/department',
          element: <DepartmentPage />,
        },

        {
          path: '/internship',
          element: <InternsGenPage />,
          exact: true,
        },

        {
          path: '/specialized',
          element: <SpecPage />,
        },
        {
          path: '/news',
          element: <NewsPage />,
        },
        {
          path: '/intern-detail',
          element: <InternShipPage />,
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
