import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import PostDetails from './components/PostDetails';
import NavBar from './components/NavBar';



const containerStyle = {
  backgroundColor: '#F5CBA7',
  innerWidth:'100%'

  }


export default class App extends Component {
  componentDidMount() {
    
    document.body.style.backgroundColor = '#F5CBA7'; 
  }


  


  render() {
    return (
      <BrowserRouter>
        <div className="container" style={containerStyle}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<CreatePost />} />
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="/post/:id" element={<PostDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
} 
