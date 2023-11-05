import React from 'react'

const Books = () => {

    const books = [
        {
            title: 'The beautiful ones are not yet born',
            author: 'Litezy',
            price: 2000,
            stock: 50,
            avail: true
        },
        {
            title: 'The beautiful ones are not yet born',
            author: 'Litezy',
            price: 2000,
            stock: 50,
            avail: true
        },
        {
            title: 'The beautiful ones are not yet born',
            author: 'Litezy',
            price: 2000,
            stock: 50,
            avail: true
        }
    ]       
    
}

    return (
        <div>
             <div className="head-lib">Library</div>
            {books.map((book, i) => (

                <div className="library" key={i}>
                   
                <div className="lib">
                    <div className="">Title</div>
                    <div className="">{book.title}</div>
                </div>
                <div className="lib">
                    <div className="">Author</div>
                    <div className="">{book.author}</div>
                </div>
                <div className="lib">
                    <div className="">Price</div>
                    <div className="">{book.price}</div>
                </div>
                <div className="lib">
                    <div className="">Stock</div>
                    <div className="">{book.stock}</div>
                </div>
                <div className="lib">
                    <div className="">Available</div>
                    <div className="">{book.avail?  'In stock' :'Out of stock'}</div>
                </div>
                </div>
            ))}
        </div>
    )


export default Books