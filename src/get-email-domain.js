const { NotImplementedError } = require('../lib');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let searchElem = email.lastIndexOf('@') + 1;
  let result = email.slice(searchElem);
  return result
}

module.exports = {
  getEmailDomain
};
