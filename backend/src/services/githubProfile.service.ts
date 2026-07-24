import { githubClient } from '../utils/githubClient';
import { cache } from '../utils/cache';

export const getProfile = async () => {
  const cacheKey = 'github_profile';
  const cached = cache.get(cacheKey);
  if (cached) return cached;

  const { data } = await githubClient.get('/user');
  cache.set(cacheKey, data, 300); // 5 minutes
  return data;
};
