/*
  ports.js
  David M. Anderson

  Ports to use for this app
*/

module.exports = {
    server: process.env.PORT || 6203,
    debugger: process.env.DEBUG_PORT || 16203,
    inspector: process.env.INSPECTOR_PORT || 26203
};
