"use client"

import { Title } from '@/components/ui/title';
import { Map } from '@/components/ui/map';
import { locations } from '@/data/locations';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container py-12">
      <Title 
        variant="section" 
        align="center"
        text="Contact Us"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-primary-900 mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-4 p-4 rounded-lg bg-primary-50 hover:bg-primary-100 transition-colors"
              >
                <Phone className="w-6 h-6 text-primary-600" />
                <div>
                  <p className="font-medium text-primary-900">Call Us</p>
                  <p className="text-primary-700">(123) 456-7890</p>
                </div>
              </a>
              <a
                href="mailto:info@cooptech.edu"
                className="flex items-center gap-4 p-4 rounded-lg bg-primary-50 hover:bg-primary-100 transition-colors"
              >
                <Mail className="w-6 h-6 text-primary-600" />
                <div>
                  <p className="font-medium text-primary-900">Email Us</p>
                  <p className="text-primary-700">info@cooptech.edu</p>
                </div>
              </a>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-primary-50">
                <MapPin className="w-6 h-6 text-primary-600" />
                <div>
                  <p className="font-medium text-primary-900">Visit Us</p>
                  <p className="text-primary-700">321 East 96th Street, New York, NY 10128</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="h-[500px] rounded-xl overflow-hidden">
          <Map locations={locations} />
        </div>
      </div>
    </div>
  );
} 