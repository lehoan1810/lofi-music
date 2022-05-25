import { GET_MESSAGE, APPEND_MESSAGE } from "../constants/message";

const INITIAL_STATE = {
	list: [],
};

const MessageReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_MESSAGE:
			return {
				...state,
				list: action.payload,
			};
		case APPEND_MESSAGE:
			return {
				...state,
				list: [...state.list, action.payload],
			};

		default:
			return state;
	}
};

export default MessageReducer;
