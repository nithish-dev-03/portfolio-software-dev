import { githubClient } from '../utils/githubClient';
import { cache } from '../utils/cache';

export const getContributions = async () => {
  const cacheKey = 'github_contributions';
  const cached = cache.get(cacheKey);
  if (cached) return cached;

  const query = `
    query {
      viewer {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
                contributionLevel
              }
            }
          }
        }
      }
    }
  `;

  const { data } = await githubClient.post('/graphql', { query });
  const result = data.data.viewer.contributionsCollection.contributionCalendar;
  
  cache.set(cacheKey, result, 1800); // 30 minutes
  return result;
};
