"use client"

import { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { type Location } from '@/data/locations'

interface MapProps {
  locations: Location[];
}

export function Map({ locations }: MapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [activeLocation, setActiveLocation] = useState<Location | null>(null)

  useEffect(() => {
    if (!mapContainer.current) return

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || ''

    if (map.current) return

    // Calculate bounds for all locations
    const bounds = new mapboxgl.LngLatBounds()
    locations.forEach(location => {
      bounds.extend(location.coordinates)
    })

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-73.9438, 40.7915], // Default center (Manhattan area)
      zoom: 11 // Default zoom level
    })

    // Fit bounds after map loads
    map.current.on('load', () => {
      map.current?.fitBounds(bounds, {
        padding: { top: 50, bottom: 50, left: 50, right: 50 }
      })
    })

    // Add markers and popups for each location
    locations.forEach(location => {
      // Create custom marker element
      const markerEl = document.createElement('div')
      markerEl.className = 'custom-marker'
      markerEl.style.width = '30px'
      markerEl.style.height = '30px'
      markerEl.style.backgroundColor = '#0ea5e9'
      markerEl.style.borderRadius = '50%'
      markerEl.style.border = '3px solid white'
      markerEl.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)'
      markerEl.style.cursor = 'pointer'
      markerEl.style.transition = 'transform 0.2s ease'

      // Create popup content
      const popupContent = `
        <div class="p-2">
          <h3 class="font-bold text-lg mb-1">${location.name}</h3>
          <p class="text-sm mb-2">${location.address}</p>
          ${location.programs ? `
            <div class="text-sm">
              <strong>Programs:</strong>
              <ul class="list-disc pl-4 mt-1">
                ${location.programs.slice(0, 5).map(program => `<li>${program}</li>`).join('')}
                ${location.programs.length > 5 ? `<li class="text-primary-600">+${location.programs.length - 5} more programs</li>` : ''}
              </ul>
            </div>
          ` : ''}
        </div>
      `

      // Create popup
      const popup = new mapboxgl.Popup({
        offset: 25,
        closeButton: false,
        maxWidth: '300px'
      }).setHTML(popupContent)

      // Create marker
      const marker = new mapboxgl.Marker({
        element: markerEl
      })
        .setLngLat(location.coordinates)
        .setPopup(popup)
        .addTo(map.current!)

      // Add hover effects
      markerEl.addEventListener('mouseenter', () => {
        markerEl.style.transform = 'scale(1.1)'
        popup.addTo(map.current!)
      })

      markerEl.addEventListener('mouseleave', () => {
        markerEl.style.transform = 'scale(1)'
        if (!popup.isOpen()) {
          popup.remove()
        }
      })

      // Add click handler
      marker.getElement().addEventListener('click', () => {
        setActiveLocation(location)
        map.current?.flyTo({
          center: location.coordinates,
          zoom: 15,
          duration: 1500
        })
      })
    })

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl())

    return () => {
      if (map.current) {
        map.current.remove()
      }
    }
  }, [locations])

  return (
    <div className="relative h-full">
      <div 
        ref={mapContainer} 
        className="h-full w-full rounded-lg shadow-lg"
      />
      {activeLocation && (
        <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-lg shadow-lg text-sm">
          <h3 className="font-bold text-lg mb-1">{activeLocation.name}</h3>
          <p className="mb-2">{activeLocation.address}</p>
          {activeLocation.programs && (
            <div>
              <strong>Programs:</strong>
              <ul className="list-disc pl-4 mt-1">
                {activeLocation.programs.map((program, index) => (
                  <li key={index}>{program}</li>
                ))}
              </ul>
            </div>
          )}
          <button
            onClick={() => setActiveLocation(null)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>
      )}
    </div>
  )
} 