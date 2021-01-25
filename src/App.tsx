import "./App.css";
import Counter from "./Component/Counter";
function App() {
	return (
		<div className="App">
			<Counter defaultValue={0}></Counter>
		</div>
	);
}

export default App;
