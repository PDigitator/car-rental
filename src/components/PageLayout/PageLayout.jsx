import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header';
import SideBar from 'components/SideBar';
import Modal from 'components/Modal';

const PageLayout = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };
  return (
    <>
      {showModal && (
        <Modal name="sidebar" onClose={toggleModal}>
          <SideBar />
        </Modal>
      )}

      <Header onOpen={toggleModal} />

      <Outlet />
    </>
  );
};

export default PageLayout;
