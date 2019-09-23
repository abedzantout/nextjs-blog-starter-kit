export function concatenateStrings(...args: string[]) {
  return args.join(',');
}

export const getNavigationLink = slug => `/post/${slug}`;

export const getHref = slug => ({
  pathname: '/post',
  query: { post: slug }
});
