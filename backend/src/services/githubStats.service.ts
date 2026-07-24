import { getProfile } from './githubProfile.service';
import { getRepos } from './githubRepo.service';

export const getStats = async () => {
  const [profile, repos] = await Promise.all([
    getProfile(),
    getRepos()
  ]);

  const stars = repos.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);
  const forks = repos.reduce((acc: number, repo: any) => acc + repo.forks_count, 0);
  const watchers = repos.reduce((acc: number, repo: any) => acc + repo.watchers_count, 0);

  return {
    totalRepositories: profile.public_repos + (profile.total_private_repos || 0),
    publicRepositories: profile.public_repos,
    privateRepositories: profile.total_private_repos || 0,
    stars,
    forks,
    watchers,
    followers: profile.followers,
    following: profile.following,
  };
};
