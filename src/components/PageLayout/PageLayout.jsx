import { Outlet } from 'react-router-dom';

// import { Header, Container, List, StyledNavLink } from './Layout.styled';
// import Loader from 'components/Loader';
import Header from 'components/Header/Header';
import SideBar from 'components/SideBar/SideBar';

const MainLayout = () => {
  return (
    <>
      <SideBar />
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
