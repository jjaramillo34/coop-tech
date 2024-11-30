import { notFound } from 'next/navigation';
import { Title } from '@/components/ui/title';
import { trades } from '@/data/trades';
import TradeContent from './trade-content';
import { Metadata } from 'next';

type Props = {
  params: {
    trade: string;
  };
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const trade = trades.find((t) => t.slug === params.trade);
  
  if (!trade) {
    return {
      title: 'Trade Not Found'
    };
  }

  return {
    title: `${trade.title} | Coop Tech`,
    description: trade.description,
  };
}

export async function generateStaticParams() {
  return trades.map((trade) => ({
    trade: trade.slug,
  }));
}

export default function TradePage({ params }: Props) {
  const trade = trades.find((t) => t.slug === params.trade);

  if (!trade) {
    notFound();
  }

  return (
    <div className="container py-12">
      <Title 
        variant="section" 
        align="center" 
        className="mb-8"
        text={trade.title}
      />
      <TradeContent trade={trade} />
    </div>
  );
} 