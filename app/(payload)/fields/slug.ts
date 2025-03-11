import { Field } from 'payload/types';

export const slugField = (): Field => ({
  name: 'slug',
  type: 'text',
  admin: {
    position: 'sidebar',
  },
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (data.title) {
          return data.title
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '');
        }
        return data.slug;
      },
    ],
  },
}); 