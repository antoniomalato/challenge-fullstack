import React from 'react'

function Button ({text, type, onClick }) {
  return (
    <button onClick={ onClick } type={ type }
    >{ text }</button>
  )
}

export default Button