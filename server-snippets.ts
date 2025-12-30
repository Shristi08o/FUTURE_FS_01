
/**
 * BACKEND SNIPPETS (Reference for Node.js/Express implementation)
 * -------------------------------------------------------------
 * Note: These snippets are provided as per the prompt's output requirements.
 * In the live React application, these are simulated via services.
 */

/* 
// 1. MONGODB SCHEMA (Project Entity)
// models/Project.js
const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  techStack: [{ type: String }],
  githubUrl: { type: String },
  liveUrl: { type: String },
  imageUrl: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', ProjectSchema);


// 2. EXPRESS API ROUTES
// routes/api.js
const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Fetch all projects
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Submit Contact Form
router.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    // Logic for saving to DB or sending email (e.g., Nodemailer)
    // const newContact = new Contact({ name, email, subject, message });
    // await newContact.save();
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
*/
