'use client';

export default function ELearningDashboardPage() {
  const toggleAdmin = () => {
    if (typeof window !== 'undefined') {
      const isCurrentlyAdmin = localStorage.getItem('isAdmin') === 'true';
      localStorage.setItem('isAdmin', (!isCurrentlyAdmin).toString());
      window.location.reload();
    }
  };

  const getCurrentRole = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('isAdmin') === 'true' ? 'Admin' : 'User';
    }
    return 'User';
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-24">
      <div className="text-center px-6">
        {/* Admin Toggle */}
        <div className="mb-6 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-200 shadow-sm">
          <button 
            onClick={toggleAdmin}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white text-sm font-medium transition-colors"
          >
            Toggle Admin Mode (Currently: {getCurrentRole()})
          </button>
          <p className="text-xs text-gray-600 mt-2">Click to switch between Admin and User navbar views</p>
        </div>

        <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
          <span className="text-3xl font-bold text-white">E</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          E-Learning Dashboard
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
          Welcome to your learning dashboard. Track your progress, access courses, and manage your learning journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
          <a 
            href="/elearning/dashboard/student"
            className="px-6 py-4 bg-blue-600 text-white rounded-2xl font-semibold hover:bg-blue-700 transition-colors"
          >
            Student Dashboard
          </a>
          <a 
            href="/elearning/dashboard/affiliate"
            className="px-6 py-4 border-2 border-blue-600 text-blue-600 rounded-2xl font-semibold hover:bg-blue-50 transition-colors"
          >
            Affiliate Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}