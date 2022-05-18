import React from "react";
import { Link } from "react-router-dom";
import Exit from "../../assets/images/exit.png";
import "./style.scss";

const SelectLogin = (prop) => {
	const { openModal, setOpenModal } = prop;
	return (
		<div>
			{openModal && (
				<div className="overlay">
					<div className="modal">
						<h2 className="title-modal">You Are !</h2>
						<div onClick={() => setOpenModal(false)} className="exit">
							<img src={Exit} alt="" />
						</div>
						<span></span>
						{/* <div className="btn-select-account"></div> */}
						<div className="btn-select-account">
							<Link to="/login" href="">
								<button>Admin</button>
							</Link>

							<button>User</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default SelectLogin;
