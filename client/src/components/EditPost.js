import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function MyForm() {
  const [formData, setFormData] = useState({
    topic: '',
    description: '',
    postCategory: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:8000/post/${id}`)
        .then((res) => {
          if (res.data.success) {
            setPost(res.data.post);
            // Initialize the form fields with data from the response
            setFormData({
              topic: res.data.post.topic,
              description: res.data.post.description,
              postCategory: res.data.post.postCategory,
            });
          } else {
            console.error('Request was not successful:', res.data.error);
          }
        })
        .catch((error) => {
          console.error('An error occurred while making the request:', error);
        });
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:8000/post/update/${id}`, formData);
      if (response.data.success) {
        // Reset the form after a successful update
        setFormData({
          topic: '',
          description: '',
          postCategory: '',
        });
        console.log('Update saved successfully!');
      } else {
        console.error('Failed to save post.');
      }
    } catch (error) {
      console.error('An error occurred while saving the post.', error);
    }
  };

  return (
    <div>
      <h2>Edit The Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="topic" className="form-label">
            Topic
          </label>
          <input
            type="text"
            className="form-control"
            id="topic"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="postCategory" className="form-label">
            Post Category
          </label>
          <select
            className="form-select"
            id="postCategory"
            name="postCategory"
            value={formData.postCategory}
            onChange={handleChange}
            required
          >
            <option value="">Select a category</option>
            <option value="Technology">Technology</option>
            <option value="Travel">Travel</option>
            <option value="Food">Food</option>
            <option value="Sports">Sports</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}

export default MyForm;