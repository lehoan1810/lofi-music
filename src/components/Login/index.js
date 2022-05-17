import axios from "axios";
import React, { useState } from "react";
import Home from "../../assets/images/home.png";
import { getLocal } from "../../LocalStorage/getLocal";
import "./style.scss";

const Login = () => {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	const url = `${process.env.REACT_APP_LOFI_URL}/rest/admin/login`;
	const onSubmit = async (e) => {
		try {
			const response = await axios.post(url, {
				userName,
				password,
			});
			console.log(response.data);
			getLocal("userName", userName);
			getLocal("token", response.data.accessToken);
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div className="signin-container">
			<div className="signup">
				<div className="back-home">
					<img src={Home} alt="" />
				</div>
				<h1 className="signup-heading">Sign up</h1>
				<div className="signup-or">
					<span>Or</span>
				</div>
				<div className="signup-form">
					<label className="signup-label">Full name</label>
					<input
						type="text"
						id="fullname"
						className="signup-input"
						placeholder="Eg: John Doe"
						onChange={(e) => setUserName(e.target.value)}
					/>
					<label className="signup-label">Email</label>
					<input
						type="password"
						id="email"
						className="signup-input"
						placeholder="********"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button onClick={onSubmit} className="signup-submit">
						Login
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
