import React, { useState, useEffect } from "react";
import Exit from "../../assets/images/exit.png";
import axios from "axios";
import "./style.scss";
import { getLocal, setLocal } from "../../LocalStorage/getLocal";

import { toast } from "react-toastify";

const ModalCreateName = (prop) => {
	const { openModal, setOpenModal } = prop;
	const [name, setName] = useState("");
	const [error, setError] = useState("");
	const checkToken = setLocal("token");
	const checkName = setLocal("name");
	const url = `https://lofi-chill-chatting.herokuapp.com/rest/message/dk-ten`;
	const handelRegister = async () => {
		try {
			const res = await axios.post(url, { name: name });
			setError("success");
			getLocal("token", res.data.token);
			getLocal("name", res.data.name);
			window.location.reload();
		} catch (error) {
			console.error(error.message);
			setError("faild");
		}
	};

	useEffect(() => {
		if (checkToken && checkName) {
			setOpenModal(false);
		}
	}, []);

	return (
		<>
			{openModal && (
				<div className="overlay">
					<div className="modals">
						<h2 className="title-modals">Mời bạn nhập tên !</h2>
						<div onClick={() => setOpenModal(false)} className="exit">
							<img src={Exit} alt="" />
						</div>

						<div className="contents">
							<input
								className="input-name"
								type="text"
								placeholder="Nhập tên ..."
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						{error === "faild" ? (
							<span className="err-title">
								Bạn vui lòng nhập lớn hơn 6 ký tự (*)
							</span>
						) : error === "success" ? (
							<span className="success-title">Thành công</span>
						) : (
							""
						)}

						<span></span>
						<div className="btn-create-name">
							<button onClick={handelRegister}>Đăng ký</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default ModalCreateName;
