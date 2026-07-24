import { getRepos } from './githubRepo.service';
import { cache } from '../utils/cache';

export const getLanguages = async () => {
  const cacheKey = 'github_languages';
  const cached = cache.get(cacheKey);
  if (cached) return cached;

  const repos = await getRepos();
  const langMap: Record<string, number> = {};
  
  for (const repo of repos) {
    if (repo.language) {
      langMap[repo.language] = (langMap[repo.language] || 0) + 1;
    }
  }
  
  const result = Object.entries(langMap)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
    
  cache.set(cacheKey, result, 600); // 10 minutes
  return result;
};
