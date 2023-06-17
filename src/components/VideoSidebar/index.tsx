import { useState } from "react";
import styles from "./VideoSidebar.module.scss";
import { VideoSidebarProps } from "../../interfaces/VideoProps";

// Icons
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";

function VideoSidebar({ likes, comments, shares }: VideoSidebarProps) {
	const [liked, setLiked] = useState(false);

	function handleLike() {
		setLiked(!liked);
	}

	return (
		<div className={styles["video-sidebar"]}>
			<div
				className={styles["video-sidebar__options"]}
				onClick={handleLike}
			>
				{liked ? (
					<FavoriteIcon fontSize="large" />
				) : (
					<FavoriteBorderIcon fontSize="large" />
				)}
				<p>{liked ? likes + 1 : likes}</p>
			</div>

			<div className={styles["video-sidebar__options"]}>
				<ChatIcon fontSize="large" />
				<p>{comments}</p>
			</div>

			<div className={styles["video-sidebar__options"]}>
				<ShareIcon fontSize="large" />
				<p>{shares}</p>
			</div>
		</div>
	);
}

export default VideoSidebar;
