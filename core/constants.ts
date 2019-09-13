import { pageType, RobotsContent, Tag } from '../interfaces/tag';
import { concatenateStrings } from '../shared/helpers/helper';

export const defaultMetaTags: Tag = {
  canonical: 'https://www.techhive.io',
  description: 'Pushing you to the edge of technological innovation',
  image: 'https://www.techhive.io/image.png',
  robots: concatenateStrings(RobotsContent.index, RobotsContent.follow),
  title: 'Techhive.IO',
  type: pageType.website
};
