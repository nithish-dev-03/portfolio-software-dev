import { Router } from 'express';
import * as githubController from '../controllers/github.controller';

const router = Router();

router.get('/dashboard', githubController.getDashboardController);
router.get('/profile', githubController.getProfileController);
router.get('/repos', githubController.getReposController);
router.get('/stats', githubController.getStatsController);
router.get('/languages', githubController.getLanguagesController);
router.get('/contributions', githubController.getContributionsController);
router.get('/events', githubController.getEventsController);
router.get('/followers', githubController.getFollowersController);
router.get('/following', githubController.getFollowingController);
router.get('/pinned', githubController.getPinnedController);

export default router;
