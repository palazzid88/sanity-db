import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import 'dotenv/config'


export default defineConfig({
  name: 'default',
  title: 'impulsar-turismo',

  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,

  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
