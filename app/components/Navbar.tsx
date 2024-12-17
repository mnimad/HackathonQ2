const Navbar = () => {
    return (
      <header>
        {/* Top Navbar */}
        <div className="flex justify-between items-center px-6 py-2 bg-purple-700 text-white text-sm">
          <div className="flex space-x-6">
            <span>📧 mhhasanul@gmail.com</span>
            <span>📞 (12345)67890</span>
          </div>
          <div className="flex space-x-6 items-center">
            <select className="bg-transparent outline-none">
              <option>English</option>
              <option>Spanish</option>
            </select>
            <span>USD</span>
            <a href="#" className="hover:underline">Login</a>
            <a href="#" className="hover:underline">Wishlist ❤️</a>
          </div>
        </div>
  
        {/* Main Navbar */}
        <div className="flex justify-between items-center px-6 py-4 bg-white border-b border-gray-200">
          {/* Logo */}
          <div>
            <h1 className="text-3xl font-bold text-purple-700">Hekto</h1>
          </div>
  
          {/* Navigation Links */}
          <nav className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-purple-700">Home</a>
            <a href="#" className="text-gray-600 hover:text-purple-700">Pages</a>
            <a href="#" className="text-gray-600 hover:text-purple-700">Products</a>
            <a href="#" className="text-gray-600 hover:text-purple-700">Blog</a>
            <a href="#" className="text-gray-600 hover:text-purple-700">Shop</a>
            <a href="#" className="text-gray-600 hover:text-purple-700">Contact</a>
          </nav>
  
          {/* Search Bar */}
          <div className="flex">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 px-2 py-1 rounded-l-md focus:outline-none"
            />
            <button className="bg-purple-700 text-white px-3 py-1 rounded-r-md">
              🔍
            </button>
          </div>
        </div>
      </header>
    );
  };
  
  export default Navbar;
  