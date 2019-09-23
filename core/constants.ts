import { PageType, RobotsContent, MetaTags } from '../interfaces/meta-tags';
import { concatenateStrings } from '../shared/helpers/helper';

export const defaultMetaTags: MetaTags = {
  canonical: `${process.env.DOMAIN_PUBLIC}`,
  description: 'Pushing you to the edge of technological innovation',
  image: 'https://www.techhive.io/image.png',
  robots: concatenateStrings(RobotsContent.index, RobotsContent.follow),
  title: 'Techhive.IO',
  type: PageType.website
};
