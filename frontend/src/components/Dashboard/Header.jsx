import React, { useState } from "react";
import "./Header.css";
import ProfileDropDown from "../Miscellaneous/ProfileDropDown";
import DropDown from "../Miscellaneous/DropDown";
import SearchBar from "../Miscellaneous/SearchBar";
import Button from "../Miscellaneous/Button";
import Modal from "../Miscellaneous/Modal";
import AddCandidateForm from "../Miscellaneous/AddCandidateForm";
import { ToastContainer } from "react-toastify";

const Header = () => {
  const [status, setStatus] = useState("All"); // Default selected value is "All"
  const statusOptions = ["All", "Pending", "Approved", "Rejected"];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <div style={{ position: "relative" }}>
      <div className="header-container">
        <div className="header-content">
          <h4>Candidates</h4>
          <div className="header-sub-content">
            <i className="fa-regular fa-envelope"></i>
            <i className="fa-regular fa-bell"></i>
            <ProfileDropDown />
          </div>
        </div>
        <hr
          style={{
            border: "none",
            borderTop: "1px solid #ccc",
            margin: "10px 0",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "0px 10px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 20,
            }}
          >
            <DropDown
              options={statusOptions}
              selectedValue={status}
              onChange={(value) => setStatus(value)}
            />
            <DropDown
              options={statusOptions}
              selectedValue={status}
              onChange={(value) => setStatus(value)}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 20,
            }}
          >
            <SearchBar width={250} />
            <button
              style={{ border: "none", background: "#fff" }}
              onClick={handleModalOpen}
            >
              <Button
                width={200}
                color={"#fff"}
                bgColor={"#783FED"}
                gradient={"linear-gradient(to right, #7a37d2, #5c28af)"}
                fSize={14}
                buttonLabel={"Add New Candidate"}
              />
            </button>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <AddCandidateForm onClose={handleModalClose} />
      </Modal>
    </div>
  );
};

export default Header;
