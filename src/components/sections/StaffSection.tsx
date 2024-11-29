'use client';

import { useState } from 'react';
import { Title } from '@/components/ui/title';
import { Mail, Phone, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StaffMember {
  name: string;
  title: string;
  email?: string;
  phone?: string;
  department?: string;
}

interface StaffSectionProps {
  title: string;
  staff: StaffMember[];
}

export function StaffSection({ title, staff }: StaffSectionProps) {
  const [selectedMember, setSelectedMember] = useState<StaffMember | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStaff = staff.filter(member => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.department?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="relative">
      <Title
        variant="section"
        align="center"
        className="mb-8"
      >
        {title}
      </Title>

      {/* Search Bar */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search by name or title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md mx-auto block px-4 py-2 rounded-lg border-2 
            border-gray-200 focus:border-primary-300 focus:ring-2 focus:ring-primary-100 
            transition-all duration-300"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredStaff.map((member, index) => (
          <div
            key={index}
            className={cn(
              "group relative bg-white rounded-xl shadow-sm hover:shadow-md",
              "transition-all duration-300 transform hover:-translate-y-1",
              selectedMember === member && "ring-2 ring-primary-500"
            )}
          >
            <button
              onClick={() => setSelectedMember(selectedMember === member ? null : member)}
              className="w-full text-left p-6"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg text-primary-900 group-hover:text-primary-700 
                    transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    {member.title}
                  </p>
                  {member.department && (
                    <p className="text-sm text-gray-500 mt-1">
                      {member.department}
                    </p>
                  )}
                </div>
                {selectedMember === member ? (
                  <X className="w-5 h-5 text-gray-400" />
                ) : (
                  <div className="w-5 h-5" />
                )}
              </div>

              {selectedMember === member && (
                <div className="mt-4 space-y-2 animate-fadeIn">
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 
                        transition-colors duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Mail className="w-4 h-4" />
                      {member.email}
                    </a>
                  )}
                  {member.phone && (
                    <a
                      href={`tel:${member.phone}`}
                      className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 
                        transition-colors duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Phone className="w-4 h-4" />
                      {member.phone}
                    </a>
                  )}
                </div>
              )}
            </button>
          </div>
        ))}
      </div>

      {filteredStaff.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          No staff members found matching your search.
        </p>
      )}
    </section>
  );
} 