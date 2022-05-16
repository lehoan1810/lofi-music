import React, { useState } from "react";
// import { UilSignOutAlt } from "@iconscout/react-unicons";
// import { SidebarData } from "../Data/Data";
// import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import Logo from "../../assets/images/logo-icon.png";
import Statistic from "../../assets/images/admin-statistic.png";
import Users from "../../assets/images/admin-user.png";
import "./style.scss";
import { Link, NavLink, Outlet } from "react-router-dom";

const SidebarData = [
	{
		icon: <img className="icon-dashboard" src={Users} alt="" />,
		heading: "Manager",
		link: "/admin/ManagerUser",
	},
	{
		icon: <img className="icon-dashboard" src={Statistic} alt="" />,
		heading: "Statistic",
		link: "/admin/ManagerStatistic",
	},
];
const Sidebar = () => {
	const [selected, setSelected] = useState(0);

	const [expanded, setExpaned] = useState(true);

	const sidebarVariants = {
		true: {
			left: "0",
		},
		false: {
			left: "-60%",
		},
	};
	return (
		<div className="dashboard-admin">
			<div className="AppGlass">
				<motion.div
					className="sidebar"
					variants={sidebarVariants}
					animate={window.innerWidth <= 768 ? `${expanded}` : ""}
				>
					{/* logo */}
					<div className="logo">
						<img src={Logo} alt="logo" />
						<span>
							Lo<span>F</span>i
						</span>
					</div>

					<div className="menu">
						{SidebarData.map((item, index) => {
							return (
								<NavLink
									to={item.link}
									className={(navData) =>
										navData.isActive ? "menuItem active" : "menuItem"
									}
									key={index}
									onClick={() => setSelected(index)}
								>
									{item.icon}
									<div>
										<span>{item.heading}</span>
									</div>
								</NavLink>
							);
						})}
						<div className="menuItem"></div>
					</div>
				</motion.div>
				<Outlet />
			</div>
		</div>
	);
};

export default Sidebar;
