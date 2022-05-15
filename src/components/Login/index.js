import React from "react";
import Home from "../../assets/images/home.png";
import "./style.scss";

const Login = () => {
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
					/>
					<label className="signup-label">Email</label>
					<input
						type="email"
						id="email"
						className="signup-input"
						placeholder="Eg: johndoe@gmai.com"
					/>
					<button className="signup-submit">Login</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
