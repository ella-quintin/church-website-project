import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { structure } from "./structure";


export default defineConfig({
  name: 'default',
  title: 'MDM CMS',

  projectId: '6hvvq1ef',
  dataset: 'production',

 plugins: [
  structureTool({ structure }),
  visionTool(),
],

  schema: {
    types: schemaTypes,
  },

   

  document: {
  newDocumentOptions: (prev, context) => {
    const { currentUser } = context;

    if (currentUser?.roles?.some(role => role.name === "editor")) {
      return prev.filter(
        option => option.schemaType !== "branch"
      );
    }

    return prev;
  },
},

})
