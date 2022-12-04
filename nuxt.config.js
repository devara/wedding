export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  loading: {
    color: '#2563eb',
    height: '3px'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'LISDA & DEVA',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'title',
        name: 'title',
        content: 'Lisda & Deva - Wedding Invitation'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'deva lisda, devara eko, lisda meilinda, wedding, digital wedding, wedding website, wedding invitation'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Undangan digital untuk pernikahan Lisda Meilinda dan Devara Eko Katon Mahardika'
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://lisda.devaraeko.com/' },
      {
        property: 'og:site_name',
        content: 'Lisda & Deva - Wedding Invitation'
      },
      { property: 'og:title', content: 'Lisda & Deva - Wedding Invitation' },
      {
        property: 'og:description',
        content:
          'Undangan digital untuk pernikahan Lisda Meilinda dan Devara Eko Katon Mahardika'
      },
      {
        property: 'og:image',
        content:
          'https://res.cloudinary.com/devaraeko/image/upload/images/wedding/web-cover.jpg'
      },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: 'https://lisda.devaraeko.com/' },
      {
        property: 'twitter:title',
        content: 'Lisda & Deva - Wedding Invitation'
      },
      {
        property: 'twitter:description',
        content:
          'Undangan digital untuk pernikahan Lisda Meilinda dan Devara Eko Katon Mahardika'
      },
      {
        property: 'twitter:image',
        content:
          'https://res.cloudinary.com/devaraeko/image/upload/images/wedding/web-cover.jpg'
      },
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: 'Lisda & Deva - Wedding Invitation'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://product-gallery.cloudinary.com/all.js'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/style.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    // '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-webfontloader',
    '@nuxt/image',
    ['cookie-universal-nuxt', { sameSite: 'None', secure: true }]
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
      name: 'LISDA & DEVA WEDDING'
    }
  },

  // Web Fonts Load
  webfontloader: {
    google: {
      families: [
        'Dancing+Script:400,500',
        'Cookie',
        'Bitter:300,400,500,600,700'
      ],
      urls: [
        'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500&display=swap',
        'https://fonts.googleapis.com/css2?family=Cookie&display=swap',
        'https://fonts.googleapis.com/css2?family=Bitter:wght@300;400;500;600;700&display=swap'
      ]
    }
  },

  image: {
    // Options
    provider: 'cloudinary',
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/devaraeko/image/upload/'
    }
  },

  fontawesome: {
    component: 'fa',
    icons: {
      solid: [
        'faEnvelopeOpen',
        'faClock',
        'faCalendar',
        'faLocationDot',
        'faPlay',
        'faPause',
        'faGift',
        'faImage',
        'faHeart',
        'faCopy',
        'faMapLocationDot'
      ],
      brands: ['faInstagram']
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        'postcss-custom-properties': false
      }
    },
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          esModule: false
        }
      })
    }
  }
}
