import {} from 'unocss';
import {
  presetAttributify,
  presetWebFonts,
  presetUno,
  presetMini,
  presetIcons,
  presetTypography,
  presetTagify,
  defineConfig,
  presetWind,
  transformerDirectives,
} from 'unocss';
import { presetHeroPatterns } from '@julr/unocss-preset-heropatterns';
import { presetFlowbite } from '@julr/unocss-preset-flowbite';
import { presetForms } from '@julr/unocss-preset-forms';
import presetDaisy from 'unocss-preset-daisy';

export default defineConfig({
  transformers: [transformerDirectives()],
  presets: [
    presetUno(),
    presetWind(),
    presetMini(),
    presetTagify(),
    presetAttributify(),
    presetTypography(),
    presetHeroPatterns(),
    presetFlowbite(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetDaisy(),
    presetForms(),
    presetWebFonts({
      provider: 'google', // default provider
      fonts: {
        sans: 'Roboto',
        mono: ['Fira Code', 'Fira Mono:400,700'],
        lobster: 'Lobster',
        lato: [
          {
            name: 'Lato',
            weights: ['400', '700'],
            italic: true,
          },
          {
            name: 'sans-serif',
            provider: 'none',
          },
        ],
      },
    }),
  ],
});
