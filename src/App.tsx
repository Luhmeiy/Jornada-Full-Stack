import { useEffect, useState } from "react";
import "./App.scss";
import Video from "./pages/Video";
import { VideoData } from "./interfaces/VideoProps";

import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {
	const [videos, setVideos] = useState<VideoData[]>();

	const getVideos = async () => {
		const videosCollection = collection(db, "videos");
		const videosSnapshot = await getDocs(videosCollection);

		const videosList = videosSnapshot.docs.map((doc) =>
			doc.data()
		) as VideoData[];
		setVideos(videosList);
	};

	useEffect(() => {
		getVideos();
	}, []);

	return (
		<div className="app">
			<div className="app__videos">
				{videos &&
					videos.map((video, index) => (
						<Video key={video.name + index} {...video} />
					))}
			</div>
		</div>
	);
}

export default App;
