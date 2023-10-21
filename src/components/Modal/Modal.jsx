import { useEffect } from 'react';

import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import Button from 'components/Button';
import { ReactComponent as IconClose } from '../../icons/x-close.svg';

import {
  Overlay,
  OverlaySideBar,
  ModalWrap,
  ModalWrapSideBar,
} from 'components/Modal/Modal.styled';
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
      <OverlaySideBar onClick={handleOverlayClick}>
        <ModalWrapSideBar>
          <Button name="close" type="button" onClick={onClose}>
            <IconWrap>
              <IconClose />
            </IconWrap>
          </Button>

          {children}
        </ModalWrapSideBar>
      </OverlaySideBar>
    ) : (
      <Overlay onClick={handleOverlayClick}>
        <ModalWrap>
          <Button name="close" type="button" onClick={onClose}>
            <IconWrap>
              <IconClose />
            </IconWrap>
          </Button>
          {children}
        </ModalWrap>
      </Overlay>
    ),
    modalRoot
  );
};

Modal.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
