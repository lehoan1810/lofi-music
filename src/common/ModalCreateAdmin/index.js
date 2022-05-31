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
				<span className="title-change-pass">Tên đăng nhập (*)</span>
				<input
					onChange={(e) => setUser(e.target.value)}
					type="text"
					placeholder="Tên đăng nhập"
				/>
				<span className="title-change-pass">Họ và Tên (*)</span>
				<input
					onChange={(e) => setUsername(e.target.value)}
					type="text"
					placeholder="Họ và Tên"
				/>
				<span className="title-change-pass">Mật khẩu (*)</span>
				<input
					onChange={(e) => setPassword(e.target.value)}
					type="password"
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
