import express from 'express';
import { dateMiddleware, queryLogger } from './middleware/auth';
import auth from './route/contactsRoute';