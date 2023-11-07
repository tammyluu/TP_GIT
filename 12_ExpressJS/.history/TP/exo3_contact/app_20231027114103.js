import express from 'express';
import { dateMiddleware, queryLogger } from './middleware/auth.js';
import auth from './route/contactsRoute.js';

const app = express();
