import React from 'react'
import "./EditBooks.css"

function EditBooks() {
  return (
    <div className='EditBooks'>
        <h1 className='HeadingEditBook'>Edit Blogs</h1>
        <div className='Titlediv'>
            <label >Title</label>
        <input className='Title' type="text" placeholder='Title of the Blog'></input>
        </div>
      
        <div className='AuthorDiv'><label>Author</label><input className='Author' type="text" placeholder='Author'></input></div>
        <div className='Discribediv'><label>Describe</label><input className='Discribe' type="text" placeholder='Description of the Blog'></input></div>
        <div className='Publisheddiv'><label>date</label><input className='Published' type="text" placeholder='Date'></input></div>
        <div className='Publisherdiv'><label>time</label><input className='Publisher' type="text" placeholder='time'></input></div>
        <button className="btn btn-primary" type='submit'  onClick={()=>{alert('your blog is edited and saved')}}>Submit</button>
    </div>
  )
}

export default EditBooks