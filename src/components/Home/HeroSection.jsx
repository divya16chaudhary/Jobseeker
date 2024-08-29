import React from "react";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";
import { FaBriefcase, FaIndustry, FaUserFriends, FaUserTie } from "react-icons/fa";

const HeroSection = () => {
  
    const details = [
      {
        id: 1,
        title: "2,50,000",
        subTitle: "Available Jobs",
        icon: <FaBriefcase />,
      },
      {
        id: 2,
        title: "1,00,000",
        subTitle: "Partner Companies",
        icon: <FaIndustry />,
      },
      {
        id: 3,
        title: "3,00,000",
        subTitle: "Active Job Seekers",
        icon: <FaUserFriends />,
      },
      {
        id: 4,
        title: "1,20,000",
        subTitle: "Registered Employers",
        icon: <FaUserTie />,
      },
    ];
    
  return (
    <>
      <div className="heroSection">
        <div className="container">
          <div className="title">
            <h2>Discover a career path that</h2>
            <h2> aligns with your passions and expertise</h2>
            <p>
            Discovering a career path that aligns with your passions and expertise is
             crucial for long-term satisfaction and success. When you pursue a profession that resonates with your interests, work feels more like an opportunity for growth rather than a mere obligation.
            </p>
          </div>
          <div className="image">
            <img src="/heroS.jpg" alt="hero" />
          </div>
        </div>
        <div className="details">
          {details.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="icon">{element.icon}</div>
                <div className="content">
                  <p>{element.title}</p>
                  <p>{element.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
