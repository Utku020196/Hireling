import { BLOG_PATH, getPost, type Post } from '@/data/blog';

export type Route = { name: 'home' } | { name: 'blog' } | { name: 'post'; post: Post } | { name: 'notfound' };

/**
 * Pathname-based routing without a router library. Every route is a real
 * page load: the build emits static HTML for /blog and each /blog/<slug>.
 */
export function resolveRoute(pathname: string): Route {
  const path = pathname.replace(/\/+$/, '') || '/';
  if (path === '/' || path === '/index.html') return { name: 'home' };
  if (path === BLOG_PATH) return { name: 'blog' };
  if (path.startsWith(`${BLOG_PATH}/`)) {
    const post = getPost(decodeURIComponent(path.slice(BLOG_PATH.length + 1)));
    return post ? { name: 'post', post } : { name: 'notfound' };
  }
  return { name: 'notfound' };
}
