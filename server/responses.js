/**
 * Wrap message in error response object.
 * @param message
 * @returns {{status: string, message: *}}
 */
function wrapError(message) {
  return {
    status: 'error',
    message
  }
}

function respond(res, statusCode, data) {
  res.writeHead(statusCode, {'Content-Type': 'application/json'});
  res.write(JSON.stringify(data));
  res.end();
}

/**
 * Respond success
 * @param res
 * @param data
 */
function respondSuccess(res, data) {
  respond(res, 200, data);
}

exports.respondSuccess = respondSuccess;

/**
 * Respond server error.
 * @param res
 * @param message
 */
function respondServerError(res, message) {
  respond(res, 500, wrapError(message));
}

exports.respondServerError = respondServerError;

function respondUnauthorized(res, message) {
  respond(res, 401, wrapError(message || `User need to auth first.`))
}

exports.respondUnauthorized = respondUnauthorized;

function respondForbidden(res, message) {
  respond(res, 403, wrapError(message || `User doesn't have rights to execute this process.`))
}

exports.respondForbidden = respondForbidden;


/**
 * Respond not found.
 * @param res Express response object
 * @param {string} [message] Message to sent back
 */
function respondNotFound(res, message) {
  respond(res, 404, wrapError(message || `Requested object not found.`));
}

exports.respondNotFound = respondNotFound;

/**
 * Respond bad request.
 *
 * @param {object} res Express response object
 * @param {string} [message] Message to sent back
 * @returns {void}
 */
function respondBadRequest(res, message) {
  respond(res, 400, wrapError(message || `Bad request.`));
}

exports.respondBadRequest = respondBadRequest;
