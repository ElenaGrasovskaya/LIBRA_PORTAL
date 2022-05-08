/* eslint-disable import/order */
import { config, createSchema } from '@keystone-next/keystone/schema';
import { User } from './schemas/User';
import { Item } from './schemas/Item';
import { Order } from './schemas/Order';
import 'dotenv/config';
import { createAuth } from '@keystone-next/auth';
import {
  withItemData,
  statelessSessions,
} from '@keystone-next/keystone/session';

const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localho st/libraportal';
const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // How long should they stay signed in
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    // TODO: Add in initial roles here
  },
});

export default withAuth(
  config({
    server: {
      cors: {
        origin: ["*"],
        credentials: true,
      },
    },
    db: {
      adapter: 'mongoose',
      url: databaseURL,

      // TODO: Add data seeding here
    },
    lists: createSchema({
      // Schema items go in here
      User,
      Item,
      Order,
    }),
    ui: {
      // TODO: change this for roles

      isAccessAllowed: ({ session }) =>
        // console.log(session);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        !!session?.data,
    },

    session: withItemData(statelessSessions(sessionConfig), {
      // GraphQL query
      User: 'id name email',
    }),

    // TODO:Add session values here
  })
);
