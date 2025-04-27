// // import React, { useState } from 'react';

// // function ContactPage() {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     phone: '',
// //     message: '',
// //   });

// //   const [msgSent, setMsgSent] = useState(false);

// //   const handleChange = (e) => {
// //     setFormData((prev) => ({
// //       ...prev,
// //       [e.target.name]: e.target.value,
// //     }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Here you can send the formData to your backend using fetch/axios
// //     console.log('Form Data Submitted:', formData);
// //     setMsgSent(true); // Simulate successful message send
// //   };

// //   return (
// //     <>
// //       {/* Page Header */}
// //       <header
// //         className="masthead bg-cover bg-center py-20"
// //         style={{
// //           backgroundImage: `url('\contact-bg.jpg')`, // Make sure the path is correct
// //         }}
// //       >
// //         <div className="container mx-auto px-4">
// //           <div className="flex justify-center">
// //             <div className="text-center text-white">
// //               <div className="page-heading">
// //                 <h1 className="text-4xl font-bold">
// //                   {msgSent ? 'Successfully sent your message' : 'Contact Me'}
// //                 </h1>
// //                 <span className="subheading text-lg mt-2 block">
// //                   Have questions? I have answers.
// //                 </span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </header>

// //       {/* Main Content */}
// //       <main className="mb-10">
// //         <div className="container mx-auto px-4">
// //           <div className="flex justify-center">
// //             <div className="w-full max-w-2xl">
// //               <p className="text-gray-700 mb-8">
// //                 Want to get in touch? Fill out the form below to send me a message and
// //                 I will get back to you as soon as possible!
// //               </p>

// //               <form onSubmit={handleSubmit} className="space-y-6">
// //                 <div className="form-floating">
// //                   <input
// //                     className="form-control w-full border border-gray-300 p-3 rounded-md"
// //                     id="name"
// //                     name="name"
// //                     type="text"
// //                     placeholder="Enter your name..."
// //                     required
// //                     value={formData.name}
// //                     onChange={handleChange}
// //                   />
// //                   <label htmlFor="name" className="block text-sm text-gray-600 mt-2">Name</label>
// //                 </div>

// //                 <div className="form-floating">
// //                   <input
// //                     className="form-control w-full border border-gray-300 p-3 rounded-md"
// //                     id="email"
// //                     name="email"
// //                     type="email"
// //                     placeholder="Enter your email..."
// //                     required
// //                     value={formData.email}
// //                     onChange={handleChange}
// //                   />
// //                   <label htmlFor="email" className="block text-sm text-gray-600 mt-2">Email Address</label>
// //                 </div>

// //                 <div className="form-floating">
// //                   <input
// //                     className="form-control w-full border border-gray-300 p-3 rounded-md"
// //                     id="phone"
// //                     name="phone"
// //                     type="tel"
// //                     placeholder="Enter your phone number..."
// //                     required
// //                     value={formData.phone}
// //                     onChange={handleChange}
// //                   />
// //                   <label htmlFor="phone" className="block text-sm text-gray-600 mt-2">Phone Number</label>
// //                 </div>

// //                 <div className="form-floating">
// //                   <textarea
// //                     className="form-control w-full border border-gray-300 p-3 rounded-md"
// //                     id="message"
// //                     name="message"
// //                     placeholder="Enter your message here..."
// //                     required
// //                     style={{ height: '12rem' }}
// //                     value={formData.message}
// //                     onChange={handleChange}
// //                   ></textarea>
// //                   <label htmlFor="message" className="block text-sm text-gray-600 mt-2">Message</label>
// //                 </div>

// //                 <div>
// //                   <button
// //                     type="submit"
// //                     className="w-full bg-red-600 text-white py-3 rounded-md uppercase font-bold hover:bg-red-700 transition"
// //                   >
// //                     Send Message
// //                   </button>
// //                 </div>
// //               </form>

// //             </div>
// //           </div>
// //         </div>
// //       </main>
// //     </>
// //   );
// // }

// // export default ContactPage;
// import React, { useState } from 'react';
// import { Toaster, toast } from 'react-hot-toast'; // ✅ Import toast library
// import { FaSpinner } from 'react-icons/fa'; // ✅ Spinner icon

// function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const [msgSent, setMsgSent] = useState(false);
//   const [loading, setLoading] = useState(false); // ✅ loading state

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true); // Start loading
//     try {
//       // Simulate backend call
//       await new Promise((resolve) => setTimeout(resolve, 2000));

