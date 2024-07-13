import "./App.css";
import FlightList from "./Pages/FlightList/FlightList";
import LoginForm from "./Pages/login/login";
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from "react-router-dom";

function App() {

	return (
		<>
			<div className="w-screen h-screen p-12 overflow-hidden flex items-center justify-center	 ">
				<Router>
					<Routes>
						<Route
							path="/login"
							element={<LoginForm />}
						/>

						<Route path="/" element={<FlightList />} />
					</Routes>
				</Router>
			</div>
		</>
	);
}

export default App;
