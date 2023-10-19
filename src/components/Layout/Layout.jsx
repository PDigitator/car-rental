import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { Header, Container, List, StyledNavLink } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <div>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/movies">Movies</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;