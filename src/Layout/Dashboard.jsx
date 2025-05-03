import { NavLink, Outlet } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { IoHome } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { MdEmail, MdReviews } from "react-icons/md";
import { FaBook, FaList, FaListUl, FaUsers, FaUtensils } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import useCarts from "../hooks/useCarts";
import useAdmin from "../hooks/useAdmin";
const Dashboard = () => {
  const [cart] = useCarts();

  // TODO: Get is Admin value from the database
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      {/* Dashboard Content */}
      <div className="w-64  min-h-screen bg-orange-400">
        <ul className="p-4 text-black space-y-3 w-60 mx-auto ">
          {isAdmin ? (
            <>
              <li className="flex items-center gap-3 text-2xl font-semibold">
                <IoHome className="text-3xl"> </IoHome>
                <NavLink to="/dashboard/admin-home"> Admin Home</NavLink>
              </li>

              <li className="flex items-center gap-3 text-2xl font-semibold">
                <FaUtensils className="text-3xl"> </FaUtensils>
                <NavLink to="/dashboard/add-items"> Add Items</NavLink>
              </li>
              <li className="flex items-center gap-3 text-2xl font-semibold">
                <FaListUl className="text-3xl"> </FaListUl>
                
                <NavLink to="/dashboard/manage-items">Manage Items</NavLink>
              </li>
              <li className="flex items-center gap-3 text-2xl font-semibold">
                <FaBook className="text-3xl"> </FaBook>
                
                <NavLink to="/dashboard/manage-bookings">Manage Bookings</NavLink>
              </li>
              
              <li className="flex items-center gap-3 text-2xl font-semibold">
                <FaUsers className="text-3xl"> </FaUsers>
                <NavLink to="/dashboard/users"> My All Users</NavLink>
              </li>
            </>
          ) : (
            // For normal user
            <>
              <li className="flex items-center gap-3 text-2xl font-semibold">
                <IoHome className="text-3xl"> </IoHome>
                <NavLink to="/dashboard/user-home"> User Home</NavLink>
              </li>
              <li className="flex items-center gap-3 text-2xl font-semibold">
                <HiShoppingCart className="text-3xl"> </HiShoppingCart>
                <NavLink to="/dashboard/cart">
                  {" "}
                  My Cart <span className="text-red-500">
                    {" "}
                    {cart.length}
                  </span>{" "}
                </NavLink>
              </li>
              <li className="flex items-center gap-3 text-2xl font-semibold">
                <SlCalender className="text-3xl"> </SlCalender>
                <NavLink to="/dashboard/reserve"> Reservation</NavLink>
              </li>
              <li className="flex items-center gap-3 text-2xl font-semibold">
                <MdReviews className="text-3xl"> </MdReviews>
                <NavLink to="/dashboard/review">Add Review</NavLink>
              </li>
              <li className="flex items-center gap-3 text-2xl font-semibold">
                <FaList className="text-3xl"> </FaList>
                <NavLink to="/dashboard/bookings"> My Bookings</NavLink>
              </li>
            </>
          )}

          {/* Shared NAV links for all users  */}

          <hr />

          <li className="flex items-center gap-3 text-2xl font-semibold">
            <IoHome className="text-3xl"> </IoHome>
            <NavLink to="/"> Home</NavLink>
          </li>
          <li className="flex items-center gap-3 text-2xl font-semibold">
            <HiMenu className="text-3xl"> </HiMenu>
            <NavLink to="/order/salad"> Menu</NavLink>
          </li>
          <li className="flex items-center gap-3 text-2xl font-semibold">
            <MdEmail className="text-3xl"> </MdEmail>

            <NavLink to="/order/salad"> Contact</NavLink>
          </li>
        </ul>
      </div>
      {/* Sidebar */}
      <div className="flex-1 p-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
