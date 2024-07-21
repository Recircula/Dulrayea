import {sassPlugin} from 'esbuild-sass-plugin'

await esbuild.build({
  ...
  plugins: [sassPlugin()]
})