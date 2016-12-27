/*
  ports.js
  David M. Anderson

  Ports to use for this app
*/

var basePort = 6203; //Use a different value for each project.

module.exports = {
    server: process.env.PORT || basePort,
    debugger: process.env.DEBUG_PORT || 10000 + basePort,
    inspector: process.env.INSPECTOR_PORT || 20000 + basePort,
    liveReload: process.env.LIVERELOAD_PORT || 30000 + basePort,
    karma: process.env.KARMA_PORT || 40000 + basePort
};
