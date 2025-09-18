export default function TradingDashboardPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-red-100 pt-24">
      <div className="text-center px-6">
        <div className="w-24 h-24 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
          <span className="text-3xl font-bold text-white">T</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Trading Dashboard
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
          Monitor your trading activities. View portfolio performance, market analysis, and trading history.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <a 
            href="/trading/portfolio"
            className="px-6 py-4 bg-orange-600 text-white rounded-2xl font-semibold hover:bg-orange-700 transition-colors"
          >
            Portfolio
          </a>
          <a 
            href="/trading/analysis"
            className="px-6 py-4 border-2 border-orange-600 text-orange-600 rounded-2xl font-semibold hover:bg-orange-50 transition-colors"
          >
            Market Analysis
          </a>
          <a 
            href="/trading/wallet"
            className="px-6 py-4 bg-green-600 text-white rounded-2xl font-semibold hover:bg-green-700 transition-colors"
          >
            Wallet
          </a>
        </div>
      </div>
    </div>
  );
}