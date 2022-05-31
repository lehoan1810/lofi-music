import React, { useState } from "react";
import { motion } from "framer-motion";
import Logo from "../../assets/images/logo-icon.png";
import Statistic from "../../assets/images/admin-statistic.png";
import Users from "../../assets/images/admin-user.png";
import Mess from "../../assets/images/mess.png";
import Off from "../../assets/images/off.png";
import Password from "../../assets/images/Password.png";
import "./style.scss";
import { Link, NavLink, Outlet } from "react-router-dom";
import { removeLocal } from "../../LocalStorage/getLocal";
import ModalUpdate from "../../common/ModalUpdate";
import ModalChangePassword from "../../common/ModalChangePassword";
import Modal from "react-modal/lib/components/Modal";

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

	const [openModal, setOpenModal] = useState(false);

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
										navData.isActive ? "menuItem actives" : "menuItem"
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

						<div className="menuItem flex-column ">
							<div className="handle-items" onClick={() => setOpenModal(true)}>
								<div className="item-logOut">
									<img className="icon-dashboard" src={Password} alt="" />
									<span>Change Password</span>
								</div>
							</div>
							<div className="handle-items" onClick={handleLogOut}>
								<div className="item-logOut">
									<img src={Off} alt="" />
									<span>LOG OUT</span>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
				<Outlet />
			</div>
			<Modal
				isOpen={openModal}
				ariaHideApp={false}
				onRequestClose={() => setOpenModal(false)}
				style={{
					overlay: {
						backgroundColor: "rgba(0,0,0,0.4)",
					},
					content: {
						width: "30rem",
						margin: "auto",
						height: "31rem",
						borderRadius: "10px",
					},
				}}
			>
				<ModalChangePassword setModalIsOpen={setOpenModal} />
			</Modal>
		</div>
	);
};

export default Sidebar;
