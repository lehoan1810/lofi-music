import axios from "axios";
import authHeader from "../../sevices";
import {
	GET_BAD_MESSAGE,
	LOADING,
	POST_BAD_MESSAGE,
	DELETE_BAD_MESSAGE,
	UPDATE_BAD_MESSAGE,
} from "../constants/action.badMessage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
export const badMessage = () => {
	return async function (dispatch) {
		dispatch({
			type: LOADING,
			payload: [],
			loading: true,
		});
		try {
			const res = await axios.get(
				`${process.env.REACT_APP_LOFI_URL}/rest/admin/bad-word`,
				{ headers: authHeader() }
			);

			dispatch({
				type: GET_BAD_MESSAGE,
				payload: res.data,
				loading: false,
			});
		} catch (err) {
			console.log(err);
		}
	};
};

export const createBadWord = (payload) => {
	return async function (dispatch) {
		try {
			const res = await axios.post(
				`${process.env.REACT_APP_LOFI_URL}/rest/admin/bad-word`,
				{ badWord: payload },
				{ headers: authHeader() }
			);
			console.log("sction data: ", res.data);
			toast.success("Tạo thành công !", {
				autoClose: 900,
				hideProgressBar: true,
			});

			dispatch({
				type: POST_BAD_MESSAGE,
				payload: res.data,
				loading: false,
			});
		} catch (err) {
			console.log(err);
			toast.error("Bạn nhập ký tự quá ngắn !", {
				autoClose: 900,
				hideProgressBar: true,
			});
		}
	};
};
export const updateBadWord = (idBadWord, payload) => {
	return async function (dispatch) {
		try {
			const res = await axios.put(
				`${process.env.REACT_APP_LOFI_URL}/rest/admin/bad-word/${idBadWord}`,
				{ badWord: payload },
				{ headers: authHeader() }
			);
			toast.success("Cập nhập thành công !", {
				autoClose: 900,
				hideProgressBar: true,
			});

			dispatch({
				type: UPDATE_BAD_MESSAGE,
				payload: res.data,
				loading: false,
			});
		} catch (err) {
			console.log(err);
			toast.error("Cập nhập thất bại !", {
				autoClose: 900,
				hideProgressBar: true,
			});
		}
	};
};
export const deleteBadWord = (idBadWord) => {
	return async function (dispatch) {
		try {
			const res = await axios.delete(
				`${process.env.REACT_APP_LOFI_URL}/rest/admin/bad-word/${idBadWord}`,
				{ headers: authHeader() }
			);
			toast.success("Xóa thành công !", {
				autoClose: 900,
				hideProgressBar: true,
			});

			dispatch({
				type: DELETE_BAD_MESSAGE,
				payload: idBadWord,
				loading: false,
			});
		} catch (err) {
			console.log(err);
			toast.error("Xóa thất bại !");
		}
	};
};
