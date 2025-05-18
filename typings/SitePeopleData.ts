export type SitePeopleData = {
  id: number;
  subTitle: string;
  mainTitle: string;
  info: string;
  boxes: Array<{ title: string; text: string; name: string; job: string }>;
};

export default SitePeopleData;
