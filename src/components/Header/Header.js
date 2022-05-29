import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeDayNight } from "../../redux/actions";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import "./style.scss";
import ModalCreateName from "../../common/ModalCreateName";
import Rating from "../../assets/images/rating.png";
import ModalRating from "../../common/ModalRating";
import Modal from "react-modal/lib/components/Modal";
import Logo from "../../assets/images/logo-gif.gif";

const Header = () => {
	const daynight = useSelector((state) => state.modeState);

	const [openModal, setOpenModal] = useState(true);
	const [openModalRating, setOpenModalRating] = useState(true);

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
	const handelShowModal = () => {
		setOpenModalRating(true);
		console.log("show mdal");
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
						<div className="nav-item">
							<Link to="/">Contact us</Link>
						</div>
						<div className="nav-item">
							<Link to="/">More</Link>
						</div>
						<div className="nav-item">
							<Link to="/">Settings</Link>
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

						<div onClick={handelShowModal} className="btn-rating">
							<img className="icon-rating" src={Rating} alt="" />
							<span>Rating </span>
						</div>
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
			<Modal
				isOpen={openModalRating}
				ariaHideApp={false}
				onRequestClose={() => setOpenModalRating(false)}
				style={{
					overlay: {
						backgroundColor: "rgba(0,0,0,0.4)",
					},
					content: {
						width: "30rem",
						margin: "auto",
						height: "27rem",
						borderRadius: "10px",
					},
				}}
			>
				<ModalRating setOpenModal={setOpenModalRating} />
			</Modal>
		</>
	);
};

export default Header;
