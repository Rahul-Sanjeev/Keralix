import React from 'react'
import '../styles/Footer.css'

import KeralixLogo from '../assets/images/KeralixLogo.svg';
import { Link } from 'react-router-dom';

export default function Footer() {

  const PrivacyPolicyPath = "/privacypolicy"
  const HomePath = "/"
  const AboutPath = "/about"
  const ProductsPath = "/products"
  const ContactPath = "/contact"

  return (
    <>
      <div className="container-fluid">
        <div className='row'>
          <footer className="footer-container">

            <div className="row">
              {/* Left Section with Logo and Description */}
              <div className="col-12 col-sm-6 col-md-3 text-md-start d-flex justify-content-center align-items-center">
                <div className='footer-logo'>
                  <img src={KeralixLogo} alt="Keralix Logo" />
                  <p><em>Rooted With Tradition</em></p>
                  <h4>KERALIX PVT. LTD.</h4>

                  <br />
                </div>
              </div>

              {/* Center Section - Links */}
              <div className="col-12 col-sm-6 col-md-3 my-3 d-flex flex-column text-center align-items-center">
                <h5>P R E S E T S</h5>
                <ul className="list-unstyled text-center">
                  <li><Link to={HomePath}>Home</Link></li>
                  <li><Link to={ProductsPath}>Products</Link></li>
                  <li><Link to={AboutPath}>About</Link></li>
                  <li><Link to={ContactPath}>Contact</Link></li>
                </ul>
              </div>

              {/* Right Section - Shop Links */}
              <div className="col-12 col-sm-6 col-md-3 my-3 d-flex flex-column text-center align-items-center">
                <h5>S H O P</h5>
                <ul className="list-unstyled text-center">
                  <li><Link to={''}>Shipping & Returns</Link></li>
                  <li><Link to={''}>Track Orders</Link></li>
                  <li><Link to={PrivacyPolicyPath}>Privacy Policy</Link></li>
                </ul>
              </div>

              {/* Email Signup Section */}
              <div className="footer-logo col-12 col-sm-6 col-md-3 my-3 d-flex flex-column text-center align-items-center">
                <h5>Get Active <em>Updates</em></h5>
                <p>
                  The ideal way to stay in contact and learn about our exclusive offers.
                </p>
                <form>
                  <input type="email" className="form-control my-3 mb-2" placeholder="Your Email Id" />
                  <button className="btn btn-dark w-100" type="submit">SUBMIT NOW</button>
                </form>
              </div>
            </div>

            {/* Social Icons Section */}
            <div className="row social-icons text-center my-3">
              <div className="col">
                <h5>S O C I A L S</h5>
                <Link to={''} className="mr-3"><i className="fa-brands fa-instagram"></i></Link>
                <Link to={''} className="mr-3"><i className="fa-brands fa-x-twitter"></i></Link>
                <Link to={''} className="mr-3"><i className="fa-brands fa-facebook-f"></i></Link>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="row footer-bottom text-center mt-4">
              <div className="col">
                <p>© 2024 Keralix. All Rights Reserved.</p>
                <p>Designed and Developed by Rahul Sanjeev.</p>
              </div>
            </div>

          </footer>
        </div>
      </div>

    </>
  )
}
