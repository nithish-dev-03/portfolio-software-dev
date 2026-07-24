import axios from 'axios';

const githubClient = axios.create({
  baseURL: 'http://localhost:5000/api/github',
});

export const getDashboard = async () => {
  const { data } = await githubClient.get('/dashboard');
  return data.data;
};

export const getProfile = async () => {
  const { data } = await githubClient.get('/profile');
  return data.data;
};

export const getRepositories = async () => {
  const { data } = await githubClient.get('/repos');
  return data.data;
};

export const getStats = async () => {
  const { data } = await githubClient.get('/stats');
  return data.data;
};

export const getLanguages = async () => {
  const { data } = await githubClient.get('/languages');
  return data.data;
};

export const getContributions = async () => {
  const { data } = await githubClient.get('/contributions');
  return data.data;
};
