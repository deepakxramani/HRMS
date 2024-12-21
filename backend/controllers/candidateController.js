const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const Candidate = require("../models/candidateModel");

// Add new candidate
const addCandidate = async (req, res) => {
    try {
        const { name, email, phoneno, position, status, experience, resume, createdAt } = req.body;
        const candidate = await Candidate.findOne({ email });
        if(candidate) {
            return res.status(409).json({message: 'Candidate is already exits.', success: false})
        }
        const candidateModel = new Candidate({ name, email, phoneno, position, status, experience, resume, createdAt })
        const savedCandidate = await candidateModel.save();
        res.status(201).json({ data: savedCandidate, message: "Added successfully", success: true})
    } catch (err) {
        res.status(500)
        .json({
            message: "Internal server error",
            success: false,
        })
    }
}

// Get Candidates

const getCandidates = async (req, res) => {
    try {
      // Fetch all candidates from the database
      const candidates = await Candidate.find();
  
      // Send the fetched candidates as the response
      res.status(200).json(candidates);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch candidates. Please try again." });
    }
  };



module.exports = {
    addCandidate,
    getCandidates
}