import { Metadata } from 'next';
import StaticNavigation from "../components/StaticNavigation";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service - Hoyst",
  description: "Terms of service and user agreement for Hoyst, the Notion-to-blog platform.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfService() {
  return (
    <>
      <StaticNavigation />
      <main className="pt-24 pb-16 bg-white min-h-screen">
        <div className="container mx-auto max-w-4xl px-4">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Terms of Service
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
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing or using Hoyst ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, then you may not access the Service.
              </p>
              <p className="text-gray-700 leading-relaxed">
                These Terms apply to all visitors, users, and others who access or use the Service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Description of Service
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Hoyst is a platform that transforms your Notion databases into beautiful, SEO-optimized blogs. Our Service includes:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Converting Notion database content into published blog posts</li>
                <li>Providing customizable blog themes and designs</li>
                <li>Optimizing content for search engines</li>
                <li>Synchronizing comments and engagement data back to Notion</li>
                <li>Offering custom domain hosting and SSL certificates</li>
                <li>Providing content delivery network (CDN) services</li>
                <li>Analytics and performance monitoring</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. User Accounts
              </h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                3.1 Account Creation
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You must provide accurate and complete information when creating your account. You are responsible for maintaining the security of your account and password.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">
                3.2 Account Responsibility
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You are responsible for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">
                3.3 Account Termination
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                You may terminate your account at any time. We may terminate or suspend your account immediately if you breach these Terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. User Content
              </h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                4.1 Content Ownership
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You retain all rights to the content you publish through our Service. You are solely responsible for the content you create, upload, or publish.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">
                4.2 Content License
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                By using our Service, you grant us a non-exclusive, worldwide license to use, copy, modify, and distribute your content solely for the purpose of providing the Service.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">
                4.3 Content Guidelines
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree not to use our Service to publish content that:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Violates any applicable laws or regulations</li>
                <li>Infringes on intellectual property rights</li>
                <li>Contains malicious code or viruses</li>
                <li>Promotes violence, hate speech, or discrimination</li>
                <li>Contains spam, excessive advertising, or misleading information</li>
                <li>Violates the privacy rights of others</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Payment and Billing
              </h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                5.1 Subscription Plans
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We offer various subscription plans with different features and pricing. All fees are in USD and are non-refundable unless otherwise specified.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">
                5.2 Billing
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Subscription fees are billed in advance on a monthly or annual basis. We will automatically charge your payment method on each billing cycle.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">
                5.3 Price Changes
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may modify subscription fees at any time. We will provide at least 30 days' notice of any price changes.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">
                5.4 Refund Policy
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We offer a 30-day money-back guarantee for new subscribers. Refunds will be processed within 5-10 business days.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Notion Integration
              </h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                6.1 Third-Party Services
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Service integrates with Notion through their official API. You must comply with Notion's terms of service when using their platform in conjunction with our Service.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">
                6.2 Data Synchronization
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We synchronize content and engagement data between your blog and Notion database. You are responsible for ensuring you have the necessary permissions to share this data.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">
                6.3 API Limitations
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our Service is subject to Notion's API rate limits and availability. We are not liable for any disruptions caused by third-party service limitations.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Prohibited Uses
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may not use our Service:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>To violate any international, federal, provincial, or state regulations or laws</li>
                <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
                <li>To upload or transmit viruses or any other type of malicious code</li>
                <li>To collect or track the personal information of others</li>
                <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                <li>For any obscene or immoral purpose</li>
                <li>To interfere with or circumvent the security features of our Service</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Intellectual Property
              </h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                8.1 Service Ownership
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Service and its original content, features, and functionality are and will remain the exclusive property of Hoyst and its licensors.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">
                8.2 Trademarks
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Hoyst and related marks are trademarks of Hoyst. You may not use these marks without our prior written consent.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">
                8.3 Copyright
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We respect the intellectual property rights of others. If you believe that your work has been copied in a way that constitutes copyright infringement, please contact us immediately.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Privacy and Data Protection
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                By using our Service, you agree to the collection and use of information in accordance with our Privacy Policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Disclaimers
              </h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                10.1 Service Availability
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We strive to provide reliable service but do not guarantee 100% uptime. The Service is provided "as is" and "as available."
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">
                10.2 No Warranties
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We disclaim all warranties, whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">
                10.3 Third-Party Content
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We are not responsible for the content, accuracy, or opinions expressed in user-generated content or third-party websites linked from our Service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                11. Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In no event shall Hoyst, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our total liability to you for all damages, losses, and causes of action shall not exceed the amount you paid to us in the twelve (12) months preceding the claim.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                12. Indemnification
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                You agree to defend, indemnify, and hold harmless Hoyst and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees).
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                13. Termination
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Upon termination, your right to use the Service will cease immediately. If you wish to terminate your account, you may simply discontinue using the Service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                14. Governing Law
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                These Terms shall be interpreted and governed by the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved in the courts of Delaware.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                15. Changes to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                16. Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> contact@hoyst.co
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Website:</strong> https://hoyst.co
                </p>
                <p className="text-gray-700">
                  <strong>Response Time:</strong> We aim to respond to all legal inquiries within 5 business days.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                17. Entire Agreement
              </h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms constitute the entire agreement between you and Hoyst regarding the use of the Service, superseding any prior agreements between you and Hoyst relating to your use of the Service.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 