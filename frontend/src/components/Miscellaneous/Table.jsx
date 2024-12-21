import React, { useState } from "react";
import DropDown from "../Miscellaneous/DropDown"
import "./Table.css";

const Table = ({ candidates }) => {
//   const [candidates, setCandidates] = useState([
//     { id: 1, name: "Floyd Miles", email: "sara.cruz@example.com", phone: "704-555-0127", position: "Designer Intern", status: "New", experience: "Fresher" },
//     { id: 2, name: "Cody Fisher", email: "deanna.curtis@example.com", phone: "252-555-0126", position: "Developer", status: "Rejected", experience: "1+" },
//     { id: 3, name: "Guy Hawkins", email: "kenzi.lawson@example.com", phone: "907-555-0101", position: "Human Resource", status: "Ongoing", experience: "10+" },
//   ]);

  const [status, setStatus] = useState("All"); // Default selected value is "All"
  const statusOptions = ["All", "Pending", "Approved", "Rejected"];

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Candidate Name</th>
            <th>Email Address</th>
            <th>Phone Number</th>
            <th>Position</th>
            <th>Status</th>
            <th>Experience</th>
            <th>Resume</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate, index) => (
            <tr key={candidate.id}>
              <td>{index + 1}</td>
              <td>{candidate.name}</td>
              <td>{candidate.email}</td>
              <td>{candidate.phone}</td>
              <td>{candidate.position}</td>
              <td>
                <DropDown 
                  options={statusOptions}
                  selectedValue={candidate.status}
                  onChange={(value) => setStatus(value)}  
               />
              </td>
              <td>{candidate.experience}</td>
              <td>
                <button className="resume-btn">📥</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
