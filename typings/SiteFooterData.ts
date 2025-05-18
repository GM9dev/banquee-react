export type SiteFooterData = {
  id: number;
  siteLogo: string;
  boxes: Array<{
    title: string;
    option1: string;
    option2: string;
    option3: string;
  }>;
  lastWord1: string;
  lastWord2: string;
};

export default SiteFooterData;
