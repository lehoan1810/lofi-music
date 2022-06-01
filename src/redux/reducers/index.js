import { combineReducers } from "redux";
import modeReducer from "./modeReducer";
import rainReducer from "./rainReducer";
import moodReducer from "./moodReducer";
import volumeReducer from "./volumeReducer";
import badMessageReducer from "./badMessageReducer";
import MessageReducer from "./messageReducer";
import ratingReducer from "./ratingReducer";
import statisticReducer from "./statisticReducer";
import AddAdmin from "./adminReducer";
import getCurrentUser from "./userReducer";

export const rootReducer = combineReducers({
	modeState: modeReducer,
	rainState: rainReducer,
	moodState: moodReducer,
	volumeState: volumeReducer,
	badMessageState: badMessageReducer,
	MessageReducer: MessageReducer,
	ratingReducer: ratingReducer,
	statisticReducer: statisticReducer,
	AddAdmin: AddAdmin,
	getCurrentUser: getCurrentUser,
});
