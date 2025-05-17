import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { HiShoppingCart } from "react-icons/hi";
import useCarts from "../../hooks/useCarts";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCarts();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navItems = (
    <>
      <li>
        <NavLink to="/" className="font-medium hover:text-blue-500">Home</NavLink>
      </li>
      <li>
        <NavLink to="/menu" className="font-medium hover:text-blue-500">Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order/salad" className="font-medium hover:text-blue-500">Order</NavLink>
      </li>
      <li>
        <Link to="/dashboard/cart" className="relative">
          <HiShoppingCart className="text-2xl" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
            {cart.length}
          </span>
        </Link>
      </li>
 
    </>
  );

  return (
    <div className="navbar container fixed z-50 top-0 bg-white bg-opacity-30 shadow-md backdrop-blur-md px-4 py-3">
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="text-xl font-bold tracking-tight text-gray-800">
            Bistro Boss
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal gap-6">{navItems}</ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden dropdown">
          <label tabIndex={0} className="btn btn-ghost p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-3 shadow bg-white rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>

        {/* Optional Right Button */}
            {user ? (
        <li>
          <button onClick={handleLogOut} className="font-medium hover:text-red-500">
            Logout
          </button>
        </li>
      ) : (
        <li>
          <NavLink to="/login" className="font-medium hover:text-blue-500">Login</NavLink>
        </li>
      )}
      </div>
    </div>
  );
};

export default Navbar;
