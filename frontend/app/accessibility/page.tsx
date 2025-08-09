export default function AccessibilityPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Accessibility Statement</h1>
          <p className="text-lg text-gray-600">
            Committed to digital inclusion for all students
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-green-900 mb-2">Our Commitment</h2>
            <p className="text-green-800">
              ASGC is committed to ensuring digital accessibility for people with disabilities. We are 
              continually improving the user experience for everyone and applying the relevant accessibility standards.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Accessibility Standards</h2>
            
            <p className="mb-4">
              We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 AA standards. 
              These guidelines explain how to make web content more accessible for people with disabilities.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Perceivable</h3>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• Text alternatives for images</li>
                  <li>• Captions for videos and audio</li>
                  <li>• Sufficient color contrast</li>
                  <li>• Resizable text up to 200%</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Operable</h3>
                <ul className="text-purple-800 text-sm space-y-1">
                  <li>• Keyboard navigation support</li>
                  <li>• No seizure-inducing content</li>
                  <li>• Reasonable time limits</li>
                  <li>• Clear navigation structure</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-orange-900 mb-2">Understandable</h3>
                <ul className="text-orange-800 text-sm space-y-1">
                  <li>• Clear and simple language</li>
                  <li>• Predictable navigation</li>
                  <li>• Input assistance and error identification</li>
                  <li>• Consistent design patterns</li>
                </ul>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-red-900 mb-2">Robust</h3>
                <ul className="text-red-800 text-sm space-y-1">
                  <li>• Compatible with assistive technologies</li>
                  <li>• Valid HTML and markup</li>
                  <li>• Cross-browser compatibility</li>
                  <li>• Future-proof design</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Accessibility Features</h2>
            
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Alternative Text
                </h3>
                <p className="text-sm text-gray-600">
                  All images include descriptive alternative text for screen readers.
                </p>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Keyboard Navigation
                </h3>
                <p className="text-sm text-gray-600">
                  All interactive elements can be accessed and operated using keyboard only.
                </p>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v16a1 1 0 01-1 1H5a1 1 0 01-1-1V1a1 1 0 011-1h2a1 1 0 011 1v3z" />
                  </svg>
                  Color Contrast
                </h3>
                <p className="text-sm text-gray-600">
                  Text and background colors meet WCAG AA contrast ratio requirements (4.5:1 minimum).
                </p>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  Scalable Text
                </h3>
                <p className="text-sm text-gray-600">
                  Text can be enlarged up to 200% without loss of functionality or content.
                </p>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Clear Error Messages
                </h3>
                <p className="text-sm text-gray-600">
                  Form errors are clearly described and provide guidance for correction.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Assistive Technology Support</h2>
            
            <p className="mb-4">
              Our website is designed to work with commonly used assistive technologies:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Screen Readers</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• NVDA (Windows)</li>
                  <li>• JAWS (Windows)</li>
                  <li>• VoiceOver (macOS/iOS)</li>
                  <li>• TalkBack (Android)</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Voice Control</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Dragon NaturallySpeaking</li>
                  <li>• Windows Speech Recognition</li>
                  <li>• macOS Voice Control</li>
                  <li>• Voice Access (Android)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Document Accessibility</h2>
            
            <p className="mb-4">
              We strive to make all our documents accessible. When possible, we provide:
            </p>
            
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Text-searchable PDF documents with proper headings and structure</li>
              <li>Alternative formats (HTML, Word, large print) upon request</li>
              <li>Captions and transcripts for video and audio content</li>
              <li>Plain language summaries for complex documents</li>
            </ul>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">Request Alternative Formats</h3>
              <p className="text-blue-800 text-sm">
                If you need a document in an alternative format, please contact us at 
                <a href="mailto:accessibility@asgc.university.edu" className="underline">accessibility@asgc.university.edu</a> 
                or call (555) 123-4567. We will provide the document in your preferred format within 5 business days.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Known Issues & Limitations</h2>
            
            <p className="mb-4">
              We are continuously working to improve accessibility. Currently known issues include:
            </p>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
              <h3 className="font-semibold text-yellow-900 mb-2">In Progress</h3>
              <ul className="text-yellow-800 text-sm space-y-1">
                <li>• Some legacy PDF documents may not be fully accessible</li>
                <li>• Third-party embedded content may have accessibility limitations</li>
                <li>• Some complex data tables need improved navigation</li>
              </ul>
            </div>
            
            <p className="text-sm text-gray-600">
              Expected completion: December 2025
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Testing & Feedback</h2>
            
            <p className="mb-4">
              We regularly test our website with:
            </p>
            
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Automated accessibility scanning tools</li>
              <li>Manual testing with assistive technologies</li>
              <li>User testing with people with disabilities</li>
              <li>Regular accessibility audits by third-party experts</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Report Accessibility Issues</h2>
            
            <p className="mb-4">
              If you encounter an accessibility barrier on our website, please let us know:
            </p>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-green-900 mb-2">Contact Information</h3>
                  <p className="text-green-800 text-sm">
                    <strong>Email:</strong> accessibility@asgc.university.edu<br/>
                    <strong>Phone:</strong> (555) 123-4567<br/>
                    <strong>TTY:</strong> (555) 123-4568
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-green-900 mb-2">Response Time</h3>
                  <p className="text-green-800 text-sm">
                    We aim to respond to accessibility reports within 2 business days 
                    and resolve issues within 10 business days when possible.
                  </p>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 mb-4">
              When reporting an issue, please include:
            </p>
            
            <ul className="list-disc pl-6 text-sm text-gray-600 space-y-1">
              <li>URL of the page where you encountered the issue</li>
              <li>Description of the problem</li>
              <li>Your operating system and browser</li>
              <li>Assistive technology you are using (if applicable)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Accessibility Resources</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h3 className="font-semibold text-purple-900 mb-2">Campus Resources</h3>
                <ul className="text-purple-800 text-sm space-y-1">
                  <li>• Disability Services Office</li>
                  <li>• Assistive Technology Center</li>
                  <li>• Academic Accommodation Services</li>
                  <li>• Student Support Services</li>
                </ul>
              </div>
              
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                <h3 className="font-semibold text-indigo-900 mb-2">External Resources</h3>
                <ul className="text-indigo-800 text-sm space-y-1">
                  <li>• <a href="https://www.w3.org/WAI/" className="underline">Web Accessibility Initiative</a></li>
                  <li>• <a href="https://webaim.org/" className="underline">WebAIM</a></li>
                  <li>• <a href="https://www.ada.gov/" className="underline">ADA Information</a></li>
                  <li>• <a href="https://www.section508.gov/" className="underline">Section 508</a></li>
                </ul>
              </div>
            </div>
          </section>

          <div className="bg-gray-100 border rounded-lg p-4 text-center">
            <p className="text-sm text-gray-600">
              This accessibility statement was last updated on August 9, 2025. 
              We review and update our accessibility efforts on an ongoing basis.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
