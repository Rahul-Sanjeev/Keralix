import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/PrivacyPolicy.css'

export default function PrivacyPolicy() {

    const navigate = useNavigate();

    useEffect(() => {
        // This will navigate to the Privacy Policy route when the component mounts
        navigate('/privacypolicy');
    }, [navigate]);


    return (
        <>
            <div className="container-fluid privacy-policy">
                <h1>Privacy Policy for Keralix Pvt. Ltd.</h1>
                <p><strong>Effective Date:</strong> 12-12-2024 </p>
                <br />
                <h2>Welcome</h2>
                <p>
                    Welcome to Keralix!&nbsp; At Keralix Pvt. Ltd., we are committed to protecting your privacy.
                    This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website
                    <a href='#'> www.keralix.com</a>  and purchase our traditional and natural hair oils, creams, and lotions.
                </p>
                <br />
                <h2>Information We Collect</h2>
                <p>We may collect the following types of information:</p>
                <ul>
                    <li><strong>Personal Information:</strong> This includes your name, email address, phone number, billing address, and shipping address, which you provide when you create an account or make a purchase.</li>
                    <li><strong>Payment Information:</strong> We do not store your payment information. All transactions are processed through secure payment gateways.</li>
                    <li><strong>Usage Data:</strong> We collect information about how you use our website, including your IP address, browser type, access times, and pages viewed.</li>
                    <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to enhance your experience on our site. You can manage cookie preferences through your browser settings.</li>
                </ul>

                <br />

                <h2>How We Use Your Information</h2>
                <p>We may use the information we collect in the following ways:</p>
                <ul>
                    <li>To process and fulfill your orders.</li>
                    <li>To communicate with you about your account or orders.</li>
                    <li>To improve our website, products, and services.</li>
                    <li>To send you promotional materials and updates (you can opt-out at any time).</li>
                    <li>To comply with legal obligations.</li>
                </ul>

                <br />

                <h2>Disclosure of Your Information</h2>
                <p>We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:</p>
                <ul>
                    <li><strong>Service Providers:</strong> We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you.</li>
                    <li><strong>Legal Compliance:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
                </ul>

                <br />

                <h2>Data Security</h2>
                <p>
                    We take appropriate security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or method of electronic storage is 100% secure.
                </p>

                <br />

                <h2> Your Rights</h2>
                <p>As a user, you have the right to:</p>
                <ul>
                    <li>Access and update your personal information.</li>
                    <li>Request the deletion of your personal data.</li>
                    <li>Withdraw consent for us to process your data (where applicable).</li>
                </ul>

                <br />

                <h2>Changes to This Privacy Policy</h2>
                <p>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page with a new effective date. We encourage you to review this Privacy Policy periodically for any changes.
                </p>

                <br />

                <h2>Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <ul>
                    <li><strong>Email:</strong><a href='#'> keralix@gmail.com</a></li>
                    <li><strong>Phone:</strong> <a href='#'>1234567890</a></li>
                    <li><strong>Address:</strong> Keralix Pvt. Ltd., [insert your physical address], Kerala, India.</li>
                </ul>
            </div>
        </>
    )
}
