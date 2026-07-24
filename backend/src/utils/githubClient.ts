import axios from 'axios';
import { env } from '../config/env.config';

export const githubClient = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${env.GITHUB_TOKEN}`,
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  },
});

githubClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('GitHub API Error:', error.response?.data || error.message);
    throw error;
  }
);
