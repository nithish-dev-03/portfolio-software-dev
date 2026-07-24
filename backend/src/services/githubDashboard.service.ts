import { getProfile } from './githubProfile.service';
import { getRepos } from './githubRepo.service';
import { getContributions } from './githubContribution.service';
import { getLanguages } from './githubLanguage.service';
import { getStats } from './githubStats.service';
import { cache } from '../utils/cache';

export const getDashboard = async () => {
  const cacheKey = 'github_dashboard';
  const cached = cache.get(cacheKey);
  if (cached) return cached;

  const [profile, repos, contributions, languages, stats] = await Promise.all([
    getProfile(),
    getRepos(),
    getContributions(),
    getLanguages(),
    getStats()
  ]);

  const sortedRepos = [...repos].sort((a: any, b: any) => b.stargazers_count - a.stargazers_count);
  const topRepositories = sortedRepos.map(repo => ({
    name: repo.name,
    description: repo.description,
    language: repo.language,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    url: repo.html_url,
    isPrivate: repo.private
  }));

  const result = {
    ...stats,
    languages,
    topRepositories,
    contributions
  };

  cache.set(cacheKey, result, 300); // 5 minutes
  return result;
};
