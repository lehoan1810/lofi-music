import axios from "axios";
import authHeader from "../../sevices";
import { USER_CURRENT } from "../constants/actionAdmin";

export const getUserCurrent = (payload) => {
	return async function (dispatch) {
		try {
			const res = await axios.get(
				`${process.env.REACT_APP_LOFI_URL}/rest/admin/number-user`,
				{ headers: authHeader() }
			);
			console.log("number-user data: ", res.data);

			dispatch({
				type: USER_CURRENT,
				payload: res.data,
				loading: false,
			});
		} catch (err) {
			console.log(err);
		}
	};
};
