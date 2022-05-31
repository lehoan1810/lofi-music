import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import Home from "../../assets/images/home.png";
import { getLocal } from "../../LocalStorage/getLocal";
import "./style.scss";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../common/Loading";

const Login = () => {
	const navigate = useNavigate();
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	const url = `${process.env.REACT_APP_LOFI_URL}/rest/admin/login`;
	const onSubmit = async (e) => {
		setLoading(true);
		try {
			const response = await axios.post(url, {
				userName,
				password,
			});
			setLoading(false);
			console.log(response.data);

			getLocal("userName", userName);
			getLocal("tokenAdmin", response.data.accessToken);
			toast.success("Đăng nhập thành công !", {
				autoClose: 900,
				hideProgressBar: true,
			});
			navigate("/admin/ManagerUser");
		} catch (error) {
			console.error(error);
			setLoading(false);
			toast.error("Đăng nhập thất bại !", {
				autoClose: 900,
				hideProgressBar: true,
			});
		}
	};
	return (
		<>
			{loading && <Loading />}
			<div className="signin-container">
				<div className="signup">
					<div className="back-home">
						<Link to="/">
							<img src={Home} alt="" />
						</Link>
					</div>
					<h1 className="signup-heading">LOG IN</h1>
					<div className="signup-or">
						<span>Or</span>
					</div>
					<div className="signup-form">
						<label className="signup-label">Full name (*)</label>
						<input
							type="text"
							id="fullname"
							className="signup-input"
							placeholder="Ex. Hồng Ân"
							onChange={(e) => setUserName(e.target.value)}
						/>
						<label className="signup-label">Password (*)</label>
						<input
							type="password"
							id="email"
							className="signup-input"
							placeholder="********"
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button type="button" onClick={onSubmit} className="signup-submit">
							Login
						</button>
					</div>
					<ToastContainer />
				</div>
			</div>
		</>
	);
};

export default Login;
