export type Video = {
  type: "youtube";
  id: string;
  title: string;
  thumbnailUrl: string;
  channelName: string;
  channelLogoUrl: string;
  duration: number;
  viewsCount: number;
  publishedAt: Date;
};