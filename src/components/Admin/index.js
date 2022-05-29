import React, { useState } from "react";
import { motion } from "framer-motion";
import Logo from "../../assets/images/logo-icon.png";
import Statistic from "../../assets/images/admin-statistic.png";
import Users from "../../assets/images/admin-user.png";
import Mess from "../../assets/images/mess.png";
import Off from "../../assets/images/off.png";
import "./style.scss";
import { Link, NavLink, Outlet } from "react-router-dom";
import { removeLocal } from "../../LocalStorage/getLocal";
import ModalUpdate from "../../common/ModalUpdate";

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
	{
		icon: <img className="icon-dashboard" src={Mess} alt="" />,
		heading: "Manager Message",
		link: "/admin/ManagerMessage",
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

	const handleLogOut = () => {
		removeLocal("name");
		removeLocal("userName");
		removeLocal("token");
		removeLocal("tokenAdmin");
		window.location = "/";
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
						<div onClick={handleLogOut} className="menuItem ">
							<div className="item-logOut">
								<span>LOG OUT</span>
								<img src={Off} alt="" />
							</div>
						</div>
					</div>
				</motion.div>
				<Outlet />
			</div>
		</div>
	);
};

export default Sidebar;
