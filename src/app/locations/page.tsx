'use client';

import { useState } from 'react';
import { Title } from '@/components/ui/title';
import { Map } from '@/components/ui/map';
import { locations } from '@/data/locations';

export default function LocationsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    setSearchQuery(searchValue);

    if (!searchValue.trim()) {
      setSuggestions([]);
      return;
    }

    const searchLower = searchValue.toLowerCase();

    // Get location suggestions
    const locationSuggestions = locations
      .map(location => location.name)
      .filter(name => name.toLowerCase().includes(searchLower));

    // Get program suggestions
    const programSuggestions = locations
      .flatMap(location => location.programs)
      .filter(program => program.toLowerCase().includes(searchLower));

    // Combine and deduplicate suggestions
    const uniqueSuggestions = Array.from(
      new Set([...locationSuggestions, ...programSuggestions])
    ).slice(0, 6); // Limit to 6 suggestions

    setSuggestions(uniqueSuggestions);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setSuggestions([]);
  };

  const filteredLocations = searchQuery
    ? locations.filter(
        location =>
          location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          location.programs.some(program =>
            program.toLowerCase().includes(searchQuery.toLowerCase())
          )
      )
    : locations;

  return (
    <div className="container py-12">
      <Title 
        variant="section" 
        align="center"
        text="Our Locations"
      />

      {/* Search Bar */}
      <div className="relative max-w-xl mx-auto mb-8">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search locations or programs..."
          className="w-full px-4 py-2 rounded-lg border-2 border-primary-200 
            focus:border-primary-500 focus:outline-none focus:ring-2 
            focus:ring-primary-200 transition-all duration-300"
        />

        {/* Suggestions Dropdown */}
        {suggestions.length > 0 && (
          <div className="absolute z-10 w-full mt-1 bg-white border-2 
            border-primary-100 rounded-lg shadow-lg">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="w-full px-4 py-2 text-left hover:bg-primary-50 
                  transition-colors duration-200 first:rounded-t-lg 
                  last:rounded-b-lg"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Map */}
      <div className="h-[600px] rounded-xl overflow-hidden mb-8">
        <Map locations={filteredLocations} />
      </div>

      {/* Location Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLocations.map((location) => (
          <div
            key={location.name}
            className="bg-white rounded-xl shadow-lg overflow-hidden 
              hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary-900 mb-2">
                {location.name}
              </h3>
              <p className="text-gray-600 mb-4">{location.address}</p>
              <div className="space-y-2">
                <h4 className="font-medium text-primary-800">Programs:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {location.programs.map((program) => (
                    <li key={program}>{program}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 