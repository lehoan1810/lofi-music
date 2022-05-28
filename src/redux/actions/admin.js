import axios from "axios";
import authHeader from "../../sevices";
import { POST_ADMIN, GET_ADMIN } from "../constants/actionAdmin";

export const createAdmin = (userName, name, password) => {
	return async function (dispatch) {
		try {
			const res = await axios.post(
				`${process.env.REACT_APP_LOFI_URL}/rest/admin/regist`,
				{ userName: userName, name: name, password: password },
				{ headers: authHeader() }
			);
			console.log("data admin: ", res.data);

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