//       console.log('Form Data Submitted:', formData);
//       setMsgSent(true);
//       toast.success('Message sent successfully! 🎉');
//     } catch (error) {
//       toast.error('Something went wrong. Try again!');
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   return (
//     <>
//       <Toaster position="top-center" reverseOrder={false} /> {/* ✅ Toast container */}

//       {/* Page Header */}
//       <header
//         className="relative w-full h-[400px] bg-no-repeat bg-center bg-cover flex items-center justify-center"
//         style={{
//           backgroundImage: `url('/92284d63-8684-4a87-a925-e9a39928908e.png')`,
//         }}
//       >
//         <div className="text-center text-white bg-black bg-opacity-50 p-6 rounded-md">
//           <h1 className="text-4xl font-bold">
//             {msgSent ? 'Successfully sent your message' : 'Contact Me'}
//           </h1>
//           <span className="subheading text-lg mt-2 block">
//             Have questions? I have answers.
//           </span>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="mb-10">
//         <div className="container mx-auto px-4">
//           <div className="flex justify-center">
//             <div className="w-full max-w-2xl">
//               <p className="text-gray-700 mb-8">
//                 Want to get in touch? Fill out the form below to send me a message and
//                 I will get back to you as soon as possible!
//               </p>

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="form-floating">
//                   <input
//                     className="form-control w-full border border-gray-300 p-3 rounded-md"
//                     id="name"
//                     name="name"
//                     type="text"
//                     placeholder="Enter your name..."
//                     required
//                     value={formData.name}
//                     onChange={handleChange}
//                   />
//                   <label htmlFor="name" className="block text-sm text-gray-600 mt-2">Name</label>
//                 </div>

//                 <div className="form-floating">
//                   <input
//                     className="form-control w-full border border-gray-300 p-3 rounded-md"
//                     id="email"
//                     name="email"
//                     type="email"
//                     placeholder="Enter your email..."
//                     required
//                     value={formData.email}
//                     onChange={handleChange}
//                   />
//                   <label htmlFor="email" className="block text-sm text-gray-600 mt-2">Email Address</label>
//                 </div>

//                 <div className="form-floating">
//                   <input
//                     className="form-control w-full border border-gray-300 p-3 rounded-md"
//                     id="phone"
//                     name="phone"
//                     type="tel"
//                     placeholder="Enter your phone number..."
//                     required
//                     value={formData.phone}
//                     onChange={handleChange}
//                   />
//                   <label htmlFor="phone" className="block text-sm text-gray-600 mt-2">Phone Number</label>
//                 </div>

//                 <div className="form-floating">
//                   <textarea
//                     className="form-control w-full border border-gray-300 p-3 rounded-md"
//                     id="message"
//                     name="message"
//                     placeholder="Enter your message here..."
//                     required
//                     style={{ height: '12rem' }}
//                     value={formData.message}
//                     onChange={handleChange}
//                   ></textarea>
//                   <label htmlFor="message" className="block text-sm text-gray-600 mt-2">Message</label>
//                 </div>

//                 <div>
//                   <button
//                     type="submit"
//                     className="w-full flex justify-center items-center bg-red-600 text-white py-3 rounded-md uppercase font-bold hover:bg-red-700 transition"
//                     disabled={loading}
//                   >
//                     {loading ? (
//                       <>
//                         <FaSpinner className="animate-spin mr-2" />
//                         Sending...
//                       </>
//                     ) : (
//                       'Send Message'
//                     )}
//                   </button>
//                 </div>
//               </form>

//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }

// export default ContactPage;

// import React from "react";
// import styled from "styled-components";

// const Contact = () => {
//   const Wrapper = styled.section`
//     padding: 9rem 0 5rem 0;

//     .container {
//       margin-top: 6rem;
//       text-align: center;

//       .contact-form {
//         max-width: 50rem;
//         margin: auto;

//         .contact-inputs {
//           display: flex;
//           flex-direction: column;
//           gap: 3rem;

//           input[type="submit"] {
//             cursor: pointer;
//             transition: all 0.2s;

//             &:hover {
//               background-color: ${({ theme }) => theme.colors.white};
//               border: 1px solid ${({ theme }) => theme.colors.btn};
//               color: ${({ theme }) => theme.colors.btn};
//               transform: scale(0.9);
//             }
//           }
//         }
//       }
//     }
//   `;

//   return (
//     <Wrapper>
//       <h2 className="common-heading">Feel Free to Contact us</h2>

//       <iframe
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15126.28620995241!2d73.92422475000001!3d18.59334505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14df5c70e0d%3A0x2d19689e09e2fced!2sPhoenix%20Mall%20Washrooms!5e0!3m2!1sen!2sin!4v1658905192255!5m2!1sen!2sin"
//         width="100%"
//         height="450"
//         style={{ border: 0 }}
//         allowFullScreen=""
//         loading="lazy"
//         referrerPolicy="no-referrer-when-downgrade"></iframe>

//       <div className="container">
//         <div className="contact-form">
//           <form
//             action="https://formspree.io/f/xnndnzla"
//             method="POST"
//             className="contact-inputs">
//             <input
//               type="text"
//               name="username"
//               placeholder="username"
//               autoComplete="off"
//               required
//             />

//             <input
//               type="email"
//               name="Email"
//               placeholder="Email"
//               autoComplete="off"
//               required
//             />

//             <textarea
//               name="message"
//               cols="30"
//               rows="6"
//               autoComplete="off"
//               required></textarea>

//             <input type="submit" value="send" />
//           </form>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// export default Contact;


// import React, { useState } from "react";
// import styled from "styled-components";
// import { Toaster, toast } from "react-hot-toast";
// import { FaSpinner } from "react-icons/fa";

// const Wrapper = styled.section`
//   padding: 9rem 0 5rem 0;

//   .container {
//     margin-top: 6rem;
//     text-align: center;

//     .contact-form {
//       max-width: 50rem;
//       margin: auto;

//       .contact-inputs {
//         display: flex;
//         flex-direction: column;
//         gap: 3rem;

//         input[type="submit"] {
//           cursor: pointer;
//           transition: all 0.2s;

//           &:hover {
//             background-color: ${({ theme }) => theme.colors.white};
//             border: 1px solid ${({ theme }) => theme.colors.btn};
//             color: ${({ theme }) => theme.colors.btn};
//             transform: scale(0.9);
//           }
//         }
//       }
//     }
//   }
// `;

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [msgSent, setMsgSent] = useState(false);

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await fetch("https://formspree.io/f/xnndnzla", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setMsgSent(true);
//         toast.success("Message sent successfully! 🎉");
//         setFormData({ username: "", email: "", message: "" });
//       } else {
//         throw new Error("Form submission failed");
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Toaster position="top-center" reverseOrder={false} />

//       <Wrapper>
//         <h2 className="common-heading">
//           {msgSent ? "Successfully sent your message" : "Feel Free to Contact us"}
//         </h2>

//         <iframe
//   src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7141.33932430663!2d88.41722466749155!3d22.50971456938552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1745734716305!5m2!1sen!2sin"
//   width="100%"
//   height="450"
//   style={{ border: 0 }}
//   allowFullScreen=""
//   loading="lazy"
//   referrerPolicy="no-referrer-when-downgrade"
// ></iframe>


//         <div className="container">
//           <div className="contact-form">
//             <form onSubmit={handleSubmit} className="contact-inputs">
//               <input
//                 type="text"
//                 name="username"
//                 placeholder="Username"
//                 autoComplete="off"
//                 required
//                 value={formData.username}
//                 onChange={handleChange}
//               />

//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 autoComplete="off"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//               />

//               <textarea
//                 name="message"
//                 cols="30"
//                 rows="6"
//                 placeholder="Enter your message here..."
//                 autoComplete="off"
//                 required
//                 value={formData.message}
//                 onChange={handleChange}
//               ></textarea>

//               <button
//                 type="submit"
//                 className="bg-red-600 text-white py-3 rounded-md uppercase font-bold hover:bg-red-700 transition flex justify-center items-center"
//                 disabled={loading}
//               >
//                 {loading ? (
//                   <>
//                     <FaSpinner className="animate-spin mr-2" />
//                     Sending...
//                   </>
//                 ) : (
//                   "Send Message"
//                 )}
//               </button>
//             </form>
//           </div>
//         </div>
//       </Wrapper>
//     </>
//   );
// };

// export default ContactPage;
import React, { useState } from "react";
import styled from "styled-components";
import { Toaster, toast } from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";

const Wrapper = styled.section`
  padding: 6rem 0 4rem 0;
  background-color: #f9fafb;
  
  .container {
    margin-top: 4rem;
    max-width: 600px;
    background: #ffffff;
    padding: 3rem 2rem;
    border-radius: 12px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
    margin-left: auto;
    margin-right: auto;
  }

  h2 {
    text-align: center;
    font-size: 2.2rem;
    font-weight: 700;
    color: #111827;
  }

  iframe {
    margin: 2rem 0;
    border-radius: 12px;
    overflow: hidden;
  }

  .contact-form {
    margin-top: 2rem;

    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      input, textarea {
        width: 100%;
        padding: 1rem;
        border: 1px solid #d1d5db;
        border-radius: 8px;
        font-size: 1rem;
        background: #f3f4f6;
        transition: all 0.3s;

        &:focus {
          border-color: #6366f1;
          background: #fff;
          outline: none;
        }
      }

      button {
        padding: 1rem;
        background: #6366f1;
        color: #fff;
        border: none;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        transition: background 0.3s ease;

        &:hover {
          background: #4f46e5;
        }

        &:disabled {
          background: #a5b4fc;
          cursor: not-allowed;
        }
      }
    }
  }
`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [msgSent, setMsgSent] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xnndnzla", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMsgSent(true);
        toast.success("Message sent successfully! 🎉");
        setFormData({ username: "", email: "", message: "" });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <Wrapper>
        <h2>{msgSent ? "Successfully sent your message!" : "Feel Free to Contact Us"}</h2>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7141.33932430663!2d88.41722466749155!3d22.50971456938552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1745734716305!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="container">
          <div className="contact-form">
            <form onSubmit={handleSubmit} className="contact-inputs">
              <input
                type="text"
                name="username"
                placeholder="Your Name"
                autoComplete="off"
                required
                value={formData.username}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                autoComplete="off"
                required
                value={formData.email}
                onChange={handleChange}
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                autoComplete="off"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <button type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default ContactPage;
