import React, { useState } from 'react'
import Button from './Button'
import Books from './Books'

const Newbook = ({updateMessage}) => {
  const [forms, setForms] =useState({
    title:'',
    author:'',
    price:'',
    stock:''
  })
  const [avail, setAvail] =useState(false)
  const handleForms = (e) =>{
    setForms({
      ...forms,
      [e.target.name] : [e.target.value]
    })
  }
  const submitForm = event => {
    event.preventDefault()
    if(!forms.title) return updateMessage(true, 'Book title is required', 'red')
    if(!forms.author) return updateMessage(true, 'Book author is required', 'red')
    if(!forms.price) return updateMessage(true, 'Book price is required', 'red')
    if(!forms.stock) return updateMessage(true, 'Book stock is required', 'red')
    {avail ? setAvail(true): setAvail(false)}
 
   
}
  return (
    <div className='new'>
        <h2>Add new Book</h2>
        <form className='form-book' onSubmit={submitForm}> 
          <div className="book-div">
          <label >book title</label> <br />
            <input onChange={handleForms} name='title' value={forms.title} type="text"  />
          </div>
          <div className="book-div">
          <label >Author</label> <br />
            <input onChange={handleForms} name='author' value={forms.author} type="text"  />
          </div>
          <div className="book-div">
          <label >Price</label> <br />
            <input onChange={handleForms} name='price' value={forms.price} type="number"  />
          </div>
          <div className="book-div">
          <label >Stock</label> <br />
            <input onChange={handleForms} name='stock' value={forms.stock}  type="number"  />
          </div>
          <div className="book-div">
          <div >Is Available?</div> <br />
          <label>
            <input className='inn' type="checkbox"  /> <span>Available</span>
            </label>
          </div>
          <Button color="rgb(2, 13, 94)"/>
        </form>
    </div>
  )
}

export default Newbook