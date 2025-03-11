import { buildConfig } from 'payload/config';
import path from 'path';
import { Posts } from './collections/Posts';
import { Categories } from './collections/Categories';

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    user: 'users',
    bundler: {
      configPath: path.resolve(__dirname, './webpack.config.ts'),
    },
  },
  collections: [
    Posts,
    Categories,
    {
      slug: 'media',
      upload: {
        staticDir: path.resolve(__dirname, '../../public/media'),
      },
      fields: [],
    },
    {
      slug: 'users',
      auth: true,
      admin: {
        useAsTitle: 'email',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
        },
      ],
    },
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
}); 