export interface VideoSidebarProps {
	likes: number;
	comments: number;
	shares: number;
}

export interface VideoFooterProps {
	name: string;
	description: string;
	music: string;
}

export interface VideoProps extends VideoSidebarProps, VideoFooterProps {
	url: string;
}
