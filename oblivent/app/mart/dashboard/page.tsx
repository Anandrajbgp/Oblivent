export default function MartDashboardPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 pt-24">
      <div className="text-center px-6">
        <div className="w-24 h-24 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
          <span className="text-3xl font-bold text-white">M</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Shopping Dashboard
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
          Manage your shopping experience. View orders, track deliveries, and manage your account.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <a 
            href="/mart/orders"
            className="px-6 py-4 bg-green-600 text-white rounded-2xl font-semibold hover:bg-green-700 transition-colors"
          >
            My Orders
          </a>
          <a 
            href="/mart/cart"
            className="px-6 py-4 border-2 border-green-600 text-green-600 rounded-2xl font-semibold hover:bg-green-50 transition-colors"
          >
            Shopping Cart
          </a>
          <a 
            href="/mart/wishlist"
            className="px-6 py-4 bg-red-600 text-white rounded-2xl font-semibold hover:bg-red-700 transition-colors"
          >
            Wishlist
          </a>
        </div>
      </div>
    </div>
  );
}