// package metadata file for Meteor.js

var packageName = 'benmgreene:jsplumb';  // http://atmospherejs.com/benmgreene/jsplumb
var where = 'client';  // where to install: 'client', 'server', or ['client', 'server']

var packageJson = JSON.parse(Npm.require("fs").readFileSync('package.json'));

Package.describe({
  name: packageName,
  summary: 'jsPlumb: visually connect elements on a web page, using SVG',
  version: packageJson.version,
  git: 'https://github.com/benmgreene/jsPlumb.git'
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');
  api.export('jsPlumb');
  api.addFiles([
    'dist/js/dom.jsPlumb-' + packageJson.version + '.js'
  ], where
  );
});

Package.onTest(function (api) {
  api.use(packageName, where);
  api.use('tinytest', where);

  api.addFiles('meteor/test.js', where);
});
