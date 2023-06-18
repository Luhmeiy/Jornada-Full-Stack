import { useRef, useState } from "react";
import styles from "./Video.module.scss";
import { VideoData } from "../../interfaces/VideoProps";
import VideoFooter from "../../components/VideoFooter";
import VideoSidebar from "../../components/VideoSidebar";

function Video({
	likes,
	comments,
	shares,
	name,
	description,
	music,
	url,
}: VideoData) {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [play, setPlay] = useState(false);

	const handleStart = () => {
		const video = videoRef.current;

		if (!video) return;

		!play ? video.play() : video.pause();
		setPlay(!play);
	};

	return (
		<div className={styles.video}>
			<video
				className={styles.video__player}
				ref={videoRef}
				onClick={handleStart}
				loop
				src={url}
			></video>

			<VideoSidebar likes={likes} comments={comments} shares={shares} />
			<VideoFooter name={name} description={description} music={music} />
		</div>
	);
}

export default Video;
