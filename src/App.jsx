import React, { useState } from 'react'
import Newbook from './Components/Newbook'
import Books from './Components/Books'
import Notify from './Components/Notify'

const App = () => {
  const [message, setMessage] = useState({
    status: false,
    text:'',
    color:''
  })
  const updatemessage = (status, text, color) => {
    setMessage({
      status: status,
      text: text,
      color:color
    })
  }
  return (
    <>
    {message.status && <Notify
    text={message.text}
    color={message.color}
    closeView={() => setMessage({...message, status: false})}/>}
      <div className='head-div'>
        <div className="">
          <Newbook updateMessage={updatemessage} />
        </div>
        <div className="">
          <Books />
        </div>

      </div >
    </>
  )
}

export default App