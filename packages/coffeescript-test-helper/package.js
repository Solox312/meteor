Package.describe({
  summary: "Used by the coffeescript package's tests",
  version: "1.0.2-ipc.0"
});

Package.onUse(function (api) {
  api.use('coffeescript', ['client', 'server']);
  api.export('COFFEESCRIPT_EXPORTED');
  api.addFiles("exporting.coffee", ['client', 'server']);
});
