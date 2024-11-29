'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Something went wrong loading this page
        </h2>
        <p className="text-gray-600 mb-8">
          We&apos;re sorry for the inconvenience. Please try again.
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-primary-600 text-white rounded-xl 
            hover:bg-primary-700 transition-colors font-medium"
        >
          Try again
        </button>
      </div>
    </div>
  );
} 