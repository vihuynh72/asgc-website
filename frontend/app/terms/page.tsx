export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-600">
            Last updated: August 9, 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-blue-900 mb-2">Agreement to Terms</h2>
            <p className="text-blue-800">
              By accessing and using the ASGC website and services, you agree to be bound by these Terms of Service 
              and all applicable laws and regulations. If you do not agree with any of these terms, you are 
              prohibited from using this website.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Definitions</h2>
            
            <div className="bg-gray-50 border rounded-lg p-4 mb-4">
              <dl className="space-y-3">
                <div>
                  <dt className="font-semibold">ASGC</dt>
                  <dd className="text-gray-600 text-sm">
                    Associated Student Government Council of the University
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold">Services</dt>
                  <dd className="text-gray-600 text-sm">
                    All websites, applications, and digital services provided by ASGC
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold">User/You</dt>
                  <dd className="text-gray-600 text-sm">
                    Any individual accessing or using ASGC services
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold">Content</dt>
                  <dd className="text-gray-600 text-sm">
                    All information, data, text, images, and materials on the platform
                  </dd>
                </div>
              </dl>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Acceptable Use</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-green-900 mb-2">You May</h3>
                <ul className="text-green-800 text-sm space-y-1">
                  <li>• Access services for legitimate educational purposes</li>
                  <li>• Participate in student government activities</li>
                  <li>• Submit requests and applications as intended</li>
                  <li>• Share appropriate feedback and suggestions</li>
                  <li>• Use content for personal, non-commercial purposes</li>
                </ul>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-red-900 mb-2">You May Not</h3>
                <ul className="text-red-800 text-sm space-y-1">
                  <li>• Use services for illegal or unauthorized purposes</li>
                  <li>• Attempt to gain unauthorized access</li>
                  <li>• Upload malicious software or harmful content</li>
                  <li>• Harass, threaten, or abuse other users</li>
                  <li>• Violate any applicable laws or regulations</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Account Responsibilities</h2>
            
            <p className="mb-4">
              When you create an account with ASGC services, you are responsible for:
            </p>
            
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Providing accurate and complete information</li>
              <li>Maintaining the security of your account credentials</li>
              <li>Promptly updating your information when it changes</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
            </ul>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-900 mb-2">Account Eligibility</h3>
              <p className="text-yellow-800 text-sm">
                ASGC services are primarily intended for current students, faculty, and staff of the University. 
                Some services may be available to the general public. You must be at least 13 years old to create an account.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Content and Intellectual Property</h2>
            
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Our Content</h3>
                <p className="text-sm text-gray-600">
                  All content on ASGC services, including text, graphics, logos, and software, is owned by ASGC 
                  or the University and is protected by copyright and other intellectual property laws. You may 
                  view and download content for personal use but may not reproduce, distribute, or modify it 
                  without permission.
                </p>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Your Content</h3>
                <p className="text-sm text-gray-600">
                  When you submit content (such as applications, comments, or documents), you grant ASGC a 
                  non-exclusive right to use, process, and store such content for the purpose of providing services. 
                  You retain ownership of your content and are responsible for ensuring you have the right to share it.
                </p>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Copyright Infringement</h3>
                <p className="text-sm text-gray-600">
                  We respect intellectual property rights and expect users to do the same. If you believe content 
                  on our services infringes your copyright, please contact us with details of the alleged infringement.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Service Availability</h2>
            
            <p className="mb-4">
              We strive to maintain reliable service availability, but cannot guarantee uninterrupted access:
            </p>
            
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Services may be temporarily unavailable for maintenance or updates</li>
              <li>We may modify or discontinue services with reasonable notice</li>
              <li>Technical issues may occasionally affect service performance</li>
              <li>University policies may require temporary service restrictions</li>
            </ul>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">Service Updates</h3>
              <p className="text-blue-800 text-sm">
                We will provide advance notice of significant service changes through our website, 
                email notifications, or other appropriate channels.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Privacy and Data Protection</h2>
            
            <p className="mb-4">
              Your privacy is important to us. Our data collection and use practices are described in detail 
              in our <a href="/privacy" className="text-blue-600 underline">Privacy Policy</a>, which is 
              incorporated into these Terms of Service.
            </p>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-2">Key Privacy Points</h3>
              <ul className="text-green-800 text-sm space-y-1">
                <li>• We collect only necessary information for service provision</li>
                <li>• Your data is protected with appropriate security measures</li>
                <li>• We do not sell personal information to third parties</li>
                <li>• You have rights to access, correct, and delete your data</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Disclaimers and Limitations</h2>
            
            <div className="bg-gray-50 border rounded-lg p-4 mb-4">
              <h3 className="font-semibold mb-2">Service "As Is"</h3>
              <p className="text-sm text-gray-600">
                ASGC services are provided "as is" without warranties of any kind, either express or implied. 
                We do not warrant that services will be uninterrupted, error-free, or completely secure.
              </p>
            </div>
            
            <div className="bg-gray-50 border rounded-lg p-4 mb-4">
              <h3 className="font-semibold mb-2">Limitation of Liability</h3>
              <p className="text-sm text-gray-600">
                To the maximum extent permitted by law, ASGC shall not be liable for any indirect, incidental, 
                special, or consequential damages arising from your use of our services.
              </p>
            </div>
            
            <div className="bg-gray-50 border rounded-lg p-4">
              <h3 className="font-semibold mb-2">External Links</h3>
              <p className="text-sm text-gray-600">
                Our services may contain links to third-party websites. We are not responsible for the content, 
                privacy practices, or terms of use of external sites.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Enforcement and Violations</h2>
            
            <p className="mb-4">
              We reserve the right to take appropriate action in response to violations of these terms:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Warning System</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• First violation: Warning and education</li>
                  <li>• Repeated violations: Temporary suspension</li>
                  <li>• Serious violations: Account termination</li>
                  <li>• Illegal activity: Report to authorities</li>
                </ul>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Due Process</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Users will be notified of violations</li>
                  <li>• Opportunity to respond and appeal</li>
                  <li>• Fair and consistent enforcement</li>
                  <li>• Escalation to university processes when appropriate</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Governing Law and Disputes</h2>
            
            <p className="mb-4">
              These Terms of Service are governed by the laws of the state where the University is located. 
              Any disputes will be resolved through the following process:
            </p>
            
            <ol className="list-decimal pl-6 mb-4 space-y-2">
              <li>Direct communication with ASGC to resolve the issue informally</li>
              <li>Mediation through University dispute resolution services</li>
              <li>Binding arbitration if mediation is unsuccessful</li>
              <li>Legal action only for matters not suitable for arbitration</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
            
            <p className="mb-4">
              We may update these Terms of Service from time to time. When we make changes:
            </p>
            
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>We will update the "Last updated" date</li>
              <li>Significant changes will be communicated via email or website notice</li>
              <li>You will have 30 days to review changes before they take effect</li>
              <li>Continued use of services indicates acceptance of new terms</li>
            </ul>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-900 mb-2">Notification Methods</h3>
              <p className="text-yellow-800 text-sm">
                We will notify you of changes through email (if you have an account), prominent website notices, 
                and updates to this page. It is your responsibility to review terms periodically.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            
            <p className="mb-4">
              If you have questions about these Terms of Service, please contact us:
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">ASGC Legal Affairs</h3>
                  <p className="text-blue-800 text-sm">
                    Email: legal@asgc.university.edu<br/>
                    Phone: (555) 123-4567<br/>
                    Office: Student Union Building, Room 201
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Mailing Address</h3>
                  <p className="text-blue-800 text-sm">
                    ASGC Legal Department<br/>
                    123 University Avenue<br/>
                    Campus City, ST 12345
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Severability</h2>
            
            <p className="mb-4">
              If any provision of these Terms of Service is found to be unenforceable or invalid, 
              that provision will be limited or eliminated to the minimum extent necessary so that 
              the Terms of Service will otherwise remain in full force and effect.
            </p>
          </section>

          <div className="bg-gray-100 border rounded-lg p-4 text-center">
            <p className="text-sm text-gray-600">
              These Terms of Service constitute the entire agreement between you and ASGC regarding 
              the use of our services and supersede all prior agreements and understandings.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong>Effective Date:</strong> August 9, 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
