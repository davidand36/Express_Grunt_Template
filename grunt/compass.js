/*
  compass.js
  David M. Anderson

  Configuration of compass Grunt task
  See https://www.npmjs.com/package/grunt-contrib-compass
  and http://compass-style.org/
*/

module.exports = {
    client: {
        options: {
            sassDir: 'client',
            cssDir: 'public',
            sourcemap: true
        }
    }
};
