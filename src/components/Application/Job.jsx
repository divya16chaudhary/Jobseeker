import React, { useState } from "react";
import axios from "axios";

const Job = () => {
  const [resumeUrl, setResumeUrl] = useState("");

  const handleUpload = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'n56zuhfu'); // Replace with your preset
    formData.append('cloud_name', 'dk2y5sp91'); // Replace with your cloud name

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dk2y5sp91/image/upload',
        formData
      );
      setResumeUrl(response.data.secure_url); // Store uploaded resume URL
      alert("Resume uploaded successfully!");
    } catch (error) {
      console.error('Error uploading the resume:', error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    handleUpload(file); // Upload file to Cloudinary
  };

  return (
    <div>
      <form>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload Resume</button>
      </form>
      {resumeUrl && <p>Uploaded Resume: {resumeUrl}</p>}
    </div>
  );
};

export default Job;
