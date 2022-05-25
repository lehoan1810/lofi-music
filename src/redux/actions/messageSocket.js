import axios from "axios";
import authHeader from "../../sevices";
import { GET_MESSAGE, APPEND_MESSAGE } from "../constants/message";
export const getMessage = (payload) => {
	return async function (dispatch) {
		try {
			const res = await axios.get(
				`${process.env.REACT_APP_LOFI_URL}/rest/message/${payload}`,
				{ headers: authHeader() }
			);

			dispatch({
				type: GET_MESSAGE,
				payload: res.data,
			});
		} catch (err) {
			console.log(err);
		}
	};
};
export const appendMessage = (payload) => ({
	type: APPEND_MESSAGE,
	payload: payload,
});
