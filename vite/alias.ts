import { fileURLToPath, URL } from 'node:url'

const alias = {
  '~': fileURLToPath(new URL('./', import.meta.url)),
  '@': fileURLToPath(new URL('../src', import.meta.url)),
}

export default alias
