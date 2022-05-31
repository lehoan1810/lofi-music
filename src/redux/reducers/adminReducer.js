import {
	CHANGE_PASSWORD,
	GET_ADMIN,
	POST_ADMIN,
} from "../constants/actionAdmin";

const INITIAL_STATE = {
	list: [],
};

const AddAdmin = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case POST_ADMIN:
			return {
				...state,
				list: [...state.list, action.payload],
			};
		case GET_ADMIN:
			return {
				...state,
				list: action.payload,
			};
		case CHANGE_PASSWORD:
			return;

		default:
			return state;
	}
};

export default AddAdmin;
