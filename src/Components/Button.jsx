import React from 'react'

const Button = ({color}) => {
  return (
    <div>
        <div className='btn'><button style={{backgroundColor: color}}>Create</button></div>
    </div>
  )
}

export default Button