'use client';

import { useState } from 'react';
import { Title } from '@/components/ui/title';
import { Users, ArrowUpDown, Mail } from 'lucide-react';

interface StaffMember {
  name: string;
  title: string;
  email?: string;
  department?: string;
}

interface StaffData {
  [key: string]: StaffMember[];
}

interface StaffFilters {
  sortBy: 'name' | 'title';
  sortOrder: 'asc' | 'desc';
}

interface StaffDirectoryProps {
  staffData: StaffData;
}

export function StaffDirectory({ staffData }: StaffDirectoryProps) {
  const [filters, setFilters] = useState<StaffFilters>({
    sortBy: 'name',
    sortOrder: 'asc'
  });

  const sortedStaff = (staff: StaffMember[]) => {
    return [...staff].sort((a, b) => {
      const aValue = (a[filters.sortBy] || '') as string;
      const bValue = (b[filters.sortBy] || '') as string;
      return filters.sortOrder === 'asc' 
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    });
  };

  return (
    <div className="py-24 bg-gradient-to-b from-white to-primary-100/30">
      <div className="container mx-auto px-4">
        <Title
          variant="section"
          align="center"
          className="mb-16"
        >
          <Users className="w-12 h-12 mx-auto mb-4 text-primary-600" />
          Our Staff
        </Title>

        {/* Filters */}
        <div className="max-w-4xl mx-auto mb-12 flex justify-center gap-4">
          <select
            value={filters.sortBy}
            onChange={(e) => setFilters(prev => ({ 
              ...prev, 
              sortBy: e.target.value as StaffFilters['sortBy']
            }))}
            className="px-6 py-3 rounded-xl bg-white border-2 border-primary-100 
              hover:border-primary-300 focus:border-primary-400 focus:ring-4 
              focus:ring-primary-100 transition-all duration-300
              text-primary-900 font-medium"
          >
            <option value="name">Sort by Name</option>
            <option value="title">Sort by Title</option>
          </select>

          <button
            onClick={() => setFilters(prev => ({ 
              ...prev, 
              sortOrder: prev.sortOrder === 'asc' ? 'desc' : 'asc' 
            }))}
            className="px-6 py-3 rounded-xl bg-primary-50 hover:bg-primary-100 
              text-primary-700 font-medium border-2 border-primary-200 
              hover:border-primary-300 transition-all duration-300
              flex items-center gap-2 group"
          >
            <ArrowUpDown className="w-5 h-5 transition-transform duration-300 
              group-hover:scale-110" />
            {filters.sortOrder === 'asc' ? 'Ascending' : 'Descending'}
          </button>
        </div>

        <div className="space-y-20 animate-fadeIn">
          {Object.entries(staffData).map(([section, members]) => (
            <div key={section} className="bg-white rounded-2xl shadow-lg p-8 
              border-2 border-primary-100 hover:border-primary-300
              transition-all duration-500 hover:shadow-xl">
              <h3 className="text-2xl font-bold text-primary-900 mb-8 text-center">
                {section}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {sortedStaff(members).map((member, index) => (
                  <div
                    key={index}
                    className="group p-6 rounded-xl bg-gradient-to-br from-white to-primary-50
                      border-2 border-primary-100 hover:border-primary-300
                      transition-all duration-300 hover:scale-105"
                  >
                    <h4 className="font-semibold text-lg text-primary-900 
                      group-hover:text-primary-700 transition-colors duration-300">
                      {member.name}
                    </h4>
                    <p className="text-gray-600 mt-1">
                      {member.title}
                    </p>
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="mt-3 text-sm text-primary-600 hover:text-primary-700
                          transition-colors duration-300 inline-flex items-center gap-1
                          group-hover:scale-105"
                      >
                        <Mail className="w-4 h-4" />
                        Contact
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 