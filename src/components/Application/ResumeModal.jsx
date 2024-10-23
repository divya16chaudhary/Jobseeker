// import React from "react";
// import Job  from "Job";
// const ResumeModal = ({ imageUrl, onClose }) => {
//   return (
//     <div className="resume-modal">
//       <div className="modal-content">
//         <span className="close" onClick={onClose}>
//           &times;
//         </span>
//         <img src={imageUrl} alt="resume" />
//       </div>
//     </div>
//   );
// };

// export default ResumeModal;
import React from "react";
import Job from "./Job"; // Ensure the path is correct relative to your folder structure

const ResumeModal = ({ imageUrl, onClose }) => {
  return (
    <div className="resume-modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>

        {/* Render uploaded resume as image or upload using Job component */}
        {imageUrl ? (
          <img src={imageUrl} alt="resume" style={{ width: '100%' }} />
        ) : (
          <Job /> // If imageUrl is not present, render the Job component for resume upload
        )}

      </div>
    </div>
  );
};

export default ResumeModal;

