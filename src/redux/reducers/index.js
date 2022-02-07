import { combineReducers } from "redux";
import modeReducer from "./modeReducer";
import rainReducer from "./rainReducer";
import moodReducer from "./moodReducer";
import volumeReducer from "./volumeReducer";

export const rootReducer = combineReducers({
	modeState: modeReducer,
	rainState: rainReducer,
	moodState: moodReducer,
	volumeState: volumeReducer,
});
