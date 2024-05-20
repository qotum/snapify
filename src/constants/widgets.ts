import type { Widget } from "@/components/product";

export const WIDGETS: {
  [key: string]: Widget;
} = {
  CHANNEL_NAME: {
		label: "Nom de chaîne",
		id: "channelName",
	},
	CHANNEL_LOGO: {
		label: "Logo de chaîne",
		id: "channelLogo",
	},
	VIDEO_DURATION: {
		label: "Durée de la vidéo",
		id: "videoDuration",
	},
	VIDEO_VIEWS: {
		label: "Nombre de vues",
		id: "videoViews",
	},
	VIDEO_PUBLISHED_AT: {
		label: "Date de publication",
		id: "videoPublishedAt",
	},
	VIDEO_PROGRESS_BAR: {
		label: "Barre de lecture",
		id: "videoProgressBar",
	},
};