import { githubClient } from '../utils/githubClient';
import { cache } from '../utils/cache';

export const getRepos = async () => {
  const cacheKey = 'github_repos';
  const cached = cache.get(cacheKey);
  if (cached) return cached;

  const { data } = await githubClient.get('/user/repos?per_page=100&sort=pushed&affiliation=owner');
  cache.set(cacheKey, data, 300); // 5 minutes
  return data;
};
