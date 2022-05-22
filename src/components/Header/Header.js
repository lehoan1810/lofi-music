import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeDayNight } from "../../redux/actions";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import "./style.scss";
import ModalCreateName from "../../common/ModalCreateName";
import SelectLogin from "../../common/ModalSelectLogin";

const Header = () => {
	const daynight = useSelector((state) => state.modeState);

	const [openModal, setOpenModal] = useState(true);

	const dispatch = useDispatch();
	const { mode } = daynight;
	const checkDarkMode = () => {
		dispatch(changeDayNight(mode));
	};
	const [fullscreen, setFullscreen] = useState(false);
	const fullscreenHandler = () => {
		if (!fullscreen) {
			setFullscreen(true);
			const e = document.documentElement;
			e.requestFullscreen();
		} else {
			setFullscreen(false);
			if (!document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.webkitExitFullscreen) {
				/* With Safari */
				document.webkitExitFullscreen();
			} else if (document.msExitFullscreen) {
				/* With IE */
				document.msExitFullscreen();
			}
		}
	};
	return (
		<>
			<nav className="wrapper">
				<div className="nav-home-icon">
					<Link to="/">
						<img src="https://lofi.co/static/media/logo.0cbf9e63.gif" alt="" />
					</Link>
				</div>
				<div className="nav-menu">
					<div className="nav-item">
						<Link to="/">How it works</Link>
					</div>
					<div className="nav-item">
						<Link to="/">Pricing</Link>
					</div>
					<div className="nav-item">
						<Link to="/">Contact us</Link>
					</div>
					<div className="nav-item">
						<Link to="/">More</Link>
					</div>
					<div className="nav-item">
						<Link to="/">Merch</Link>
					</div>
				</div>
				<div className="nav-menu-handle">
					<div className="btn-dark-mode">
						<input
							onChange={checkDarkMode}
							type="checkbox"
							id="switch"
							className="switch-input"
						/>
						<label htmlFor="switch" className="switch">
							<i className={mode === "day" ? "bx bx-sun" : "bx bx-moon"}></i>
						</label>
					</div>
					<div onClick={fullscreenHandler}>
						<i className="bx bx-fullscreen"></i>
					</div>
					{/* <div className="btn-share">
						<button>Share</button>
					</div>
					<div className="btn-signUp">
						<button>Sign up</button>
					</div> */}
					<div className="btn-login">
						<button>
							<Link className="link-login" to="/login" href="">
								Login
							</Link>
						</button>
					</div>
				</div>
			</nav>
			<ModalCreateName openModal={openModal} setOpenModal={setOpenModal} />
			<Container check={mode} />
		</>
	);
};

export default Header;
