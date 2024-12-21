const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CandidateSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneno: {
        type: Number,
        required: true
    },
    position: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["New", "Scheduled", "Selected", "Rejected", "Ongoing"],
        default: "New",
    },
    experience: {
        type: String,
        default: "Fresher",
        required: true
    },
    resume: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

const Candidate = mongoose.model('candidates', CandidateSchema);
module.exports = Candidate;