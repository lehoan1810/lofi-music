import axios from "axios";
import authHeader from "../../sevices";
import { GET_RATING, POST_RATING } from "../constants/actionRating";
export const createRating = (payload) => {
	return async function (dispatch) {
		try {
			const res = await axios.post(
				`${process.env.REACT_APP_LOFI_URL}/rest/danh-gia`,
				{ badWord: payload },
				{ headers: authHeader() }
			);
			console.log("action data: ", res.data);

			dispatch({
				type: POST_RATING,
				payload: res.data,
				loading: false,
			});
		} catch (err) {
			console.log(err);
		}
	};
};
export const getListRating = (payload) => {
	return async function (dispatch) {
		try {
			const res = await axios.get(
				`${process.env.REACT_APP_LOFI_URL}/rest/admin/bad-word`,
				{ badWord: payload },
				{ headers: authHeader() }
			);
			console.log("sction data: ", res.data);

			dispatch({
				type: GET_RATING,
				payload: res.data,
				loading: false,
			});
		} catch (err) {
			console.log(err);
		}
	};
};
