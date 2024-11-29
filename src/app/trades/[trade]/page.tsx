import { use } from 'react';
import { notFound } from 'next/navigation';
import { getAllTrades } from '@/data/trades';

interface TradePageProps {
  params: Promise<{ trade: string }>;
}

export default function TradePage({ params }: TradePageProps) {
  const { trade } = use(params);
  const tradeName = trade.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  // Validate trade exists
  const allTrades = getAllTrades();
  if (!allTrades.includes(tradeName)) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50/30">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              {tradeName}
            </h1>
            <p className="text-xl text-gray-600">
              Learn more about our {tradeName.toLowerCase()} program and discover 
              the opportunities that await you.
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h2>Program Overview</h2>
              <p>
                Our {tradeName} program provides comprehensive training in all aspects 
                of the field. Students will learn both theoretical knowledge and 
                practical skills through hands-on experience.
              </p>

              <h2>What You&apos;ll Learn</h2>
              <ul>
                <li>Industry-standard techniques and best practices</li>
                <li>Safety protocols and regulations</li>
                <li>Use of professional tools and equipment</li>
                <li>Problem-solving and critical thinking skills</li>
              </ul>

              <h2>Career Opportunities</h2>
              <p>
                Graduates of our {tradeName} program are well-prepared for various 
                career paths in the industry. Many of our students go on to work with 
                leading companies or start their own businesses.
              </p>

              <div className="bg-primary-50 rounded-xl p-6 mt-8">
                <h3 className="text-primary-900 font-semibold mb-4">
                  Ready to Get Started?
                </h3>
                <p className="mb-4">
                  Join our {tradeName} program and take the first step towards your 
                  new career.
                </p>
                <a 
                  href="/PDFs/Application.pdf"
                  className="inline-block bg-primary-600 text-white px-6 py-3 
                    rounded-lg font-semibold hover:bg-primary-700 
                    transition-colors duration-300"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static paths for all trades
export async function generateStaticParams() {
  const trades = getAllTrades();
  return trades.map((trade) => ({
    trade: trade.toLowerCase().replace(/\s+/g, '-'),
  }));
} 