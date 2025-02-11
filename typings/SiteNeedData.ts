export type FAQListType = {
  answer: string;
  question: string;
};

type SiteNeedData = {
  mainTitle: string;
  contactPhoneNumber: string;
  contactNumber: string;
  email: string;
  contactEmail: string;
  option: string;
  faqList: FAQListType[];
};

export default SiteNeedData;
