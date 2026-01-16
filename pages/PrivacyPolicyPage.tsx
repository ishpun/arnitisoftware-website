import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-blue-100 text-lg">
            Last updated: January 2026
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12 text-slate-300">
          
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
            <p className="leading-relaxed">
              Arniti Software ("we," "us," "our," or "Company") is committed to protecting your privacy and ensuring you have a positive experience on our website and when using our services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and utilize our software solutions.
            </p>
            <p className="leading-relaxed mt-4">
              Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Personal Information</h3>
                <p className="leading-relaxed">
                  We may collect personal information that you voluntarily provide to us, including:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li>Name and contact information (email, phone number, mailing address)</li>
                  <li>Company name and industry information</li>
                  <li>Account credentials and authentication information</li>
                  <li>Payment and billing information</li>
                  <li>Communication preferences</li>
                  <li>Any information you provide in support requests or inquiries</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Automatic Information</h3>
                <p className="leading-relaxed">
                  When you access our website or services, we automatically collect certain technical information:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li>IP address and device identifier</li>
                  <li>Browser type and operating system</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring and exit pages</li>
                  <li>Click stream data and interaction patterns</li>
                  <li>Location data (with your consent)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Cookies and Tracking Technologies</h3>
                <p className="leading-relaxed">
                  We use cookies, web beacons, and similar tracking technologies to enhance your experience, remember preferences, and analyze site usage patterns. You can control cookie settings through your browser.
                </p>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p className="leading-relaxed mb-4">
              Arniti Software uses the collected information for various purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Providing and improving our software solutions and services</li>
              <li>Processing transactions and sending related information</li>
              <li>Sending transactional and promotional emails</li>
              <li>Responding to your inquiries and providing customer support</li>
              <li>Analyzing usage patterns to enhance our offerings</li>
              <li>Compliance with legal obligations and enforcing agreements</li>
              <li>Detecting and preventing fraud and security incidents</li>
              <li>Personalizing your experience and content recommendations</li>
            </ul>
          </section>

          {/* Data Sharing and Disclosure */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Data Sharing and Disclosure</h2>
            <p className="leading-relaxed mb-4">
              We do not sell your personal information to third parties. However, we may share your information in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>With service providers who assist us in operating our website and delivering services</li>
              <li>With business partners, only when necessary and with your consent</li>
              <li>When required by law, court order, or legal process</li>
              <li>To enforce our Terms of Service and other agreements</li>
              <li>To protect the safety, rights, and property of Arniti Software, our users, or the public</li>
              <li>In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
            <p className="leading-relaxed">
              We implement appropriate technical, administrative, and physical security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Retention</h2>
            <p className="leading-relaxed">
              We retain your personal information for as long as necessary to provide our services, fulfill the purposes outlined in this Privacy Policy, and comply with legal obligations. You may request deletion of your information at any time, subject to legal and contractual requirements.
            </p>
          </section>

          {/* Your Rights and Choices */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights and Choices</h2>
            <p className="leading-relaxed mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Right to access and review your personal information</li>
              <li>Right to correct inaccurate or incomplete information</li>
              <li>Right to request deletion of your information</li>
              <li>Right to opt-out of marketing communications</li>
              <li>Right to data portability</li>
              <li>Right to withdraw consent at any time</li>
            </ul>
            <p className="leading-relaxed mt-4">
              To exercise these rights, please contact us at privacy@arnitisoftware.com with details of your request.
            </p>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Third-Party Links</h2>
            <p className="leading-relaxed">
              Our website may contain links to third-party websites and services. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Children's Privacy</h2>
            <p className="leading-relaxed">
              Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected information from a child under 13, we will take steps to delete such information and terminate the child's account.
            </p>
          </section>

          {/* Policy Updates */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Changes to This Privacy Policy</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of significant changes by posting the updated policy on our website with a revised "Last Updated" date. Your continued use of our services constitutes your acceptance of the updated Privacy Policy.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
            <p className="leading-relaxed mb-4">
              If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-slate-800 rounded-lg p-6 space-y-3">
              <p>
                <strong>Arniti Software</strong>
              </p>
              <p>
                Email: <a href="mailto:privacy@arnitisoftware.com" className="text-blue-400 hover:text-blue-300">privacy@arnitisoftware.com</a>
              </p>
              <p>
                Website: <a href="https://www.arnitisoftware.com" className="text-blue-400 hover:text-blue-300">www.arnitisoftware.com</a>
              </p>
              <p className="text-sm text-slate-400">
                We will respond to your request within 30 business days.
              </p>
            </div>
          </section>

          {/* Acknowledgment */}
          <section className="bg-blue-900 bg-opacity-30 rounded-lg p-6 border border-blue-700">
            <p className="text-center text-sm leading-relaxed">
              By using our website and services, you acknowledge that you have read and understood this Privacy Policy and agree to be bound by its terms and conditions.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
