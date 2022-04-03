import React from 'react'
import './Topbar.sass'

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='topbar__logo'>
        <img
          src="/images/logo.png"
          className='h-11'
        />
      </div>
    </div>
  )
}

export default Topbar