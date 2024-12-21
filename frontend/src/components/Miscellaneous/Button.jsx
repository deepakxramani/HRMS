import React from 'react'

const Button = ({width, color, bgColor, buttonLabel, fSize, gradient}) => {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center' , fontSize: fSize, width: width, color: color, background: gradient, borderRadius: 20, height: 40, cursor:'pointer'}}>
        {buttonLabel}
    </div>
  )
}

export default Button;