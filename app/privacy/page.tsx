import Header from '@/components/Header';

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-blue-900 text-white">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
                    <p className="text-xl opacity-95">
                        Your privacy is important to us at Kumar's Microscopic Dental Care
                    </p>
                </div>
            </section>

            <section className="py-16 px-6 sm:px-8 lg:px-12">
                <div className="max-w-4xl mx-auto">
                    <p className="text-gray-600 mb-8">
                        <strong>Last Updated:</strong> January 10, 2026
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
                    <p className="text-gray-700 mb-6">
                        Kumar's Microscopic Dental Care ("we," "us," or "our") operates dental clinics in Yelahanka, Bangalore,
                        specializing in microscopic dentistry, root canal treatment (RCT), dental implants, pediatric dentistry,
                        and comprehensive dental care. This Privacy Policy explains how we collect, use, and protect your personal
                        information when you visit our website or use our services.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Personal Information</h3>
                    <p className="text-gray-700 mb-4">When you book an appointment or contact us, we may collect:</p>
                    <ul className="list-disc pl-6 text-gray-700 mb-6">
                        <li>Full name</li>
                        <li>Phone number (10-digit mobile number)</li>
                        <li>Email address</li>
                        <li>Preferred appointment date and time</li>
                        <li>Dental service requirements (root canal, implants, pediatric care, etc.)</li>
                        <li>Medical history and dental records</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Automated Information</h3>
                    <p className="text-gray-700 mb-6">
                        We automatically collect certain information when you visit our website, including:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 mb-6">
                        <li>IP address and browser type</li>
                        <li>Device information</li>
                        <li>Pages visited and time spent</li>
                        <li>Referral source (how you found us)</li>
                        <li>Location data (Yelahanka, Bangalore area)</li>
                    </ul>

                    <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                    <p className="text-gray-700 mb-4">We use your information to:</p>
                    <ul className="list-disc pl-6 text-gray-700 mb-6">
                        <li>Schedule and confirm dental appointments via WhatsApp or SMS</li>
                        <li>Provide dental treatment and care (microscopic RCT, implants, pediatric dentistry)</li>
                        <li>Send appointment reminders and follow-ups</li>
                        <li>Process payments for dental services</li>
                        <li>Improve our dental services and patient experience</li>
                        <li>Communicate updates about our clinic, new services, or special offers</li>
                        <li>Comply with legal and regulatory requirements</li>
                    </ul>

                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Google Ads & Marketing</h2>
                    <p className="text-gray-700 mb-6">
                        We use Google Ads to promote our dental services in Yelahanka, Bangalore. Our advertising targets
                        potential patients searching for:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 mb-6">
                        <li><strong>Dental clinic near me</strong> - Yelahanka, Bangalore</li>
                        <li><strong>Best dentist in Yelahanka</strong>, Bangalore</li>
                        <li><strong>Microscopic root canal treatment</strong> (RCT) Bangalore</li>
                        <li><strong>Dental implants Yelahanka</strong></li>
                        <li><strong>Pediatric dentist near me</strong>, child dental care</li>
                        <li><strong>Emergency dental care Bangalore</strong></li>
                        <li><strong>Painless root canal treatment</strong></li>
                        <li><strong>Kids dental clinic Yelahanka</strong></li>
                        <li><strong>Advanced dental care Bangalore</strong></li>
                        <li><strong>Microscopic dentistry near me</strong></li>
                    </ul>
                    <p className="text-gray-700 mb-6">
                        Google may use cookies and similar technologies to show you relevant ads based on your browsing behavior.
                        You can opt out of personalized advertising by visiting{' '}
                        <a href="https://adssettings.google.com" className="text-red-600 underline" target="_blank" rel="noopener noreferrer">
                            Google Ads Settings
                        </a>.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Cookies & Tracking</h2>
                    <p className="text-gray-700 mb-6">
                        Our website uses cookies to enhance your experience and analyze site traffic. Cookies help us understand
                        which dental services are most popular and how patients find our clinic in Yelahanka.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
                    <p className="text-gray-700 mb-4">We may share your information with:</p>
                    <ul className="list-disc pl-6 text-gray-700 mb-6">
                        <li><strong>WhatsApp:</strong> For appointment confirmations and patient communication</li>
                        <li><strong>Google Analytics:</strong> To understand website traffic and patient behavior</li>
                        <li><strong>Google Ads:</strong> For targeted advertising to potential dental patients</li>
                        <li><strong>Payment Processors:</strong> To securely process dental service payments</li>
                    </ul>

                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Security</h2>
                    <p className="text-gray-700 mb-6">
                        We implement industry-standard security measures to protect your personal and medical information.
                        Your dental records are stored securely and accessed only by authorized staff.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Rights</h2>
                    <p className="text-gray-700 mb-4">You have the right to:</p>
                    <ul className="list-disc pl-6 text-gray-700 mb-6">
                        <li>Access your personal and dental information</li>
                        <li>Request corrections to your data</li>
                        <li>Opt out of marketing communications</li>
                        <li>Request deletion of your information (subject to legal requirements)</li>
                    </ul>

                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
                    <p className="text-gray-700 mb-6">
                        If you have questions about this Privacy Policy or your personal information, please contact:
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg mb-8">
                        <p className="text-gray-900 font-bold mb-2">Kumar's Microscopic Dental Care</p>
                        <p className="text-gray-700">No.12, 1st Floor, Attur Main Road</p>
                        <p className="text-gray-700">Yelahanka New Town, Bangalore - 560064</p>
                        <p className="text-gray-700 mt-2">
                            <strong>Phone:</strong>{' '}
                            <a href="tel:+918197280019" className="text-red-600">+91 81972 80019</a>
                        </p>
                        <p className="text-gray-700">
                            <strong>Email:</strong>{' '}
                            <a href="mailto:info@kumarsdental.com" className="text-red-600">info@kumarsdental.com</a>
                        </p>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
                    <p className="text-gray-700 mb-12">
                        We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated
                        "Last Updated" date.
                    </p>
                </div>
            </section>

            <footer className="bg-gray-900 text-white py-8 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <p>&copy; 2026 Kumar's Microscopic Dental Care. All rights reserved.</p>
                    <p className="text-sm text-gray-400 mt-2">
                        Best Dental Clinic in Yelahanka, Bangalore | Microscopic RCT | Dental Implants | Pediatric Dentistry
                    </p>
                </div>
            </footer>
        </div>
    );
}
