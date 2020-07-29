
const express = require('express');
const router = express.Router();
const respond = require('../responses');
// const mongodb_config = require('../mongo.config');
const dbData = require('../database/db.config').VALIDUSER;

const {
  respondSuccess,
  respondServerError,
  respondForbidden,
  respondUnauthorized
} = require('../responses');

router.post('/login', async (req, res) => {

  let email = req.body.email;
  let password = req.body.password;

  if(email === '' || email === '' || typeof email === 'undefined' ){
    respondServerError(res, 'email missing');
    return;
  }
  if(password === '' || password === '' || typeof password === 'undefined' ){
    respondServerError(res, 'password missing');
    return;
  }

  if(email ===  dbData.email && password === dbData.password) {
    respondSuccess(res, {status: true, message: `Success: User ${email} login!`});
  }

  respondUnauthorized(res, 'Email and/or password are incorrect.');

});

router.post('/logout', async (req, res) => {
  let email = req.body.email;

  if(email === '' || email === '' || typeof email === 'undefined' ){
    respondBadRequest(res, 'No email in the request');
    return;
  }

  respondSuccess(res, {status: true, message: `Success: user ${email} logout!`});

});

module.exports = router;
