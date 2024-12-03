import { defineConfig, presetUno, presetAttributify } from 'unocss'
import { presetFluid } from 'unocss-preset-fluid'

export default defineConfig({
  presets: [
    presetAttributify({ /* preset options */}),
    presetUno(),
    presetFluid({
      maxWidth: 1920,
      minWidth: 1024
    })
  ]
  // ...UnoCSS options
})