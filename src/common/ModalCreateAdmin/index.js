import React, { useState } from "react";
import Exit from "../../assets/images/exit.png";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import { createAdmin } from "../../redux/actions/admin";

const ModalCreateAdmin = (prop) => {
	const { setModalIsOpen } = prop;
	const [user, setUser] = useState("");
	const [userName, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();

	const handelUpdate = () => {
		dispatch(createAdmin(user, userName, password));
		setModalIsOpen(false);
	};

	return (
		<>
			<div className="from-update">
				<h1>Create admin</h1>
				<input
					onChange={(e) => setUser(e.target.value)}
					type="text"
					placeholder="Tên đăng nhập"
				/>
				<input
					onChange={(e) => setUsername(e.target.value)}
					type="text"
					placeholder="Họ và Tên"
				/>
				<input
					onChange={(e) => setPassword(e.target.value)}
					type="text"
					placeholder="Mật khẩu"
				/>
				<div className="handel-badWord">
					<button
						onClick={() => {
							setModalIsOpen(false);
						}}
					>
						Cancel
					</button>
					<button onClick={handelUpdate}>Add</button>
				</div>
			</div>
		</>
	);
};

export default ModalCreateAdmin;
