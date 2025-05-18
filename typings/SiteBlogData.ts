export type SiteBlogData = {
  id: number;
  title: string;
  options: string;
  boxes: Array<{
    image: string;
    title: string;
    text: string;
    link1: string;
    link2: string;
  }>;
};

export default SiteBlogData;
