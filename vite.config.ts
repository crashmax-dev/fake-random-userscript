import { defineConfig } from 'vite'
import Userscript from 'vite-userscript-plugin'

import { license, name, version } from './package.json'

export default defineConfig({
  plugins: [
    Userscript({
      fileName: 'fake-random',
      entry: 'src/index.ts',
      header: {
        name,
        version,
        license,
        match: [
          'https://www.random.org/widgets/integers/*'
        ]
      },
      server: {
        port: 3000
      }
    })
  ]
})
