import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeDayNight } from "../../redux/actions";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import "./style.scss";
import ModalCreateName from "../../common/ModalCreateName";
import Rating from "../../assets/images/rating.png";
import Logo from "../../assets/images/logo-gif.gif";

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
			<div>
				<nav className="wrapper">
					<div className="nav-home-icon">
						<Link to="/">
							<img src={Logo} alt="" />
						</Link>
					</div>
					<div className="nav-menu">
						<div className="nav-item tooltip">
							<Link to="/">
								Contact us
								<span className="tooltiptext">Comming soon</span>
							</Link>
						</div>
						<div className="nav-item tooltip">
							<Link to="/">
								More
								<span className="tooltiptext">Comming soon</span>
							</Link>
						</div>
						<div className="nav-item tooltip">
							<Link to="/">
								Settings
								<span className="tooltiptext">Comming soon</span>
							</Link>
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

						<Link to="/rating" href="" className="btn-rating">
							<img className="icon-rating" src={Rating} alt="" />
							<span>Rating </span>
						</Link>
						<div className="btn-login">
							<button>
								<Link className="link-login" to="/login" href="">
									Login
								</Link>
							</button>
						</div>
					</div>
				</nav>
			</div>
			<ModalCreateName openModal={openModal} setOpenModal={setOpenModal} />

			<Container check={mode} />
		</>
	);
};

export default Header;
