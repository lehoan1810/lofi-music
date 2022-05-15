import Header from "./components/Header/Header";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Statistic from "./components/Statistic";
import Login from "./components/Login";
// import Routes from "./config/Routes";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Header />} />
				<Route path="/login" element={<Login />} />
				<Route path="/admin" element={<Statistic />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
