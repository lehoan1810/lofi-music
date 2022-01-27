import Header from "./components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
// import Container from "./components/Container/Container";
function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				{/* <Container /> */}
			</div>
		</Router>
	);
}

export default App;
