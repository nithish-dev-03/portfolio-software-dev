import { Request, Response, NextFunction } from 'express';
import { getProfile } from '../services/githubProfile.service';
import { getRepos } from '../services/githubRepo.service';
import { getStats } from '../services/githubStats.service';
import { getContributions } from '../services/githubContribution.service';
import { getLanguages } from '../services/githubLanguage.service';
import { getDashboard } from '../services/githubDashboard.service';
import { githubClient } from '../utils/githubClient';
import { z } from 'zod';

const paginationSchema = z.object({
  page: z.string().optional(),
  sort: z.string().optional(),
  direction: z.string().optional(),
  limit: z.string().optional(),
});

export const getProfileController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await getProfile();
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const getReposController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const query = paginationSchema.parse(req.query);
    const data = await getRepos();
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const getStatsController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await getStats();
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const getContributionsController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await getContributions();
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const getLanguagesController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await getLanguages();
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const getDashboardController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await getDashboard();
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const getEventsController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const profile = await getProfile();
    const { data } = await githubClient.get(`/users/${profile.login}/events`);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const getFollowersController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { data } = await githubClient.get('/user/followers');
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const getFollowingController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { data } = await githubClient.get('/user/following');
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const getPinnedController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const query = `
      {
        viewer {
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                name
                description
                url
                stargazerCount
                forkCount
                primaryLanguage {
                  name
                  color
                }
              }
            }
          }
        }
      }
    `;
    const { data } = await githubClient.post('/graphql', { query });
    res.json({ success: true, data: data.data.viewer.pinnedItems.nodes });
  } catch (error) {
    next(error);
  }
};
