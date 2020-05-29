import { Router } from 'express';
import * as MeetupController from './controller';

const routes = new Router();

routes.post('/group/new', GroupController.createGroup);
routes.post('/group/:groupId/meetups/new', GroupController.createGroupMeetup);

export default routes;
