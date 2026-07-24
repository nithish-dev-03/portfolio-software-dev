import { useQuery } from '@tanstack/react-query';
import {
  getDashboard,
  getProfile,
  getRepositories,
  getStats,
  getLanguages,
  getContributions,
} from '../services/githubApi';

export const useGithubDashboard = () => {
  return useQuery({
    queryKey: ['githubDashboard'],
    queryFn: getDashboard,
  });
};

export const useGithubProfile = () => {
  return useQuery({
    queryKey: ['githubProfile'],
    queryFn: getProfile,
  });
};

export const useGithubRepos = () => {
  return useQuery({
    queryKey: ['githubRepos'],
    queryFn: getRepositories,
  });
};

export const useGithubStats = () => {
  return useQuery({
    queryKey: ['githubStats'],
    queryFn: getStats,
  });
};

export const useGithubLanguages = () => {
  return useQuery({
    queryKey: ['githubLanguages'],
    queryFn: getLanguages,
  });
};

export const useGithubContributions = () => {
  return useQuery({
    queryKey: ['githubContributions'],
    queryFn: getContributions,
  });
};
