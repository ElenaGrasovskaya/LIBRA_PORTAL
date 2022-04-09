import { integer, select, text, relationship, timestamp  } from '@keystone-next/fields';
import { list  } from '@keystone-next/keystone/schema';



export const Order = list({
  // TODO
  // access:
  fields: {
    name: text({ isRequired: true }),
    author: relationship({ ref: 'User.ordersCreated', many: false}),
    items: relationship({ ref: 'Item.order', many: true}),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    dateCreated: timestamp(),
    status: select({
      options: [
        { label: 'В работе', value: 'PROGRESS' },
        { label: 'Выполнен', value: 'DONE' },
            ],
      defaultValue: 'PROGRESS',
      /*ui: {
        displayMode: 'segmented-control',
        createView: { fieldMode: 'hidden' },
      },*/
    }),
    clientPrice: integer(),
    clientPrepay: integer(),
    clientDept: integer(),
    expence: integer(),
    interest: integer(),
    personalExpence: integer(),
    // TODO: Photo
  },
});
