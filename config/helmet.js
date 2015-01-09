/*
  helmet.js
  David M. Anderson

  Configuration for Helmet security middleware.
  NOTES:
  1. See https://www.npmjs.com/package/helmet for details.
  2. These settings, particularly for contentSecurityPolicy, are pretty
     restrictive. They would prohibit use of a CDN, for instance. So many
     apps will need to adjust them.
*/

var ports = require( '../config/ports' );

module.exports = {
    contentSecurityPolicy: {
        //See Helmet doc and http://www.html5rocks.com/en/tutorials/security/content-security-policy/
        defaultSrc: [ "'self'" ],
        scriptSrc: (process.env.NODE_ENV === 'development') ?
            [ "'self'", "'unsafe-inline'", 'http://localhost:' + ports.liveReload ] :
            [ "'self'" ],
        connectSrc: (process.env.NODE_ENV === 'development') ?
            [ "'self'", 'ws://localhost:' + ports.liveReload ] :
            [ "'self'" ]
    },
    xssFilter: null,
    frameGuard: null,
    hsts: { maxAge: 18*7*24*60*60*1000 },
    hidePoweredBy: null,
    ieNoOpen: null,
    noSniff: null,
    crossDomain: null
};
