import React, { useState } from 'react';
import axios from 'axios';

const JobPost = ({ token }) => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    location: '',
    company: '',
    salary: '',
    jobType: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("TOKEN:", token);
      await axios.post('http://localhost:8081/jobs', form, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setMessage('Job posted successfully!');
      setForm({ title: '', description: '', location: '', company: '', salary: '', jobType: '' });
    } catch (err) {
      console.error(err);
      setMessage('Failed to post job');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Post a Job</h2>

      <input
        type="text"
        name="title"
        placeholder="Job Title"
        value={form.title}
        onChange={handleChange}
        required
      />
      <br />

      <textarea
        name="description"
        placeholder="Job Description"
        value={form.description}
        onChange={handleChange}
        required
      />
      <br />

      <input
        type="text"
        name="location"
        placeholder="Location"
        value={form.location}
        onChange={handleChange}
        required
      />
      <br />

      <input
        type="text"
        name="company"
        placeholder="Company"
        value={form.company}
        onChange={handleChange}
        required
      />
      <br />

      <input
        type="text"
        name="salary"
        placeholder="Salary"
        value={form.salary}
        onChange={handleChange}
        required
      />
      <br />

      <input
        type="text"
        name="jobType"
        placeholder="Job Type"
        value={form.jobType}
        onChange={handleChange}
        required
      />
      <br />

      <button type="submit">Submit</button>

      {message && <p>{message}</p>}
    </form>
  );
};

export default JobPost;