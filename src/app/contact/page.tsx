"use client"

import { Map } from "@/components/ui/map"

export default function ContactPage() {
  return (
    <main className="flex-1">
      <div className="container py-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Contact Us</h1>
          <p className="text-xl text-muted-foreground mb-8">
            For general inquiries, please feel free to contact us at{' '}
            <a 
              href="mailto:coopadmissions@schools.nyc.gov" 
              className="text-primary hover:underline"
            >
              coopadmissions@schools.nyc.gov
            </a>
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Location</h2>
              <address className="not-italic text-lg">
                321 East 96th Street<br />
                New York, NY 10128
              </address>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Hours of Operation</h2>
              <p className="text-lg">
                Monday - Friday<br />
                8:00 AM - 4:00 PM
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Public Transportation</h2>
              <p className="text-lg">
                Subway: Q line at 96th Street<br />
                Bus: M96, M15
              </p>
            </div>
          </div>

          {/* Map */}
          <Map />
        </div>
      </div>
    </main>
  )
} 