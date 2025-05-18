export type SiteOrganizeData = {
  id: number;
  subTitle: string;
  mainTitle: string;
  description: string;
  options: string;
  boxes: Array<{ image: string; goals: string; price: string }>;
};

export default SiteOrganizeData;
