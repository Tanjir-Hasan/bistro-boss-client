import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { BsFillWalletFill, BsFillCartPlusFill, BsMenuDown, BsCalendarHeart } from 'react-icons/bs';
import { GrOrderedList } from 'react-icons/gr';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side font-medium bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <h3></h3>
                <ul className="menu p-4 w-80  text-base-content">
                    <li><NavLink to="/dashboard/userHome"><FaHome />User Home</NavLink></li>
                    <li><NavLink to="/dashboard/reservations"><BsCalendarHeart />Reservation</NavLink></li>
                    <li><NavLink to="/dashboard/paymentHistory"><BsFillWalletFill />Payment History</NavLink></li>
                    <li><NavLink to="/dashboard/mycart"><BsFillCartPlusFill />My cart</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome />Home</NavLink></li>
                    <li><NavLink to="/menu"><BsMenuDown />Our Menu</NavLink></li>
                    <li><NavLink to="/order/salad"><GrOrderedList />Order</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;