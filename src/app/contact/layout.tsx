import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Coop Tech',
  description: 'Get in touch with us at Coop Tech. Find our contact information and location.',
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function ContactLayout({ children }: LayoutProps) {
  return children;
} 