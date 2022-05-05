const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');

const keystone = new Keystone({...});

const authStrategy = keystone.createAuthStrategy({...});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      adminPath: '/admin',
      authStrategy,
    }),
  ],
};

const { NextApp } = require('@keystonejs/app-next');

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({ enableDefaultRoute: false }),
    new NextApp({ dir: './frontend' }),
  ]
  
};
