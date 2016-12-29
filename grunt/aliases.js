/*
  aliases.js
  David M. Anderson

  Grunt task aliases
  See https://www.npmjs.com/package/load-grunt-config .
*/

module.exports = {
    'lint:system': [
        'jsonlint:system',
        'jshint:system'
    ],
    'lint:server': [
        'jshint:server'
    ],
    'lint:client': [
        'htmlhint:client',
        'sass-lint:client',
        'jshint:client'
    ],
    'lint:public': [
        'csslint:public'
    ],
    lint: [
        'lint:system',
        'lint:server',
        'lint:client',
        'lint:public'
    ],
    'test:unit:server': [
        'mocha_istanbul'
    ],
    'test:unit:client': [
        'karma:browsers'
    ],
    'test:unit:headless': [
        'test:unit:server',
        'karma:headless'
    ],
    'test:unit:browsers': [
        'test:unit:server',
        'karma:browsers'
    ],
    test: [
        'test:unit:browsers'
    ],
    'build:public': [
        'copy:html',
        'replace:html',
        'compass:client',
        'copy:images',
        'symlink:favicon',
        'copy:js',
        'bower-install-simple',
        'copy:bower'
    ],
    'polish:public': [
        'useminPrepare',
        'cssmin:public',
        'filerev:css',
        'uglify:public',
        'filerev:js',
        'usemin',
        'htmlmin'
    ],
    serve: [
        'concurrent:debug'
    ],
    dev: [
        'lint:system',
        'lint:server',
        'lint:client',
        'clean:public',
        'build:public',
        'lint:public',
        'test:unit:browsers'
    ],
    prod: [
        'lint:system',
        'lint:server',
        'lint:client',
        'clean:tmp',
        'clean:public',
        'build:public',
        'lint:public',
        'polish:public',
        'lint:public',
        'test:unit:headless'
    ],
    default: [
        'dev',
        'serve'
    ]
};
