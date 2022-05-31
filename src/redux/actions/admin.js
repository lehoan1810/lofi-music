import axios from "axios";
import { toast } from "react-toastify";
import { removeLocal } from "../../LocalStorage/getLocal";
import authHeader from "../../sevices";
import {
	POST_ADMIN,
	GET_ADMIN,
	CHANGE_PASSWORD,
} from "../constants/actionAdmin";

export const createAdmin = (userName, name, password) => {
	return async function (dispatch) {
		try {
			const res = await axios.post(
				`${process.env.REACT_APP_LOFI_URL}/rest/admin/regist`,
				{ userName: userName, name: name, password: password },
				{ headers: authHeader() }
			);

			dispatch({
				type: POST_ADMIN,
				payload: res.data,
				loading: false,
			});
		} catch (err) {
			console.log(err);
		}
	};
};

export const getListAdmin = () => {
	return async function (dispatch) {
		try {
			const res = await axios.get(
				`${process.env.REACT_APP_LOFI_URL}/rest/admin/list-admin`,
				{ headers: authHeader() }
			);

			dispatch({
				type: GET_ADMIN,
				payload: res.data,
				loading: false,
			});
		} catch (err) {
			console.log(err);
		}
	};
};

export const changePassWord = (oldPass, newPass) => {
	return async function (dispatch) {
		try {
			const res = await axios.post(
				`${process.env.REACT_APP_LOFI_URL}/rest/admin/change-pass`,
				{ oldPass: oldPass, newPass: newPass },
				{ headers: authHeader() }
			);
			toast.success("Thay đổi mật khẩu thành công !");
			removeLocal("name");
			removeLocal("userName");
			removeLocal("token");
			removeLocal("tokenAdmin");
			window.location = "/";
			dispatch({
				type: CHANGE_PASSWORD,
				payload: res.data,
				loading: false,
			});
		} catch (err) {
			console.log(err);
		}
	};
};
