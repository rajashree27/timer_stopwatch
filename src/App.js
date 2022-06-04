import { useState } from "react";
import "./App.css";
import Stopwatch from "./components/Stopwatch";
import Timer from "./components/Timer";

function App() {
	const [toggle, setToggle] = useState(false);
  

	return (
		<div className="App">
			<button
				onClick={() => {
					setToggle(!toggle);
				}}
			>
				{toggle ? "Go to stopwatch" : "Go to timer"}
			</button>
			{toggle ? <Timer /> : <Stopwatch />}
		</div>
	);
}

export default App;
