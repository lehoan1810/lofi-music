import React, { useState } from "react";

const ModalChangePassword = (props) => {
	const { setModalIsOpen } = props;
	const [password, setPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const handleChange = () => {};
	return (
		<div>
			{" "}
			<div className="from-update">
				<h1>Create admin</h1>
				<input
					onChange={(e) => setPassword(e.target.value)}
					type="text"
					placeholder="Nhập mật khẩu hiện tại"
				/>
				<input
					onChange={(e) => setNewPassword(e.target.value)}
					type="text"
					placeholder="Nhập mật khẩu mới"
				/>
				<input
					onChange={(e) => setConfirmPassword(e.target.value)}
					type="text"
					placeholder="Mật khẩu"
				/>
				<div className="Nhập lại mật khẩu">
					<button
						onClick={() => {
							setModalIsOpen(false);
						}}
					>
						Cancel
					</button>
					<button onClick={handleChange}>Change</button>
				</div>
			</div>
		</div>
	);
};

export default ModalChangePassword;
