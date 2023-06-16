import styles from "./VideoFooter.module.scss";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function VideoFooter() {
	return (
		<div className={styles["video-footer"]}>
			<div className={styles["video-footer__text"]}>
				<h3>@Luhmeiy</h3>
				<p>Descrição do vídeo</p>

				<div className={styles["video-footer__music"]}>
					<MusicNoteIcon />
					<div className={styles["video-footer__music-text"]}>
						<p>Título da música</p>
					</div>
				</div>
			</div>

			<img
				src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z"
				alt="Imagem de um vinil girando"
				className={styles["video-footer__record"]}
			/>
		</div>
	);
}

export default VideoFooter;
