/*
  helmet.js
  David M. Anderson

  Configuration for Helmet security middleware.
  See https://www.npmjs.com/package/helmet .
*/

module.exports = {
    contentSecurityPolicy: {
        //See Helmet doc and http://www.html5rocks.com/en/tutorials/security/content-security-policy/
        defaultSrc: [ "'self'" ]
    },
    xssFilter: null,
    frameGuard: null,
    hsts: { maxAge: 18*7*24*60*60*1000 },
    hidePoweredBy: null,
    ieNoOpen: null,
    noSniff: null,
    crossDomain: null
};
