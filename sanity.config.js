import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

console.log('SANITY_PROJECT_ID:', process.env.SANITY_STUDIO_PROJECT_ID)
console.log('SANITY_DATASET:', process.env.SANITY_STUDIO_DATASET)

export default defineConfig({
  name: 'default',
  title: 'impulsar-turismo',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
