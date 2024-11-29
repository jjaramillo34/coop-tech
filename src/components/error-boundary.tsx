'use client';

import { useEffect } from 'react';

export default function ErrorBoundary({
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
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Something went wrong!
        </h2>
        <button
          onClick={reset}
          className="px-4 py-2 bg-primary-600 text-white rounded-lg 
            hover:bg-primary-700 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
} 