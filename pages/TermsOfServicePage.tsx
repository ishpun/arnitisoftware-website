import React from 'react';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
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
              These Terms of Service ("Agreement") constitute a legally binding agreement between you ("User," "you," or "your") and Arniti Software ("Company," "we," "us," or "our"). By accessing and using our website, software solutions, and services, you agree to be bound by all terms and conditions outlined in this Agreement.
            </p>
            <p className="leading-relaxed mt-4">
              If you do not agree with any part of these Terms of Service, you must immediately discontinue use of our services and website.
            </p>
          </section>

          {/* 1. Use License */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Use License</h2>
            <p className="leading-relaxed mb-4">
              Arniti Software grants you a limited, non-exclusive, non-transferable, and revocable license to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Access and use our website for lawful purposes only</li>
              <li>Use our software solutions in accordance with the terms of your service agreement</li>
              <li>Download and print materials for personal or internal business use</li>
            </ul>
            <p className="leading-relaxed">
              This license does not include the right to: modify, reproduce, distribute, transmit, display, perform, translate, or create derivative works from any content without explicit written permission from Arniti Software.
            </p>
          </section>

          {/* 2. Acceptable Use Policy */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Acceptable Use Policy</h2>
            <p className="leading-relaxed mb-4">
              You agree not to use our services for any unlawful or prohibited purposes, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Violating any applicable laws, regulations, or industry standards</li>
              <li>Harassing, threatening, or defaming others</li>
              <li>Transmitting malware, viruses, or harmful code</li>
              <li>Attempting to gain unauthorized access to our systems or services</li>
              <li>Interfering with the proper functioning of our infrastructure</li>
              <li>Reverse engineering, decompiling, or attempting to discover source code</li>
              <li>Removing or altering copyright, trademark, or proprietary notices</li>
              <li>Using our services for competitive intelligence or benchmarking</li>
              <li>Reselling, renting, or leasing our services without authorization</li>
              <li>Violating intellectual property rights of Arniti Software or third parties</li>
            </ul>
          </section>

          {/* 3. User Accounts and Credentials */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts and Credentials</h2>
            <p className="leading-relaxed mb-4">
              If you create an account with Arniti Software, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain the confidentiality of your login credentials</li>
              <li>Take responsibility for all activities conducted under your account</li>
              <li>Notify us immediately of any unauthorized access or use</li>
              <li>Maintain a strong password and update it regularly</li>
            </ul>
            <p className="leading-relaxed mt-4">
              Arniti Software is not responsible for unauthorized account access due to your failure to maintain credential security.
            </p>
          </section>

          {/* 4. Intellectual Property Rights */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property Rights</h2>
            <p className="leading-relaxed mb-4">
              All content on our website and within our software solutions, including text, graphics, logos, images, code, and software, is the exclusive property of Arniti Software or its content suppliers and is protected by international copyright and intellectual property laws.
            </p>
            <p className="leading-relaxed">
              You may not use any of this content without explicit written permission from Arniti Software. Any unauthorized reproduction, distribution, or transmission of copyrighted material is strictly prohibited.
            </p>
          </section>

          {/* 5. User-Generated Content */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. User-Generated Content</h2>
            <p className="leading-relaxed mb-4">
              If you submit, upload, or transmit any content ("User Content") through our services, you represent and warrant that:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>You own or have rights to all User Content</li>
              <li>User Content does not violate third-party intellectual property rights</li>
              <li>User Content complies with applicable laws and these Terms</li>
              <li>User Content is not defamatory, obscene, or harmful</li>
            </ul>
            <p className="leading-relaxed">
              By submitting User Content, you grant Arniti Software a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and distribute such content for service improvement and business purposes.
            </p>
          </section>

          {/* 6. Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
            <p className="leading-relaxed mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, ARNITI SOFTWARE SHALL NOT BE LIABLE FOR:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Any indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of profits, revenue, data, or business opportunity</li>
              <li>Business interruption or service downtime</li>
              <li>Damages arising from unauthorized access to or alteration of your data</li>
              <li>Third-party claims related to your use of our services</li>
            </ul>
            <p className="leading-relaxed">
              Our total cumulative liability shall not exceed the amount paid by you in the 12 months preceding the claim or $100 USD, whichever is greater.
            </p>
          </section>

          {/* 7. Disclaimer of Warranties */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Disclaimer of Warranties</h2>
            <p className="leading-relaxed mb-4">
              OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Implied warranties of merchantability or fitness for a particular purpose</li>
              <li>Warranties regarding uninterrupted, error-free, or secure service</li>
              <li>Warranties that defects will be corrected or that services will meet your requirements</li>
            </ul>
          </section>

          {/* 8. Indemnification */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Indemnification</h2>
            <p className="leading-relaxed">
              You agree to indemnify, defend, and hold harmless Arniti Software and its officers, directors, employees, and agents from any claims, damages, liabilities, costs, or expenses (including legal fees) arising from or related to: (a) your use of our services, (b) any violation of these Terms of Service, (c) any violation of applicable laws, or (d) infringement of third-party rights resulting from User Content you provided.
            </p>
          </section>

          {/* 9. Service Modifications and Downtime */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Service Modifications and Downtime</h2>
            <p className="leading-relaxed mb-4">
              Arniti Software reserves the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Modify, suspend, or discontinue services with or without notice</li>
              <li>Perform maintenance, upgrades, or updates that may cause temporary downtime</li>
              <li>Impose usage limits, rate restrictions, or feature limitations</li>
            </ul>
            <p className="leading-relaxed">
              We will make reasonable efforts to minimize disruption and provide advance notice when practicable.
            </p>
          </section>

          {/* 10. Payment Terms */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Payment Terms</h2>
            <p className="leading-relaxed mb-4">
              For paid services, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Pay all fees according to the pricing and billing schedule provided</li>
              <li>Maintain current and accurate payment information</li>
              <li>Pay any applicable taxes in addition to service fees</li>
              <li>Accept that fees may increase with written notice</li>
            </ul>
            <p className="leading-relaxed">
              Invoices are non-refundable except as required by law. Arniti Software may suspend services for non-payment.
            </p>
          </section>

          {/* 11. Termination */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Termination</h2>
            <p className="leading-relaxed mb-4">
              Either party may terminate this Agreement at any time by providing written notice. Arniti Software may terminate or suspend your account immediately if you violate these Terms of Service or engage in prohibited activities.
            </p>
            <p className="leading-relaxed">
              Upon termination, your right to access and use our services immediately ceases. Sections regarding intellectual property, limitation of liability, and indemnification survive termination.
            </p>
          </section>

          {/* 12. Governing Law and Jurisdiction */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Governing Law and Jurisdiction</h2>
            <p className="leading-relaxed">
              These Terms of Service are governed by and construed in accordance with applicable international law. Any disputes arising from these Terms or your use of our services shall be subject to binding arbitration or the courts of applicable jurisdiction, as determined by your service agreement.
            </p>
          </section>

          {/* 13. Dispute Resolution */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. Dispute Resolution</h2>
            <p className="leading-relaxed mb-4">
              Before initiating legal proceedings, you agree to attempt resolution through:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Good faith negotiation between parties</li>
              <li>Mediation with a neutral third party</li>
            </ul>
            <p className="leading-relaxed">
              If resolution cannot be achieved, disputes shall be resolved through binding arbitration rather than litigation in court.
            </p>
          </section>

          {/* 14. Third-Party Services and Links */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">14. Third-Party Services and Links</h2>
            <p className="leading-relaxed">
              Our website and services may contain links to third-party websites, services, and integrations. Arniti Software is not responsible for the content, accuracy, policies, or practices of third-party services. Your use of third-party services is governed by their own terms and privacy policies.
            </p>
          </section>

          {/* 15. Security and Data Protection */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">15. Security and Data Protection</h2>
            <p className="leading-relaxed mb-4">
              While Arniti Software implements industry-standard security measures, we cannot guarantee absolute security. You are responsible for:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Protecting your login credentials and account information</li>
              <li>Maintaining adequate backups of your data</li>
              <li>Complying with applicable data protection regulations</li>
            </ul>
          </section>

          {/* 16. Changes to Terms */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">16. Changes to Terms of Service</h2>
            <p className="leading-relaxed">
              Arniti Software reserves the right to modify these Terms of Service at any time. Changes become effective when posted to our website. Continued use of our services after changes constitutes your acceptance of the updated Terms. We encourage you to review this page periodically for updates.
            </p>
          </section>

          {/* 17. Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">17. Contact Information</h2>
            <p className="leading-relaxed mb-4">
              If you have questions or concerns about these Terms of Service, please contact us:
            </p>
            <div className="bg-slate-800 rounded-lg p-6 space-y-3">
              <p>
                <strong>Arniti Software</strong>
              </p>
              <p>
                Email: <a href="mailto:legal@arnitisoftware.com" className="text-blue-400 hover:text-blue-300">legal@arnitisoftware.com</a>
              </p>
              <p>
                Website: <a href="https://www.arnitisoftware.com" className="text-blue-400 hover:text-blue-300">www.arnitisoftware.com</a>
              </p>
              <p className="text-sm text-slate-400">
                We will respond to your inquiry within 30 business days.
              </p>
            </div>
          </section>

          {/* Acknowledgment */}
          <section className="bg-blue-900 bg-opacity-30 rounded-lg p-6 border border-blue-700">
            <p className="text-center text-sm leading-relaxed">
              By accessing and using Arniti Software's services and website, you acknowledge that you have read, understood, and agree to be bound by all terms and conditions contained in this Terms of Service agreement.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
