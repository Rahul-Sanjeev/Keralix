import React, { useState } from 'react'
import '../../styles/Contact.css'

export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data Submitted:', formData)
    setFormData({
      name: '',
      email: '',
      whatsapp: '',
      message: '',
    })
  }



  return (
    <>
      <div className="container-fluid mx-auto mb-8 px-4 py-8 bg-gray-100">
        <div className="row">

          {/* Contact Details */}
          <div className="company-details col-lg-6 col-md-12 mb-6">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Contact Us</h2>
            <p className="mb-2">
              <strong>Company Name:</strong> Keralix Pvt. Ltd.
            </p>
            <p className="mb-2">
              <strong>Address:</strong> Keralix Pvt. Ltd., Payyannur, Kannur, Kerala, India 670521
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> +91 9876543210
            </p>
            <p className="mb-4">
              <strong>Email:</strong> info@keralix.com
            </p>
          </div>

          {/* Contact Form */}
          <div className="col-lg-6 col-md-12">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Send Us a Message</h2>
            <form className="form bg-white p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              {/* WhatsApp Number Field */}
              <div className="mb-4">
                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-2">WhatsApp Number</label>
                <input
                  type="text"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="form-control block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="Your WhatsApp Number"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  rows="4"
                  placeholder="Your Message"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
