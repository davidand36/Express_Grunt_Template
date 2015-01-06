/*
  compass.js
  David M. Anderson

  Configuration of compass Grunt task
  See https://confluence.mheducation.com/display/MSNG/NGC+and+Flatirons%27+API
  and http://compass-style.org/
*/

module.exports = {
    client: {
        options: {
            sassDir: 'client/scss',
            cssDir: 'public/css'
        }
    }
};
