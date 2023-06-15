import "./App.scss";
import Video from "./pages/Video";

function App() {
	return (
		<div className="app">
			<div className="app__videos">
				<Video />
				<Video />
				<Video />
				<Video />
			</div>
		</div>
	);
}

export default App;
