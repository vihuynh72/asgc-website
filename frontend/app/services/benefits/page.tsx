import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ASGC Benefit Sticker Program | ASGC',
  description: 'Get discounts and exclusive benefits at local businesses with your ASGC student benefit sticker.',
};

export default function BenefitStickerPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-[var(--color-foreground)]">
          ASGC Benefit Sticker Program
        </h1>
        <p className="text-lg text-[var(--color-muted-foreground)] max-w-3xl mx-auto">
          Save money on food, entertainment, and services around campus and the community 
          with your exclusive ASGC student benefit sticker.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* How It Works */}
          <div className="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
            <h2 className="text-2xl font-semibold mb-4 text-[var(--color-foreground)]">How It Works</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[var(--asgc-primary)] text-white rounded-full flex items-center justify-center">
                  <span className="font-semibold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-foreground)]">Get Your Sticker</h3>
                  <p className="text-[var(--color-muted-foreground)] text-sm">
                    Pick up your free ASGC benefit sticker from the Student Life office 
                    with your current student ID.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[var(--asgc-primary)] text-white rounded-full flex items-center justify-center">
                  <span className="font-semibold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-foreground)]">Show & Save</h3>
                  <p className="text-[var(--color-muted-foreground)] text-sm">
                    Present your student ID with the ASGC sticker at participating 
                    businesses to receive exclusive discounts.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[var(--asgc-primary)] text-white rounded-full flex items-center justify-center">
                  <span className="font-semibold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-foreground)]">Enjoy Benefits</h3>
                  <p className="text-[var(--color-muted-foreground)] text-sm">
                    Use your discounts as often as you like at any participating location. 
                    New partners are added regularly!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Participating Businesses */}
          <div className="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
            <h2 className="text-2xl font-semibold mb-4 text-[var(--color-foreground)]">Participating Businesses</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Food & Dining */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[var(--asgc-primary)]">🍕 Food & Dining</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-[var(--asgc-secondary)] pl-4">
                    <h4 className="font-medium text-[var(--color-foreground)]">Tony's Little Star Pizza</h4>
                    <p className="text-sm text-[var(--color-muted-foreground)]">15% off any order</p>
                    <p className="text-xs text-[var(--color-muted-foreground)]">123 Main St, El Cajon</p>
                  </div>
                  
                  <div className="border-l-4 border-[var(--asgc-secondary)] pl-4">
                    <h4 className="font-medium text-[var(--color-foreground)]">Subway</h4>
                    <p className="text-sm text-[var(--color-muted-foreground)]">Buy one get one 50% off</p>
                    <p className="text-xs text-[var(--color-muted-foreground)]">Multiple locations</p>
                  </div>
                  
                  <div className="border-l-4 border-[var(--asgc-secondary)] pl-4">
                    <h4 className="font-medium text-[var(--color-foreground)]">Starbucks</h4>
                    <p className="text-sm text-[var(--color-muted-foreground)]">10% off beverages</p>
                    <p className="text-xs text-[var(--color-muted-foreground)]">Campus location</p>
                  </div>
                </div>
              </div>

              {/* Entertainment */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[var(--asgc-primary)]">🎬 Entertainment</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-[var(--asgc-accent)] pl-4">
                    <h4 className="font-medium text-[var(--color-foreground)]">AMC Theaters</h4>
                    <p className="text-sm text-[var(--color-muted-foreground)]">$2 off movie tickets</p>
                    <p className="text-xs text-[var(--color-muted-foreground)]">Valid Tuesday-Thursday</p>
                  </div>
                  
                  <div className="border-l-4 border-[var(--asgc-accent)] pl-4">
                    <h4 className="font-medium text-[var(--color-foreground)]">Main Event Bowling</h4>
                    <p className="text-sm text-[var(--color-muted-foreground)]">20% off bowling games</p>
                    <p className="text-xs text-[var(--color-muted-foreground)]">El Cajon location</p>
                  </div>
                  
                  <div className="border-l-4 border-[var(--asgc-accent)] pl-4">
                    <h4 className="font-medium text-[var(--color-foreground)]">Escape Room SD</h4>
                    <p className="text-sm text-[var(--color-muted-foreground)]">15% off group bookings</p>
                    <p className="text-xs text-[var(--color-muted-foreground)]">Minimum 4 players</p>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[var(--asgc-primary)]">🔧 Services</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-[var(--asgc-primary)] pl-4">
                    <h4 className="font-medium text-[var(--color-foreground)]">Quick Print Shop</h4>
                    <p className="text-sm text-[var(--color-muted-foreground)]">10% off printing services</p>
                    <p className="text-xs text-[var(--color-muted-foreground)]">Near campus</p>
                  </div>
                  
                  <div className="border-l-4 border-[var(--asgc-primary)] pl-4">
                    <h4 className="font-medium text-[var(--color-foreground)]">Campus Bookstore</h4>
                    <p className="text-sm text-[var(--color-muted-foreground)]">5% off supplies & gifts</p>
                    <p className="text-xs text-[var(--color-muted-foreground)]">Excludes textbooks</p>
                  </div>
                  
                  <div className="border-l-4 border-[var(--asgc-primary)] pl-4">
                    <h4 className="font-medium text-[var(--color-foreground)]">AutoZone</h4>
                    <p className="text-sm text-[var(--color-muted-foreground)]">10% off automotive parts</p>
                    <p className="text-xs text-[var(--color-muted-foreground)]">Show student ID</p>
                  </div>
                </div>
              </div>

              {/* Health & Fitness */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[var(--asgc-primary)]">💪 Health & Fitness</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-[var(--asgc-secondary)] pl-4">
                    <h4 className="font-medium text-[var(--color-foreground)]">24 Hour Fitness</h4>
                    <p className="text-sm text-[var(--color-muted-foreground)]">No enrollment fee</p>
                    <p className="text-xs text-[var(--color-muted-foreground)]">Student membership rates</p>
                  </div>
                  
                  <div className="border-l-4 border-[var(--asgc-secondary)] pl-4">
                    <h4 className="font-medium text-[var(--color-foreground)]">Campus Health Center</h4>
                    <p className="text-sm text-[var(--color-muted-foreground)]">$5 off wellness programs</p>
                    <p className="text-xs text-[var(--color-muted-foreground)]">Massage, yoga classes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
            <h2 className="text-2xl font-semibold mb-4 text-[var(--color-foreground)]">Terms & Conditions</h2>
            <div className="prose prose-sm max-w-none text-[var(--color-muted-foreground)]">
              <ul className="space-y-2">
                <li>Valid current student ID with ASGC sticker required for all discounts</li>
                <li>Discounts cannot be combined with other offers or promotions</li>
                <li>Participating businesses may change without notice</li>
                <li>Discount amounts and terms subject to change by individual businesses</li>
                <li>Some restrictions may apply at certain locations</li>
                <li>ASGC is not responsible for disputes between students and businesses</li>
                <li>Program benefits are for enrolled Grossmont College students only</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
            <h2 className="text-xl font-semibold mb-4 text-[var(--color-foreground)]">Get Your Sticker</h2>
            <div className="space-y-4">
              <div className="text-sm text-[var(--color-muted-foreground)]">
                <p className="font-medium text-[var(--color-foreground)] mb-2">Pick-up Location:</p>
                <p>Student Life Office</p>
                <p>Building 60, Room 220</p>
                <p className="mt-2">
                  <strong className="text-[var(--color-foreground)]">Hours:</strong><br/>
                  Mon-Fri: 8:00 AM - 5:00 PM
                </p>
              </div>
              
              <div className="bg-[var(--asgc-neutral-50)] border border-[var(--asgc-primary)] rounded-lg p-4">
                <h3 className="font-semibold text-[var(--asgc-primary)] mb-2">Requirements</h3>
                <ul className="text-sm text-[var(--color-muted-foreground)] space-y-1">
                  <li>✓ Current student ID</li>
                  <li>✓ Enrolled in current semester</li>
                  <li>✓ No cost - completely free!</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
            <h2 className="text-xl font-semibold mb-4 text-[var(--color-foreground)]">Program Stats</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-[var(--color-muted-foreground)]">Active Partners:</span>
                <span className="font-bold text-[var(--asgc-primary)] text-xl">25+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--color-muted-foreground)]">Student Participants:</span>
                <span className="font-bold text-[var(--asgc-primary)] text-xl">1,200+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--color-muted-foreground)]">Avg. Savings:</span>
                <span className="font-bold text-[var(--asgc-primary)] text-xl">$150/year</span>
              </div>
            </div>
          </div>

          <div className="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
            <h2 className="text-xl font-semibold mb-4 text-[var(--color-foreground)]">Want to Partner?</h2>
            <p className="text-sm text-[var(--color-muted-foreground)] mb-4">
              Are you a local business interested in offering discounts to Grossmont College students?
            </p>
            <a 
              href="/contact" 
              className="block w-full bg-[var(--asgc-secondary)] text-white py-2 px-4 rounded-md text-center text-sm hover:opacity-90 transition-opacity"
            >
              Contact Us
            </a>
          </div>

          <div className="bg-[var(--asgc-neutral-50)] border border-[var(--asgc-primary)] rounded-lg p-4">
            <h3 className="font-semibold text-[var(--asgc-primary)] mb-2">Questions?</h3>
            <p className="text-[var(--color-muted-foreground)] text-sm mb-3">
              Contact Student Life for more information about the benefit sticker program.
            </p>
            <div className="text-sm text-[var(--color-muted-foreground)]">
              <p>Email: studentlife@gcccd.edu</p>
              <p>Phone: (619) 644-7234</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
