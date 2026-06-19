import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemaTypes';

export default defineConfig({
  name: 'inmcers-studio',
  title: "Inmcers S.A Studio",
  projectId: 'inmcers-project-id', // Debe reemplazarse con el ID del proyecto de Sanity
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
