import { Link } from "react-router-dom";
import './Sidebar.css';
import { FaHouse } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { LuPackageOpen } from "react-icons/lu";
import { FiShoppingBag } from "react-icons/fi";
import { MdAnalytics } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import ThemeContextBar from "../../../Context/ThemeContextBar";
import { useContext } from "react";

const Sidebar  = (() =>{
    const { sidbar, iconsidbar } = useContext(ThemeContextBar);
    return(
        <aside className={`sidebar ${sidbar} ${iconsidbar}`}>
            <ul className="ulDiv">
                <li><Link to="/Dashboard"><FaHouse />{iconsidbar==="out" && <span>Dashboard</span>}</Link></li>
                <li><Link to="/Users"><FaUser />{iconsidbar==="out"  && <span>Users</span>}</Link></li>
                <li><Link to="/Products"><LuPackageOpen/>{iconsidbar==="out"  && <span>Products</span>}</Link></li>
                <li><Link to="/Orders"><FiShoppingBag />{iconsidbar==="out"  && <span>Orders</span>}</Link></li>
                <li><Link to="/Analytic"><MdAnalytics />{iconsidbar==="out"  && <span>Analytic</span>}</Link></li>
                <li><Link to="/Setting"><IoSettings />{iconsidbar==="out"  && <span>Setting</span>}</Link></li>
            </ul>
        </aside>
    )
})

export default Sidebar