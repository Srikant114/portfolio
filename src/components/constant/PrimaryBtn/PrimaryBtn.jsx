import React from 'react'
import './PrimaryBtn.css'

const PrimaryBtn = ({children, className, onClick}) => {
  return (
    <button className={`${children} primary-button`} onClick={onClick}>
        {children}
    </button>
  )
}

export default PrimaryBtn