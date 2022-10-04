// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@intlify/nuxt3'],
  intlify: {
    localeDir: 'locales', // set the `locales` directory at source directory of your Nuxt application
    vueI18n: {
      // defaultLocale: process.env.I18N_LOCALE,
      locale: process.env.LOCALE,
    },
  },
  dir: {
    layouts: `vendors/${process.env.VENDOR}/layouts`,
    public: `vendors/${process.env.VENDOR}/public`,
  },
  components: {
    //global: true,
    dirs: ['~/components', `vendors/${process.env.VENDOR}/components`],
  },
  vite: {
    clearScreen: true,
  },
  css: [
    `vendors/${process.env.VENDOR}/public/css/base.css`,
    `vendors/${process.env.VENDOR}/public/css/${process.env.LOCALE}.css`,
  ],
  unocss: {
    preflight: true,
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URI,
      iso: process.env.ISO, // Exposed to the frontend as well.
      lang: process.env.LANG,
      locale: process.env.LOCALE,
      calendar: process.env.CALENDAR,
      timeZone: process.env.TIMEZONE,
      vendor: process.env.VENDOR,
      recaptchSiteKey: process.env.RECAPTCHA_SITE_KEY,
      googleAnalyticID: process.env.GOOGLE_ANALYTICS_ID,
      rtl: process.env.RTL == 'true' ? true : false,
    },
    apiKey: process.env.API_KEY,
    apiUrl: process.env.API_URI,
    locale: process.env.LOCALE,
    lang: process.env.LANG,
    iso: process.env.ISO,
  },
});
