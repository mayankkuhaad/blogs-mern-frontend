import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BooksRecord.css";

function BooksRecord() {
  const [Bookrecord, setBookrecord] = useState({
    title: "",
    author: "",
    isbn: "",
    publisher: "",
    published_date: "",
    description: "",
  });

  useEffect(() => {}, []);

  return (
    <div className="BooksRecord">
      <Link to="/Booklist">
        <button className="btn btn-primary ShowBooklist">Show Blogs</button>
      </Link>
      <h1 >Blogs Record</h1>
      <ol className="BookData">
        <li> Title : {Bookrecord.title}</li>
        <li> Description : {Bookrecord.description}</li>
        <li> Author : {Bookrecord.author}</li>
        <li> Date : {Bookrecord.date}</li>
        <li> Time : {Bookrecord.time}</li>
      </ol>


      <div className="Buttons">
        <button  className="btn btn-primary" onClick={()=>{alert('your blog is deleted')}}>Delete Blog</button>
        <Link to="/EditBooks">
          <button className="btn btn-primary" >Edit Blog</button>
        </Link>
      </div>
    </div>
  );
}

export default BooksRecord;
