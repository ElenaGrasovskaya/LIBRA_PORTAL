import { integer, select, text, relationship, timestamp } from '@keystone-next/fields';
import { list  } from '@keystone-next/keystone/schema';



export const Item = list({
  // TODO
  // access:
  fields: {
    name: text({ isRequired: true }),
    author: relationship({ ref: 'User.itemsCreated', many: false}),
    order: relationship({ ref: 'Order.items', many:false}),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    status: select({
      options: [
        { label: 'Сергей', value: 'SERG' },
        { label: 'Максим', value: 'MAX' },
      ],
      defaultValue: 'MAX',
      /*ui: {
        displayMode: 'segmented-control',
        createView: { fieldMode: 'hidden' },
      },*/
    }),
    price: integer(),
    dateCreated: timestamp(),
    // TODO: Photo
  },
});
