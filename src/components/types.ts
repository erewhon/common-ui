export type Article = {
  date: string;
  title: string;
  subtitle?: string;
  description?: string;
  author?: string;
  draft?: boolean;
  feature?: boolean;
  cardImage?: string;
  socialDescription?: string; // Longer former description for social media (Instagram, Threads, etc.)
  hideDisclosure?: boolean;
  slug?: string;
  url?: string;
  // content: React.ReactNode;
};
