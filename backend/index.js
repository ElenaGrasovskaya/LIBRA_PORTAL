const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');

module.exports = {
  keystone: new Keystone(),
  apps: [
    new GraphQLApp({
      // All config keys are optional. Default values are shown here for completeness.
      apiPath: '/admin/api',
      graphiqlPath: '/admin/graphiql',
      schemaName: 'admin',
      apollo: {},
    }),
    new AdminUIApp(),
    new StaticApp({path:"/", src:'public'}), // for your static site
  ],
  

};

app.use('*', function (req, res, next) {
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-XSRF-TOKEN');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Method', 'GET,POST,PUT,DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});
app.options('*', function (req, res) {
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-XSRF-TOKEN');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Method', 'GET,POST,PUT,DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  res.sendStatus(200);
});
