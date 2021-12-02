export enum VideoPlatform {
  JWPLAYER = 'jwplayer',
}

interface Lesson {
  id: string;
  name: string;
  slug: string;
  content: string;
  video_platform: VideoPlatform;
  video_platform_key?: string;
  is_active: boolean;
  sequence: number;
  completed: boolean;
}

export default Lesson;
