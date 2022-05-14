import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
function App() {
	return (
		<Router>
			<div className="App">
				<Header />
			</div>
		</Router>
	);
}

export default App;
