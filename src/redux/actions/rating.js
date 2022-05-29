import axios from "axios";
import { toast } from "react-toastify";
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
			toast.success("Đánh giá thành công !", {
				autoClose: 900,
				hideProgressBar: true,
			});

			dispatch({
				type: POST_RATING,
				payload: res.data,
				loading: false,
			});
		} catch (err) {
			console.log(err);
			toast.error("Đánh giá thất bại !", {
				autoClose: 900,
				hideProgressBar: true,
			});
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
