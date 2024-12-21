import React, { useState, useEffect } from 'react'
import SideBar from '../components/Dashboard/SideBar';
import './Dashboard.css'
import Header from '../components/Dashboard/Header';
import Table from '../components/Miscellaneous/Table';
import { handleError } from '../utils';
import { Routes, Route } from 'react-router-dom';


const Dashboard = () => {

  const [candidates, setCandidates] = useState([]); // State to store fetched candidates


  const fetchCandidates = async () => {
    try {
      const token = localStorage.getItem("token"); // Assume token is stored in localStorage after login
  
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/candidate/getcandidates`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // Add token to the Authorization header
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch candidates.");
      }
  
      const data = await response.json();
      setCandidates(data); // Store candidates in state
      console.log(data)
      // setLoading(false); // Set loading to false
    } catch (err) {
      handleError("Failed to fetch candidates. Please try again."); // Set error state
      // setLoading(false); // Set loading to false
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, []);
  
  return (
    <div className='container'>
        <SideBar />
        <div style={{width: '100%'}}>
          <Header />
          <div>
            <Routes>
              <Route element={<Table candidates={candidates} />} path={'/candidates'} />
              {/* <Route element={<Table candidates={candidates} />} path={'/attendance'} /> */}
              {/* <Route element={<Table candidates={candidates} />} path={'/leaves'} /> */}
            </Routes>
          </div>
        </div>
    </div>
  )
}

export default Dashboard;