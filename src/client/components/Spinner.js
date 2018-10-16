import React from 'react'

import { 
  Modal, 
  ModalButton, 
  ModalLogo, 
  ModalTitle, 
  ModalSpinner 
} from '../styles/components/Loading'

const Spinner = () => (
  <Modal>
    <ModalButton>
      <ModalLogo />
      <ModalTitle>Booktrader</ModalTitle>
    </ModalButton>
    <ModalSpinner viewBox="0 0 50 50" color="white">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="4"
      />
    </ModalSpinner>
  </Modal>
)

export default Spinner