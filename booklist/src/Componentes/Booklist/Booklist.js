import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Booklist.css";

function Booklist() {
  const [Books, setBooks] = useState([]);
  const Navigator = useNavigate();

  useEffect(() => {
    axios.get("https://mayank-blogs-mern.onrender.com/booklist/").then((res) => {
      console.log(res.data.BooksData);
      setBooks(res.data.BooksData);
    });
  }, []);

  const Handleclick = (e) => {
    console.log(e.target.innerHTML);
    Navigator("/BookRecord");
  };

  return (
    <div className="Booklist">
      <h1 className="Heading">BLOGS</h1>
      <div className="ButtonBox">
        <Link to="/">
          <button  className="btn btn-primary mx-3 logOut">Log Out</button>
        </Link>
        <Link to="/Addbook">
          <button className="btn btn-primary AddBook">Add Blog</button>
        </Link>
      </div>
      <div className="BooksContainer">
        {Books.map((book) => (
          <div className="Book" onClick={Handleclick}>
            <div className="Imgboog">
            <h4>Title:{book.title}</h4>
              <h4>Author:{book.author}</h4>
              <h4>Description:{book.description}</h4>
            </div>
            <div className="Details">
              <h4>date:{book.date}</h4>
              <h4>time:{book.time}</h4>
              {/* <h4>{book.description}</h4> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Booklist;
