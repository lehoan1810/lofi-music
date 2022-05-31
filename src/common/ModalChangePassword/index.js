import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changePassWord } from "../../redux/actions/admin";
import { toast } from "react-toastify";
import "./style.scss";

const ModalChangePassword = (props) => {
	const { setModalIsOpen } = props;
	const dispatch = useDispatch();
	const [password, setPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const handleChange = () => {
		if (newPassword && confirmPassword && password) {
			if (newPassword !== confirmPassword) {
				toast.error("Mật khẩu nhập lại không hợp lệ !", {
					autoClose: 900,
					hideProgressBar: true,
				});
				return;
			} else {
				dispatch(changePassWord(password, newPassword));
			}
		} else {
			toast.error("Thông tin chưa hợp lệ, vui lòng thử lại !", {
				autoClose: 900,
				hideProgressBar: true,
			});
			return;
		}
	};
	return (
		<div>
			{" "}
			<div className="from-update">
				<h1>Change Password</h1>
				<span className="title-change-pass">Nhập mật khẩu hiện tại (*)</span>
				<input
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Nhập mật khẩu hiện tại"
				/>
				<span className="title-change-pass">Nhập mật khẩu mới (*)</span>
				<input
					onChange={(e) => setNewPassword(e.target.value)}
					type="password"
					placeholder="Nhập mật khẩu mới"
				/>
				<span className="title-change-pass">Nhập lại mật khẩu (*)</span>
				<input
					onChange={(e) => setConfirmPassword(e.target.value)}
					type="password"
					placeholder="Nhập lại mật khẩu"
				/>
				<div className="handle-change-password">
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
