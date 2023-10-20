import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

// import { Header, Container, List, StyledNavLink } from './Layout.styled';
import Loader from 'components/Loader';

const Layout = () => {
  return (
    <>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
