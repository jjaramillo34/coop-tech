export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Hero Section */}
            <div className="space-y-8 animate-pulse">
              <div className="h-12 bg-gray-200 rounded-lg w-1/3 mx-auto" />
              <div className="aspect-[16/9] bg-gray-200 rounded-2xl" />
            </div>

            {/* Content Sections */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-8 animate-pulse">
                <div className="h-8 bg-gray-200 rounded-lg w-1/4 mx-auto" />
                <div className="bg-gray-100 rounded-2xl p-8">
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                    <div className="h-4 bg-gray-200 rounded w-2/3" />
                    <div className="h-4 bg-gray-200 rounded w-5/6" />
                  </div>
                </div>
              </div>
            ))}

            {/* Staff Section */}
            <div className="space-y-8 animate-pulse">
              <div className="h-8 bg-gray-200 rounded-lg w-1/4 mx-auto" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-gray-100 rounded-xl p-6">
                    <div className="space-y-3">
                      <div className="h-5 bg-gray-200 rounded w-2/3" />
                      <div className="h-4 bg-gray-200 rounded w-1/2" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 