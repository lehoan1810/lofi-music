import { combineReducers } from "redux";
import modeReducer from "./modeReducer";
import rainReducer from "./rainReducer";
import moodReducer from "./moodReducer";
import volumeReducer from "./volumeReducer";
import badMessageReducer from "./badMessageReducer";
import MessageReducer from "./messageReducer";

export const rootReducer = combineReducers({
	modeState: modeReducer,
	rainState: rainReducer,
	moodState: moodReducer,
	volumeState: volumeReducer,
	badMessageState: badMessageReducer,
	MessageReducer: MessageReducer,
});
