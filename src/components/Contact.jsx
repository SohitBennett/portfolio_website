// import { CONTACT } from "../constants"
// import { motion } from "framer-motion"


// const Contact = () => {

//   return (
//     <div id="contactme" className="section border-b border-neutral-900 pb-20">
        
//         <motion.h1 
//             whileInView={{ opacity: 1, y:0 }}
//             initial={{ opacity: 0, y: -100 }}
//             transition={{ duration: 0.5 }}
//             className="my-10 text-center text-4xl"
//         >
//             Get in Touch
//         </motion.h1>
//         <div className="text-center tracking-tighter">
//             <motion.p 
//                 whileInView={{ opacity: 1, x:0 }}
//                 initial={{ opacity: 0, x: -100 }}
//                 transition={{ duration: 1 }}
//                 className="my-4"
//             >
//                 {CONTACT.address}
//             </motion.p>
//             <motion.p 
//                 whileInView={{ opacity: 1, x:0 }}
//                 initial={{ opacity: 0, x: 100 }}
//                 transition={{ duration: 1 }}
//                 className="my-4"
//             >
//                 {CONTACT.phoneNo}
//             </motion.p>
//             <a href="#" className="border-b">{CONTACT.email}</a>
//         </div>
        
//     </div>
//   )
// }

// export default Contact




//----------------trying email form 



import React, { useState } from 'react';
import { CONTACT } from "../constants"
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send email via API)
    alert('Message sent successfully!');
  };

  return (
    <div id="contactme" className="section border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-6xl font-semibold tracking-tighter"
      >
        Get in Touch
      </motion.h1>
      <div className="flex flex-wrap lg:flex-nowrap lg:justify-center lg:items-start">
        {/* Contact Details */}
        <div className="w-full lg:w-1/2 px-4 text-lg text-center tracking-tighter mb-8 lg:mb-0">
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="my-4"
          >
            {CONTACT.address}
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="my-4"
          >
            {CONTACT.phoneNo}
          </motion.p>
          <a href={`mailto:${CONTACT.email}`} className="border-b ">
            {CONTACT.email}
          </a>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-1/2 px-4 ">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-50">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-neutral-400 text-gray-300 focus:outline-none focus:ring focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-50">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-neutral-400 text-gray-300 focus:outline-none focus:ring focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-50">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-neutral-400 text-gray-300 focus:outline-none focus:ring focus:ring-purple-500"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
