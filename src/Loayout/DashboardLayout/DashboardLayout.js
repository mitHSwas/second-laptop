import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useBuyer from '../../hooks/useBuyer';
import useSeller from '../../hooks/useSeller';
import useAdmin from '../../hooks/useAdmin';
import Header from '../../pages/Shared/Header/Header';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isBuyer] = useBuyer(user?.email)
    const [isSeller] = useSeller(user?.email)
    const [isAdmin] = useAdmin(user?.email);
    return (
        <div>
            <Header></Header>
            <div className="container mx-auto drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-60 font-semibold text-base-content">
                        {
                            isBuyer && <li><Link className='hover:bg-amber-300 rounded-lg text-xl mx-auto' to="/dashboard/myorder">My Orders</Link></li>
                        }
                        {
                            isSeller && <>
                                <li><Link className='hover:bg-amber-300 rounded-lg text-xl mx-auto' to="/dashboard/addproduct">Add Product</Link></li>
                                <li><Link className='hover:bg-amber-300 rounded-lg text-xl mx-auto mt-2' to="/dashboard/myproducts">My Products</Link></li>
                            </>
                        }
                        {
                            isAdmin && <>
                                <li><Link className='hover:bg-amber-300 rounded-lg text-xl mx-auto' to="/dashboard/allbuyers">All Buyers</Link></li>
                                <li><Link className='hover:bg-amber-300 rounded-lg text-xl mx-auto mt-2' to="/dashboard/allsellers">All Sellers</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;