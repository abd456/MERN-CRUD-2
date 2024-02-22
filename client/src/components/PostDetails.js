import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const detailStyle = {
  width: '100%' ,
  display:'flex',
  flexDirection: 'column',
  alignitems:'center',
  padding: '10px ',
  margin: '10px',
  backgroundColor: '#ddd',
  BorderRadius: '5px'
  
};

// const detailStyle = {
//   width: '100%' ,
//   height: '50vh',
//   margin: '10px',
//   display: 'flex',
//   flexDirection: 'column',
//   // justifyContent: 'left',
//   alignItems: 'center',
//   backgroundColor: '#ddd',
  
// };

const listItemStyle = {
  // listStyleType: 'none',
  float: 'left',
};

export default function PostDetails() {
  const [post, setPost] = useState({});
  const id = useParams().id;

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8000/post/${id}`).then((res) => {
        if (res.data.success) {
          setPost(res.data.post);
        }
      });
    }
  }, [id]);

  return (
    <div style={detailStyle}>
      <h1>Post Details</h1><br></br>
      <ul style={listItemStyle}>
        <li><h6>{post.topic }</h6></li>
        <li><h6>{post.description }</h6></li>
        <li><h6>{post.postCategory }</h6></li>
      </ul>
    </div>
  );
}

