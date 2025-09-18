export default function AgencyDashboardPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-24">
      <div className="text-center px-6">
        <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
          <span className="text-3xl font-bold text-white">A</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Agency Dashboard
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
          Manage your digital agency operations. Track projects, clients, and business performance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <a 
            href="/agency/projects"
            className="px-6 py-4 bg-blue-600 text-white rounded-2xl font-semibold hover:bg-blue-700 transition-colors"
          >
            Projects
          </a>
          <a 
            href="/agency/clients"
            className="px-6 py-4 border-2 border-blue-600 text-blue-600 rounded-2xl font-semibold hover:bg-blue-50 transition-colors"
          >
            Clients
          </a>
          <a 
            href="/agency/analytics"
            className="px-6 py-4 bg-gray-600 text-white rounded-2xl font-semibold hover:bg-gray-700 transition-colors"
          >
            Analytics
          </a>
        </div>
      </div>
    </div>
  );
}