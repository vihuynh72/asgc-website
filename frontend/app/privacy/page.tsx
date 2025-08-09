export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            Last updated: August 9, 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-blue-900 mb-2">Your Privacy Matters</h2>
            <p className="text-blue-800">
              The Associated Student Government Council (ASGC) is committed to protecting your privacy and 
              being transparent about how we collect, use, and share your information.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-3">Information You Provide</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Contact information (name, email, phone number, student ID)</li>
              <li>Account credentials for accessing our services</li>
              <li>Information submitted through forms (funding requests, complaints, suggestions)</li>
              <li>Communication with ASGC staff and representatives</li>
              <li>Event registration and participation data</li>
              <li>Voting and election participation records</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Information Automatically Collected</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Website usage data (pages visited, time spent, clicks)</li>
              <li>Device information (browser type, operating system, IP address)</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Log files and error reports</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Service Delivery</h3>
                <ul className="text-green-800 text-sm space-y-1">
                  <li>• Process funding requests and applications</li>
                  <li>• Facilitate elections and voting</li>
                  <li>• Provide event registration and management</li>
                  <li>• Respond to inquiries and support requests</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Communication</h3>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• Send important announcements and updates</li>
                  <li>• Notify about elections and meetings</li>
                  <li>• Share funding opportunities and deadlines</li>
                  <li>• Provide newsletters and information</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">When We Share Information</h3>
              <p className="text-yellow-800 text-sm mb-2">
                We may share your information in the following circumstances:
              </p>
              <ul className="text-yellow-800 text-sm space-y-1">
                <li>• With university administration as required for student government operations</li>
                <li>• With third-party service providers who assist in our operations</li>
                <li>• When required by law or university policy</li>
                <li>• With your explicit consent</li>
                <li>• In anonymized form for research or reporting purposes</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-red-900 mb-2">What We Don't Share</h3>
              <ul className="text-red-800 text-sm space-y-1">
                <li>• Personal information for commercial purposes</li>
                <li>• Voting records or election preferences</li>
                <li>• Private communications without consent</li>
                <li>• Information to unauthorized third parties</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Access & Correction</h3>
                <p className="text-sm text-gray-600">
                  You can request access to your personal information and request corrections to inaccurate data.
                </p>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Data Portability</h3>
                <p className="text-sm text-gray-600">
                  You can request a copy of your data in a machine-readable format.
                </p>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Deletion</h3>
                <p className="text-sm text-gray-600">
                  You can request deletion of your personal information, subject to legal requirements.
                </p>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Opt-Out</h3>
                <p className="text-sm text-gray-600">
                  You can opt out of non-essential communications and data collection.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            
            <p className="mb-4">
              We implement appropriate technical and organizational measures to protect your personal information:
            </p>
            
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and user authentication</li>
              <li>Staff training on data protection practices</li>
              <li>Incident response and breach notification procedures</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Cookies and Tracking</h2>
            
            <div className="bg-gray-50 border rounded-lg p-4 mb-4">
              <h3 className="font-semibold mb-2">Types of Cookies We Use</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <strong>Essential Cookies:</strong> Required for basic website functionality
                </div>
                <div>
                  <strong>Analytics Cookies:</strong> Help us understand how you use our website
                </div>
                <div>
                  <strong>Preference Cookies:</strong> Remember your settings and preferences
                </div>
                <div>
                  <strong>Marketing Cookies:</strong> Used to display relevant content and events
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-600">
              You can manage your cookie preferences through your browser settings. Note that disabling 
              certain cookies may affect website functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
            
            <p className="mb-4">
              Our services are designed for college students who are typically 18 years or older. 
              We do not knowingly collect personal information from children under 13. If we become 
              aware that we have collected information from a child under 13, we will take steps to 
              delete such information promptly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
            
            <p className="mb-4">
              We may update this privacy policy from time to time. When we make changes, we will:
            </p>
            
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Update the "Last updated" date at the top of this policy</li>
              <li>Notify users of significant changes via email or website notice</li>
              <li>Provide a summary of changes made</li>
              <li>Allow time for review before changes take effect</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            
            <p className="mb-4">
              If you have questions about this privacy policy or our data practices, please contact us:
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">ASGC Privacy Officer</h3>
                  <p className="text-blue-800 text-sm">
                    Email: privacy@asgc.university.edu<br/>
                    Phone: (555) 123-4567<br/>
                    Office: Student Union Building, Room 201
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Mailing Address</h3>
                  <p className="text-blue-800 text-sm">
                    ASGC Privacy Office<br/>
                    123 University Avenue<br/>
                    Campus City, ST 12345
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="bg-gray-100 border rounded-lg p-4 text-center">
            <p className="text-sm text-gray-600">
              This privacy policy is effective as of August 9, 2025, and will remain in effect 
              except with respect to any changes in its provisions in the future, which will be 
              in effect immediately after being posted on this page.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
