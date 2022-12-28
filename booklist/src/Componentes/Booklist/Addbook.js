import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Addbook.css"

function Addbook() {
  const Navigator = useNavigate();
  const [BookData,setBookData] = useState({
    title: "",
    description: "",
    author: "",
    date : "",
    time: ""
    
  })
  

  let submitHandle =()=>{
    console.log(BookData);
    axios.post("https://mayank-blogs-mern.onrender.com/booklist/",BookData).then((res)=>{
      alert('Blog is added');
      Navigator("/Booklist");
    })
  }

  return (
    <div className='Addbook'>
        <Link to="/Booklist"><button className='btn btn-primary ShowBooklist'>Show Blogs</button></Link>
        <h1 className='Heading'>Add Blog</h1>
        <input className='form-control my-2' type="text" placeholder='Title of the Blog' value={BookData.title} onChange={(e)=>{setBookData((data )=>{return {...data, title : e.target.value }}) }}></input>
        <input className='form-control my-2' type="text" placeholder='Describe the Blog' value={BookData.description} onChange={(e)=>{setBookData( (data )=>{return {...data, description : e.target.value }})}}></input>
        <input  type="text" className='form-control my-2' placeholder='Author' value={BookData.author} onChange={(e)=>{setBookData( (data )=>{return {...data, author : e.target.value }})}}></input>
       
        <input className='form-control my-2' type="text" placeholder='Date' value={BookData.date} onChange={(e)=>{setBookData( (data )=>{return {...data, date : e.target.value }})}}></input>
        <input type="text" className='form-control my-2' placeholder='time'value={BookData.time} onChange={(e)=>{setBookData( (data )=>{return {...data, time : e.target.value }})}}></input>
        <button className='btn btn-primary' type='submit'  onClick={submitHandle}>Submit</button>
    </div>
  )
}

export default Addbook