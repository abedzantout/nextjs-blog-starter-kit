export function concatenateStrings(...args: string[]) {
  return args.join(',');
}

export const getNavigationLink = slug => `/post/${slug}`;

export const getHref = () => `/post/[slug]`;
