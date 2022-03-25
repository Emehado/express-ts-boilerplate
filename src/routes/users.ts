import {
  BadRequest,
  Forbidden,
  NotFound,
  Unauthorized,
} from '@/utils/generalError';
import express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('all users');
});

// Get user by id
router.get('/:id', function (req, res, next) {
  if (req.params.id === 'a') {
    throw new NotFound("user with ID 'a' not found"); //return 404 error. Resource not found
  }
  if (req.params.id === 'b') {
    throw new BadRequest('user cred not valid'); //Return 400 error. Bad Request
  }
  if (req.params.id === 'c') {
    throw new Unauthorized('session expired or user not loggedIn'); //Return Unauthorized error. Unauthorized
  }
  if (req.params.id === 'd') {
    throw new Forbidden('user does not have access to this resource'); //Return Forbidden error. Forbidden
  }
  res.send(`user with id ${req.params.id} found`);
});

export default router;
