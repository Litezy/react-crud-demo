import React from 'react'

const Notify = ({text, color, closeView}) => {
  return (
    <div className={`notice ${color}`}>
      <div className={`notify `} >
       <span>{text}</span>
       <div className="x" onClick={closeView}>X</div>
    </div>
    </div>
  )
}

export default Notify