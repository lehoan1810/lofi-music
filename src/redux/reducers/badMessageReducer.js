import { UPDATE_BAD_MESSAGE } from "../constants/action.badMessage";
import { POST_BAD_MESSAGE } from "../constants/action.badMessage";
import { GET_BAD_MESSAGE } from "../constants/action.badMessage";
import { DELETE_BAD_MESSAGE } from "../constants/action.badMessage";

const INITIAL_STATE = {
	list: [],
};

const badMessageReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_BAD_MESSAGE:
			return {
				...state,
				list: action.payload,
			};
		case POST_BAD_MESSAGE:
			return {
				...state,
				list: [...state.list, action.payload],
			};
		case UPDATE_BAD_MESSAGE:
			return {
				list: state.list.map((item) => {
					if (item.id === action.payload.id) {
						return { ...item, badWord: action.payload.badWord };
					} else return item;
				}),
			};
		case DELETE_BAD_MESSAGE:
			const newList = [...state.list];
			const idBadWord = action.payload;
			const data = newList.filter((item) => item.id !== idBadWord);
			return {
				...state,
				list: data,
			};
		default:
			return state;
	}
};

export default badMessageReducer;
