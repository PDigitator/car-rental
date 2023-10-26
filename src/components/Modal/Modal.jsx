import { useEffect } from 'react';

import { createPortal } from 'react-dom';

import Button from 'components/Button';
import { ReactComponent as IconClose } from '../../icons/x-close.svg';

import * as s from './Modal.styled';
import { IconWrap } from 'components/HomeContent/HomeContent.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ name, onClose, children }) => {
  useEffect(() => {
    const handleKeydown = evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);

  const handleOverlayClick = evt => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };

  return createPortal(
    name === 'sidebar' ? (
      <s.OverlaySideBar onClick={handleOverlayClick}>
        <s.ModalWrapSideBar>
          <Button name="close" type="button" onClick={onClose}>
            <IconWrap>
              <IconClose />
            </IconWrap>
          </Button>

          {children}
        </s.ModalWrapSideBar>
      </s.OverlaySideBar>
    ) : (
      <s.Overlay onClick={handleOverlayClick}>
        <s.ModalWrap>
          <Button name="close" type="button" onClick={onClose}>
            <IconWrap>
              <IconClose />
            </IconWrap>
          </Button>
          {children}
        </s.ModalWrap>
      </s.Overlay>
    ),
    modalRoot
  );
};

export default Modal;
