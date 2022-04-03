import React from 'react'
import './Modal.sass'
import { useNavigate } from 'react-router-dom'

const Modal = ({ children, title, closeLink }) => {
  const navigate = useNavigate()
  return (
    <div className='modal'>
      <div className='modal__overlay' onClick={() => navigate(closeLink)}>
      </div>
      <div className='modal__body'>
        <div className='modal__content'>
          <div className='modal__content-header'>
            <span className='font-medium'>{title}</span>
            <div
              onClick={() => navigate(closeLink)}
              className="cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
          <div className='modal__content-body'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal