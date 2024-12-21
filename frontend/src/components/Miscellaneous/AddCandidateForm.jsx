import React, { useState } from "react";
import "./AddCandidateForm.css"
import { handleError, handleSuccess } from "../../utils";
import { ToastContainer } from "react-toastify";
const AddCandidateForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneno: "",
    position: "",
    experience: "",
    resume: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, resume: e.target.files[0] });
//   };

  const handleSubmit =  async (e) => {
    e.preventDefault();

    try {
        const url = `http://localhost:8080/candidate/addcandidate`;
        const response = await fetch(url, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
        const result = await response.json();
        const {success, message, error} = result;
  
        if(success) {
          handleSuccess(message)

        } else if(error) {
          const details = error?.details[0].message
          handleError(details);
  
        } else if(success) {
          handleError(success)
        }
  
        console.log(result);
      } catch (err) {
          handleError(err)
      }
    
    console.log("Form Submitted:", formData);
    onClose(); // Close modal after submitting
  };

  return (
    <div>
    <form className="form-container" onSubmit={handleSubmit}>
      <h3 className="form-title">Add New Candidate</h3>
      <div className="form-row">
        <div className="form-field">
          <label>Full Name*</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter full name"
          />
        </div>
        <div className="form-field">
          <label>Email Address*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter email address"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label>Phone Number*</label>
          <input
            type="text"
            name="phoneno"
            value={formData.phoneno}
            onChange={handleChange}
            required
            placeholder="Enter phone number"
          />
        </div>
        <div className="form-field">
          <label>Department*</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
            placeholder="Enter department"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label>Experience*</label>
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
            placeholder="Enter experience (e.g., 3 years)"
          />
        </div>
        <div className="form-field">
          <label>Resume*</label>
          <div className="file-upload">
            <input
              type="text"
              name="resume"
              value={formData.resume}
              onChange={handleChange}
              required
            />
            <span><i class="fa-solid fa-cloud-arrow-up"></i> Upload</span>
          </div>
        </div>
      </div>

      <button type="submit" className="form-submit">
        Save
      </button>
    </form>
    <ToastContainer />
    </div>
  );
};

export default AddCandidateForm;
