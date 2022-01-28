import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeDayNight } from "../../redux/actions";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import "./style.scss";

const Header = () => {
	const daynight = useSelector((state) => state.modeState);
	console.log("daynight: ", daynight);
	const dispatch = useDispatch();
	const { mode } = daynight;
	const checkDarkMode = () => {
		dispatch(changeDayNight(mode));
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
					<i className="bx bx-fullscreen"></i>
					<div className="btn-share">
						<button>Share</button>
					</div>
					<div className="btn-signUp">
						<button>Sign up</button>
					</div>
					<div className="btn-login">
						<button>Login</button>
					</div>
				</div>
			</nav>
			<Container check={mode} />
		</>
	);
};

export default Header;
