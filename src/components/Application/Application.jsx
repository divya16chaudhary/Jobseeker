// import axios from "axios";
// import React, { useContext, useState } from "react";
// import toast from "react-hot-toast";
// import { useNavigate, useParams } from "react-router-dom";
// import { Context } from "../../main";
// const Application = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [coverLetter, setCoverLetter] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const [resume, setResume] = useState(null);

//   const { isAuthorized, user } = useContext(Context);

//   const navigateTo = useNavigate();

//   // Function to handle file input changes
//   const handleFileChange = (event) => {
//     const resume = event.target.files[0];
//     setResume(resume);
//   };

//   const { id } = useParams();
//   const handleApplication = async (e) => {
//     e.preventDefault();
//     const userObj={
//       name:name,
//       email:email
//     }
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("email", email);
//     formData.append("phone", phone);
//     formData.append("address", address);
//     formData.append("coverLetter", coverLetter);
//     formData.append("resume", resume);
//     formData.append("jobId", id);

//     try {
//     //  console.log(formData.get());

//      // console.log(email);
//       const { data } = await axios.post(
//         "https://jobhub-1-4sae.onrender.com/api/v1/application/post",
//         formData,
//         {
//           withCredentials: true,
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       setName("");
//       setEmail("");
//       setCoverLetter("");
//       setPhone("");
//       setAddress("");
//       setResume("");
//       toast.success(data.message);
//       navigateTo("/job/getall");
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   if (!isAuthorized || (user && user.role === "Employer")) {
//     navigateTo("/");
//   }

//   return (
//     <section className="application">
//       <div className="container">
//         <h3>Application Form</h3>
//         <form onSubmit={handleApplication}>
//           <input
//             type="text"
//             placeholder="Your Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="number"
//             placeholder="Your Phone Number"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Your Address"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//           />
//           <textarea
//             placeholder="CoverLetter..."
//             value={coverLetter}
//             onChange={(e) => setCoverLetter(e.target.value)}
//           />
//           <div>
//             <label
//               style={{ textAlign: "start", display: "block", fontSize: "20px" }}
//             >
//               Select Resume
//             </label>
//             <input
//               type="file"
//               accept=".pdf, .jpg, .png"
//               onChange={handleFileChange}
//               style={{ width: "100%" }}
//             />
//           </div>
//           <button type="submit">Send Application</button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Application;
import axios from "axios";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../../main";
import Job from "./Job"; // Import the Job component

const Application = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [resume, setResume] = useState(null); // This will be handled by Cloudinary

  const { isAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();
  const { id } = useParams();

  // Function to handle file input changes
  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      // Use the Job component to upload the file to Cloudinary
      const uploadedUrl = await Job(selectedFile);
      setResume(uploadedUrl); // Store the uploaded resume URL
    }
  };

  const handleApplication = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("coverLetter", coverLetter);
    formData.append("resume", resume); // Cloudinary resume URL
    formData.append("jobId", id);

    try {
      const { data } = await axios.post(
        "https://jobhub-1-4sae.onrender.com/api/v1/application/post",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setName("");
      setEmail("");
      setCoverLetter("");
      setPhone("");
      setAddress("");
      setResume(null);
      toast.success(data.message);
      navigateTo("/job/getall");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (!isAuthorized || (user && user.role === "Employer")) {
    navigateTo("/");
  }

  return (
    <section className="application">
      <div className="container">
        <h3>Application Form</h3>
        <form onSubmit={handleApplication}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            placeholder="Your Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="Your Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <textarea
            placeholder="CoverLetter..."
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
          />
          <div>
            <label
              style={{ textAlign: "start", display: "block", fontSize: "20px" }}
            >
              Select Resume
            </label>
            <input
              type="file"
              accept=".pdf, .jpg, .png"
              onChange={handleFileChange} // Cloudinary upload handled here
              style={{ width: "100%" }}
            />
          </div>
          <button type="submit">Send Application</button>
        </form>
      </div>
    </section>
  );
};

export default Application;
