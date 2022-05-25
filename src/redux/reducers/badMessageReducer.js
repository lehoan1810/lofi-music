import { UPDATE_BAD_MESSAGE } from "../constants/action.badMessage";
import { POST_BAD_MESSAGE } from "../constants/action.badMessage";
import { GET_BAD_MESSAGE } from "../constants/action.badMessage";

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
				...state,
				list: [...state.list, action.payload],
			};
		default:
			return state;
	}
};

export default badMessageReducer;
