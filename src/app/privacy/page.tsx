import { Metadata } from 'next';
import StaticNavigation from "../components/StaticNavigation";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy - Hoyst",
  description: "Learn how Hoyst protects your privacy and handles your data when using our Notion-to-blog platform.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <StaticNavigation />
      <main className="pt-24 pb-16 bg-white min-h-screen">
        <div className="container mx-auto max-w-4xl px-4">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to Hoyst ("we," "our," or "us"). We are committed to protecting your privacy and handling your data in an open and transparent manner. This Privacy Policy explains how we collect, use, store, and protect your information when you use our service that transforms your Notion databases into beautiful, SEO-optimized blogs.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using our service, you agree to the collection and use of information in accordance with this Privacy Policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Information We Collect
              </h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                2.1 Information You Provide
              </h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Email Address:</strong> When you join our waitlist or sign up for our service</li>
                <li><strong>Account Information:</strong> Name, email, and other account details when you create an account</li>
                <li><strong>Notion Integration Data:</strong> Content from your Notion databases that you choose to publish through our service</li>
                <li><strong>Payment Information:</strong> Billing details when you subscribe to our paid plans (processed securely through our payment providers)</li>
                <li><strong>Custom Domain Information:</strong> Domain names you connect to your blog</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">
                2.2 Information Automatically Collected
              </h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Usage Data:</strong> How you interact with our service, including pages visited, features used, and time spent</li>
                <li><strong>Device Information:</strong> IP address, browser type, device type, and operating system</li>
                <li><strong>Performance Data:</strong> Website load times, error logs, and other technical metrics to improve our service</li>
                <li><strong>Cookies and Tracking:</strong> We use cookies to enhance your experience and analyze usage patterns</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">
                2.3 Third-Party Data
              </h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Notion API Data:</strong> Content from your Notion workspace that you authorize us to access</li>
                <li><strong>Comments:</strong> Comments left by your blog readers, which we sync back to your Notion database</li>
                <li><strong>Analytics:</strong> Website traffic data from your published blog</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect to provide, maintain, and improve our service:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Service Delivery:</strong> Transform your Notion content into published blog posts</li>
                <li><strong>Account Management:</strong> Create and manage your account, process payments, and provide customer support</li>
                <li><strong>Communication:</strong> Send you service updates, security alerts, and promotional materials (you can opt out anytime)</li>
                <li><strong>Performance Optimization:</strong> Ensure fast loading times and optimize your blog's SEO</li>
                <li><strong>Analytics:</strong> Understand how our service is used to improve features and user experience</li>
                <li><strong>Security:</strong> Protect against fraud, abuse, and security threats</li>
                <li><strong>Compliance:</strong> Meet legal obligations and enforce our terms of service</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Data Sharing and Disclosure
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to outside parties, except in the following circumstances:
              </p>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                4.1 Service Providers
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share your information with trusted third-party service providers who assist us in operating our service:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Hosting and Infrastructure:</strong> Cloud hosting providers for reliable service delivery</li>
                <li><strong>Payment Processing:</strong> Secure payment processors for subscription billing</li>
                <li><strong>Email Services:</strong> Email providers for service communications</li>
                <li><strong>Analytics:</strong> Analytics providers to understand service usage</li>
                <li><strong>CDN Services:</strong> Content delivery networks to ensure fast blog loading</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">
                4.2 Legal Requirements
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may disclose your information if required by law, court order, or government request, or to protect our rights, property, or safety.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">
                4.3 Business Transfers
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Data Security
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal information:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Encryption:</strong> All data is encrypted in transit and at rest</li>
                <li><strong>Access Controls:</strong> Limited access to personal information on a need-to-know basis</li>
                <li><strong>Regular Security Audits:</strong> Ongoing monitoring and assessment of our security practices</li>
                <li><strong>Secure Infrastructure:</strong> Industry-standard security protocols and practices</li>
                <li><strong>Incident Response:</strong> Procedures to respond to potential security breaches</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Your Rights and Choices
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Restrict Processing:</strong> Request limitation of how we process your information</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                To exercise these rights, please contact us using the information provided in the "Contact Us" section.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Data Retention
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We retain your personal information only for as long as necessary to provide our service and fulfill the purposes outlined in this Privacy Policy:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Account Data:</strong> Retained while your account is active and for a reasonable period after deletion</li>
                <li><strong>Content Data:</strong> Retained as long as you choose to publish it through our service</li>
                <li><strong>Usage Data:</strong> Typically retained for 1-2 years for analytics and service improvement</li>
                <li><strong>Legal Requirements:</strong> Some data may be retained longer to comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibent text-gray-900 mb-4">
                8. International Data Transfers
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your personal information in accordance with applicable data protection laws.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Children's Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Posting the new Privacy Policy on this page</li>
                <li>Updating the "Last updated" date</li>
                <li>Sending you an email notification for significant changes</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Your continued use of our service after any changes constitutes acceptance of the new Privacy Policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                11. Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> contact@hoyst.co
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Website:</strong> https://hoyst.co
                </p>
                <p className="text-gray-700">
                  <strong>Response Time:</strong> We aim to respond to all privacy-related inquiries within 72 hours.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 