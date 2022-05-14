import React, { useState } from "react";
import Exit from "../../assets/images/exit.png";
import axios from "axios";
import "./style.scss";
import { getLocal } from "../../LocalStorage/getLocal";

const ModalCreateName = (prop) => {
	const { openModal, setOpenModal } = prop;
	const [name, setName] = useState("");
	const url = `${process.env.REACT_APP_LOFI_URL}/rest/message/dk-ten`;
	const handelRegister = async () => {
		try {
			const res = await axios.post(url, { name: name });
			getLocal("token", res.data.token);
			getLocal("name", res.data.name);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			{openModal && (
				<div className="overlay">
					<div className="modal">
						<h2 className="title-modal">Mời bạn nhập tên !</h2>
						<div onClick={() => setOpenModal(false)} className="exit">
							<img src={Exit} alt="" />
						</div>
						<div className="content">
							<input
								className="input-name"
								type="text"
								placeholder="Nhập tên ..."
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
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
