'use client';

import Link from 'next/link';
import { getAllTrades, type Trade } from '@/data/trades';
import { ArrowRight } from 'lucide-react';
import { Title } from '@/components/ui/title';

// Helper function to get trade area
const getTradeArea = (trade: Trade): string => {
  if (trade.title.includes('Automotive')) return 'Automotive';
  if (trade.title.includes('Electrical')) return 'Electrical';
  if (trade.title.includes('Construction')) return 'Construction';
  if (trade.title.includes('Plumbing')) return 'Plumbing';
  if (trade.title.includes('Carpentry')) return 'Construction';
  if (trade.title.includes('Cosmetology')) return 'Beauty & Wellness';
  return 'Other';
};

export default function TradesPage() {
  const trades = getAllTrades();

  // Group trades by area
  const tradesByArea = trades.reduce((acc, trade) => {
    const area = getTradeArea(trade);
    if (!acc[area]) {
      acc[area] = [];
    }
    acc[area].push(trade);
    return acc;
  }, {} as Record<string, Trade[]>);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-primary-50/30 to-white">
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <Title variant="section" align="center" className="text-white mb-6">
            Available Trade Programs
          </Title>
          <p className="text-xl opacity-90 max-w-2xl mx-auto text-center">
            Discover our comprehensive range of technical training programs designed to prepare you for a successful career in your chosen field.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {Object.entries(tradesByArea).map(([area, areaTrades]) => (
          <div key={area} className="mb-16 last:mb-0">
            <h2 className="text-2xl font-bold mb-8 text-primary-900">{area}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {areaTrades.map((trade) => (
                <Link
                  key={trade.slug}
                  href={`/trades/${trade.slug}`}
                  className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-primary-100 hover:border-primary-300 hover:-translate-y-1"
                >
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {trade.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {trade.description}
                  </p>
                  <div className="flex items-center text-primary">
                    <span className="text-sm mr-2">Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 