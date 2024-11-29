'use client';

import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { campusData } from '@/data/locations';
import { MapPin, Search, GraduationCap, Phone, Mail, Globe } from 'lucide-react';
import gsap from 'gsap';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

// Define types
interface Campus {
  name: string;
  address: string;
  coordinates: [number, number]; // This fixes the LngLatLike type error
  programs: string[];
}

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

export default function LocationsPage() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [selectedCampus, setSelectedCampus] = useState<Campus>(campusData[0] as Campus);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProgram, setSelectedProgram] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const headerRef = useRef(null);
  const searchRef = useRef(null);
  const listRef = useRef(null);

  // Get unique programs across all campuses
  const allPrograms = Array.from(
    new Set(campusData.flatMap(campus => campus.programs))
  ).sort();

  const filteredCampuses = campusData.filter(campus => {
    const matchesSearch = campus.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         campus.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesProgram = !selectedProgram || campus.programs.includes(selectedProgram);
    return matchesSearch && matchesProgram;
  });

  useEffect(() => {
    if (!mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-73.935242, 40.730610], // NYC coordinates
      zoom: 10,
    });

    map.current.addControl(new mapboxgl.NavigationControl());

    // Add clustering
    map.current.on('load', () => {
      map.current!.addSource('campuses', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: campusData.map(campus => ({
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: campus.coordinates,
            },
            properties: {
              name: campus.name,
              address: campus.address,
              programCount: campus.programs.length,
            },
          })),
        },
        cluster: true,
        clusterMaxZoom: 14,
        clusterRadius: 50,
      });

      map.current!.addLayer({
        id: 'clusters',
        type: 'circle',
        source: 'campuses',
        filter: ['has', 'point_count'],
        paint: {
          'circle-color': '#2563eb',
          'circle-radius': [
            'step',
            ['get', 'point_count'],
            20,
            2,
            30,
            5,
            40,
          ],
        },
      });

      map.current!.addLayer({
        id: 'cluster-count',
        type: 'symbol',
        source: 'campuses',
        filter: ['has', 'point_count'],
        layout: {
          'text-field': '{point_count_abbreviated}',
          'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
          'text-size': 12,
        },
        paint: {
          'text-color': '#ffffff',
        },
      });

      map.current!.addLayer({
        id: 'unclustered-point',
        type: 'circle',
        source: 'campuses',
        filter: ['!', ['has', 'point_count']],
        paint: {
          'circle-color': '#2563eb',
          'circle-radius': 8,
          'circle-stroke-width': 2,
          'circle-stroke-color': '#fff',
        },
      });
    });

    // Create markers for each campus
    const markers = campusData.map((campus) => {
      return new mapboxgl.Marker({ color: '#2563eb' })
        .setLngLat(campus.coordinates as [number, number])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(`
            <div class="p-2">
              <h3 class="font-semibold">${campus.name}</h3>
              <p class="text-sm text-gray-600">${campus.address}</p>
              <p class="text-sm text-blue-600 mt-1">${campus.programs.length} programs available</p>
            </div>
          `)
        )
        .addTo(map.current!);
    });

    // Add GSAP animations
    const ctx = gsap.context(() => {
      // Animate header
      gsap.from(headerRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      });

      // Animate search and filter
      gsap.from(searchRef.current, {
        y: -10,
        opacity: 0,
        duration: 0.6,
        delay: 0.2,
        ease: 'power2.out',
      });

      // Animate location list
      gsap.from('.location-card', {
        y: 20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        delay: 0.4,
        ease: 'power2.out',
      });
    });

    return () => {
      markers.forEach(marker => marker.remove());
      map.current?.remove();
      ctx.revert();
    };
  }, []);

  // Add animation when filtering
  useEffect(() => {
    gsap.from('.location-card', {
      y: 10,
      opacity: 0,
      duration: 0.3,
      stagger: 0.05,
      ease: 'power2.out',
    });
  }, [filteredCampuses]);

  const flyToCampus = (campus: Campus) => {
    setSelectedCampus(campus);
    map.current?.flyTo({
      center: campus.coordinates as [number, number],
      zoom: 14,
      duration: 2000,
    });
  };

  const handleCampusClick = (campus: Campus) => {
    flyToCampus(campus);
    setSelectedCampus(campus);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-3 h-[calc(100vh-3.5rem)]">
          {/* Sidebar */}
          <div className="p-6 overflow-y-auto border-r">
            <h1 ref={headerRef} className="text-2xl font-bold mb-6">
              Our Locations
            </h1>
            
            {/* Search and Filter */}
            <div ref={searchRef} className="space-y-4 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="relative">
                <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <select
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
                >
                  <option value="">All Programs</option>
                  {allPrograms.map(program => (
                    <option key={program} value={program}>
                      {program}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Location List */}
            <div ref={listRef} className="space-y-4">
              {filteredCampuses.map((campus) => (
                <button
                  key={campus.name}
                  onClick={() => handleCampusClick(campus as Campus)}
                  className={`location-card w-full text-left p-4 rounded-lg transition-all duration-300 ${
                    selectedCampus.name === campus.name
                      ? 'bg-blue-50 border-blue-500 shadow-sm'
                      : 'hover:bg-gray-50 border-gray-200 hover:border-blue-300'
                  } border`}
                >
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">{campus.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{campus.address}</p>
                      <p className="text-sm text-blue-600 mt-2">
                        {campus.programs.length} programs available
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Map */}
          <div ref={mapContainer} className="h-full lg:col-span-2" />
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedCampus.name}</DialogTitle>
          </DialogHeader>
          <div className="mt-4 space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-600 mt-1" />
              <p>{selectedCampus.address}</p>
            </div>
            
            <div className="border-t pt-4">
              <h3 className="font-semibold mb-3">Available Programs</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedCampus.programs.map((program) => (
                  <div
                    key={program}
                    className="flex items-center gap-2 text-sm"
                  >
                    <GraduationCap className="w-4 h-4 text-blue-600" />
                    {program}
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t pt-4">
              <h3 className="font-semibold mb-3">Contact Information</h3>
              <div className="space-y-2">
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-2 text-blue-600 hover:underline"
                >
                  <Phone className="w-4 h-4" />
                  (123) 456-7890
                </a>
                <a
                  href="mailto:info@campus.edu"
                  className="flex items-center gap-2 text-blue-600 hover:underline"
                >
                  <Mail className="w-4 h-4" />
                  info@campus.edu
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-blue-600 hover:underline"
                >
                  <Globe className="w-4 h-4" />
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
} 