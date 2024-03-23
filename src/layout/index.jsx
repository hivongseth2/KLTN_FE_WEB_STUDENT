import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Nav from './nav';
import Header from './header';
import { selectUser } from '@/features/user/userSlice';
import Login from '@/pages/Auth/Login';

export default function Layout() {
  const user = useSelector(selectUser);
  return !user ? (
    <Login />
  ) : (
    <>
      <Header user={user.fullName} />
      <Nav />
      <Outlet />
    </>
  );
}
