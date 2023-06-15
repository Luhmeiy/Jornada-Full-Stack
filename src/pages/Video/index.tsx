import { useRef, useState } from "react";
import styles from "./Video.module.scss";

function Video() {
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
				src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
			></video>
		</div>
	);
}

export default Video;
