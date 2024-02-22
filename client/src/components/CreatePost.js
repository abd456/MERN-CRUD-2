import React, { useState } from 'react';
import axios from 'axios'

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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("/post/save", formData);
      if (response.data.success) {
        setFormData({
          topic: '',
          description: '',
          postCategory: '',
        });
        console.log("Post saved successfully!");
      } else {
        console.error("Failed to save post.");
      }
    } catch (error) {
      console.error("An error occurred while saving the post.", error);
    }

    console.log(formData)

  };
  

  return (
    <div>
      <h2>Create a Post</h2>
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
          Submit
        </button>
      </form>
    </div>
  );
}

export default MyForm;