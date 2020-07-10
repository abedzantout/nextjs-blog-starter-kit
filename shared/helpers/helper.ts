export function concatenateStrings(...args: string[]): string {
  return args.join(',');
}

export const getNavigationLink = (slug): string => `/post/${slug}`;

export const getHref = (): string => `/post/[slug]`;
