import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Sidebar from "./components/Admin/index";
import ManagerUser from "./pages/ManagerUser/index";
import ManagerStatistic from "./pages/Statistic/index";
import "./App.scss";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Header />} />
				<Route path="login" element={<Login />} />
				<Route path="admin" element={<Sidebar />}>
					<Route path="ManagerUser" element={<ManagerUser />} />
					<Route path="ManagerStatistic" element={<ManagerStatistic />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
