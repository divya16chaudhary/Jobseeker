import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How JobHub Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
              Users can start the account creation process 
              by clicking on the "Resistration" or "Create an Account" 
              button available on the homepage or navigation bar.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
              Users can search for jobs using keywords, job titles, or company names. 
              The search functionality is designed to return relevant results based on
              the user's input.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
              The "Apply for a Job" feature is designed to streamline the job 
              application process for job seekers, making it 
              quick and easy to submit applications for job opportunities that
               match their skills and career goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
